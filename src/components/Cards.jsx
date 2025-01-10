import React from 'react';

const Cards = (props) => {
  return (
    <div className="p-4">
      {/* Card Container */}
      <div className="bg-white w-60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image Section */}
        <div className=" relative flex justify-center">
          <div className='absolute w-24 h-24 bg-pink-600 rounded-full'></div>
          <img
            src={props.img}
            className="h-24 w-24 object-contain z-10"
          />
        </div>

        {/* Name Section */}
        <div className="text-center mt-4">
          <h1 className="text-lg font-bold text-gray-800 capitalize">{props.name}</h1>
          <p className="mt-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-black py-1 px-3 rounded-full">
            {props.type}
          </p>
        </div>

  
        <div className="mt-4 space-y-2 text-gray-600 text-sm">
          <p>
            <span className="font-bold">Height:</span> {props.height}
          </p>
          <p>
            <span className="font-bold">Weight:</span> {props.weight}
          </p>
          <p>
            <span className="font-bold">Speed:</span> {props.speed}
          </p>
          <p>
            <span className="font-bold">Defence:</span> {props.defence}
          </p>
          <p>
            <span className="font-bold">Attack:</span> {props.attack}
          </p>
          <p>
            <span className="font-bold">Ability:</span> {props.ability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
