import React, { useState } from 'react'
import FetchData, { ForecastSevenDays } from './Weather';
import SevenDays from './SevenDays';
import moment from 'moment';
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11 - country Flag with isoCode
function countryToFlag(isoCode: any) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char: any) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

export default function Forecast() {
  const [query, setQuery] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [weather, setWeather] = useState<any>("")
  const [weatherSevenDays, setWeatherSevenDays] = useState<any>("")
  const [isLoading, setIsLoading] = useState(false);

  const search = async (e: any) => {
    if (e.key === "Enter" && query) {
      setIsLoading(true);
      const res: any = await FetchData(query.toLowerCase());
      if (res) {
        console.log("response : ===> ", res.data);
        setWeather(res.data);
        const response = await ForecastSevenDays(res.data.coord.lat, res.data.coord.lon);
        setWeatherSevenDays(response);
      }
      setQuery('');
      setLocation('');
      setIsLoading(false);
    }
  }


  const clickSearch = async (e: any) => {
    if (location) {
      setIsLoading(true);
      const res: any = await FetchData(location.toLowerCase());
      if (res) {
        setWeather(res.data);
        const response = await ForecastSevenDays(res.data.coord.lat, res.data.coord.lon);
        setWeatherSevenDays(response);
        setQuery('');
        setLocation('');
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="main-container">
      <div>
        <label className="text-center" >Search
        <input id="search" name="search" type="text" className="search form-control mr-2" placeholder="City..."
            value={query} onChange={(e) => { setQuery(e.target.value); setLocation(e.target.value); }} onKeyPress={search} />
        </label>
        <button id="btn-search" type="button" className="btn btn-primary ml-2" data-dismiss="modal"
          //onClick={(e: any) => { console.log(location); setQuery(e.target.value); }}>Search</button>
          onClick={(e: any) => { console.log(location); clickSearch(location); }}>Search</button>
      </div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          weather.main && (
            <div className="city">
              <h1>{moment().format("dddd, MMMM Do YYYY")}</h1>
              <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country} {countryToFlag(weather.sys.country)}</sup>
              </h2>
              <div className="city-temp">
                <p>Now {Math.round(weather.main.temp)}<sup>°C</sup></p>
              </div>
              <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p style={{ color: "whitesmoke" }}>{weather.weather[0].description}</p>
              </div>
              <SevenDays weatherSevenDays={weatherSevenDays} />
            </div>
          )
        )}
    </div>
  )
}
