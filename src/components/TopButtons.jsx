import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

    return (
      <div className="flex items-center justify-around my-6 shadow md rounded">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium shadow-md cursor-pointer transition ease-out hover:scale-125 rounded"
            onClick={() => {
              console.log(city);
              setQuery({ q: city.title });
            }}
          >
            {city.title}
          </button>
        ))}
      </div>
    );
}

export default TopButtons;
