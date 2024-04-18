import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div className="flex items-center justify-center justify-start mt-6 shadow-md rounded">
      <p className="text-white font-medium uppercase">{title}</p>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white rounded">
        {items.map(item=> (
              <div className="flex flex-col items justify-center">
                <p className="font-light text-sm">{item.title }</p>
          <img
            src={iconUrlFromCode(item.icon)}
            alt=""
            className="w-12 my-1"
          ></img>
                <p className="font-medium">{`${item.temp.toFixed()}°` }</p>
              </div>
        ))}
        </div>
      </div>
  );
}

export default Forecast