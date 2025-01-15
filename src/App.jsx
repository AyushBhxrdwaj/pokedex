import React, { useContext, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Cards from './components/Cards'
const App = () => {
  const [pokename, setpokename] = useState([])
  const req = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
  const [search, setsearch] = useState("")
  const [original, setoriginal] = useState([])

  const pokemonData = async () => {
    try{
      const response = await fetch(req)
      const data = await response.json()
      
      const detailedPoke = data.results.map(async (item)=>{
        const newResponse =  await fetch(item.url)
        const newData = newResponse.json()
        return newData
      })
      const finalResponse = await Promise.all(detailedPoke)
      setpokename(finalResponse)
      setoriginal(finalResponse)

    }
    catch(e){
      console.log("Pokemon not found",e)
    } 
  }
  useEffect(() => {
    pokemonData()
  }, [])


  const pokesearch = (e) => {
    const pokemon = e.target.value;
    setsearch(pokemon); 

    if (pokemon === "") {
      setpokename(original);
    } else {
      // Filter Pokémon based on the search query
      const filtered = original.filter((item) =>
        item.name.toLowerCase().includes(pokemon.toLowerCase())
      );
      setpokename(filtered);  // Update the state with filtered Pokémon
    }
  };
  
  
  return (
    <div>
      <Nav/>  
      <div className='flex items-center justify-center p-3 m-2'>
        <input className='text-center font-bold rounded-md outline-none placeholder:text-black' type="text"  placeholder='Search' onChange={pokesearch} value={search} />
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-6">
        {Array.isArray(pokename) && pokename.length > 0 ? (
          pokename.map((item) => {
            return (
              <Cards
                key={item.id}
                img={item.sprites.front_default}
                name={item.name}
                type={item.types[0].type.name}
                height={item.height}
                weight={item.weight}
                attack={item.stats[1].base_stat}
                speed={item.stats[5].base_stat}
                defence={item.stats[2].base_stat}
                ability={item.abilities[0].ability.name}
              />
            );
          })
        ) : (
          <p>Loading Pokémon...</p>
        )}
      </div>
    </div>
  )
}

export default App