import React, { Fragment, useState, useEffect } from 'react';

export default function CityWeather(){
    const apiKey = "b8642f6a6885b73b64fe78b8c6e4631e";
    const [data, setData] = useState();
    const [city, setCity] = useState('Aarhus');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
            );
            if (response.ok) {
                const data = await (response.json());
                setData(data);
            }
        };

        fetchData();
    }, [city]);

    return (
        <Fragment>
          <h2>City search</h2>
          <label>City:  
          <input
            type="text"
            placeholder='Enter city name'
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          </label>
          <p>
            Weather: <br />
             {JSON.stringify(data)}
          </p>
        </Fragment>
      );
}