import React from 'react';
import Card from './Card';
import style from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={style.component}>
      {
        cities.map((city) => (
           <Card 
            key={city.key}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
           /> 
         ))
      }
    </div>
  )
};