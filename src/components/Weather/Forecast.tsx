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

  React.useEffect(() => {
    clickSearch("paris");
    console.log("debug");
  })

  return (
    <div className="main-container">
      <label className="text-center" >Search a City</label>
      <div className="field has-addons has-addons-centered">
        <div className="control">
          <input className="input" type="text" placeholder="City..." value={query}
            onChange={(e) => { setQuery(e.target.value); setLocation(e.target.value); }} onKeyPress={search} />
        </div>
        <div className="control">
          <button id="btn-search" className="button is-info"
            onClick={(e: any) => { clickSearch(location) }}>Search</button>
        </div>
      </div>
      {
        isLoading ? (
          <progress className="progress is-small is-primary" max="100">loading</progress>
        ) : (
            weather.main && (
              <div className="city">
                <p className="subtitle">{moment().format("dddd, MMMM Do YYYY")}</p>
                <p className="city-name">
                  <span className="title">{weather.name}</span>
                  <sup className="title">{weather.sys.country} {countryToFlag(weather.sys.country)}</sup>
                </p>
                <div className="city-temp ">
                  <p className="title">Now {Math.round(weather.main.temp)}<sup>°C</sup></p>
                </div>
                <div className="info">
                  <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                  <p style={{ color: "grey" }}>{weather.weather[0].description}</p>
                </div>
                <SevenDays weatherSevenDays={weatherSevenDays} />
              </div>
            )
          )
      }
    </div >
  )
}
