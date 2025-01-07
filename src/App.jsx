import React, { useContext, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Cards from './components/Cards'
const App = () => {
  const [pokename, setpokename] = useState([])
  const req = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
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
      console.log(finalResponse)
    }
    catch(e){
      console.log("Pokemon not found",e)
    } 
  }
  useEffect(() => {
    pokemonData()
  }, [])
  
  return (
    <div>
      <Nav/>
      <Cards/>
    </div>
  )
}

export default App