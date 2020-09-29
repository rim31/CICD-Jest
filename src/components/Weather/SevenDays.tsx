import React from 'react';
import moment from "moment";



export default function SevenDays(props: any) {
  let state: any = props.weatherSevenDays;
  // React.useEffect(() => { console.log("hour", state.data.hourly) }, [state.data])
  return (
    <div>
      <div className="ml-1 mr-1" style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
        {
          state.data && (
            state.data.hourly.map((day: any, i: number) =>
              <div key={i} className="ml-1 mr-1" style={{ flex: "0 0 auto" }}>
                < div style={{ backgroundColor: "grey", width: '110px', borderRadius: "8px" }}>
                  <div className="city-temp">
                    {Math.round(day.temp)}<sup>°C</sup>
                  </div>
                  <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                    <p style={{ color: "whitesmoke" }}>{day.weather[0].description}</p>
                  </div>
                  <p style={{ fontSize: "1rem", }}>{moment().add(i, 'hours').format("LT")}</p>
                </div>
              </div >
            )
          )
        }
      </div >
      <h1>7 days </h1>
      {
        state.data && (
          state.data.daily.map((day: any, i: number) => <div key={i} className="d-inline-flex ml-1 mr-1">
            <div style={{ backgroundColor: "turquoise", width: '110px', borderRadius: "8px" }}>
              <div className="city-temp">
                {Math.round(day.temp.day)}<sup>°C</sup>
              </div>
              <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                <p style={{ color: "whitesmoke" }}>{day.weather[0].description}</p>
              </div>
              <p style={{ fontSize: "1rem", }}>{moment().add(i, 'days').format("dddd, MMMM Do")}</p>
            </div>
          </div>
          )
        )
      }
    </div >
  );
}
