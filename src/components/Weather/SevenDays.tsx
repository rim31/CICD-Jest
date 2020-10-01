import React from 'react';
import moment from "moment";



export default function SevenDays(props: any) {
  let state: any = props.weatherSevenDays;

  return (
    <div className="block">
      {state.data && (<p className="title mt-2">48h</p>)}
      <div className="ml-1 mr-1" style={{
        display: "flex", flexWrap: "nowrap", overflowX: "auto", boxSizing: "border-box", whiteSpace: "break-spaces", flexDirection: "row",
      }}>
        {
          state.data && (
            state.data.hourly.map((day: any, i: number) =>
              <div key={i} className="ml-1 mr-1" style={{ flex: "0 0 auto", padding: "0px 2px 0px 2px", justifyContent: "center" }}>
                < div style={{ backgroundColor: "aquamarine", width: '110px', minHeight: "204px", borderRadius: "8px" }}>
                  <div className="city-temp">
                    {Math.round(day.temp)}<sup>°C</sup>
                  </div>
                  <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                    <p style={{ color: "grey" }}>{day.weather[0].description}</p>
                  </div>
                  <p style={{ fontSize: "1rem", }}>{moment().add(i, 'hours').format("LT")}</p>
                </div>
              </div >
            )
          )
        }
      </div >
      {state.data && (<p className="title mt-2">7 days </p>)}
      <div className="columns is-centered">
        <div className="column is-mobile is-tablet is-half">
          {
            state.data && (
              state.data.daily.map((day: any, i: number) => <div key={i} className="d-flex ml-1 mr-1">
                <div className="card">
                  <div className="card-image">
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left ">
                        {/* <figure className="image is-64x64"> */}
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                        {/* </figure> */}
                      </div>
                      <div className="rows">
                        <div className="media-content has-text-left row is-full">
                          <span className="title is-4">{Math.round(day.temp.day)}<sup>°C</sup> </span>
                          <span className="subtitle is-6">{day.weather[0].description}</span>
                        </div>
                        <div className="media-content has-text-left row is-full">
                          <time><span className="subtitle">{moment().add(i, 'days').format("dddd")} :</span><span> {moment().add(i, 'days').format("MMMM Do")}</span></time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            )
          }
        </div >
      </div >
    </div >
  );
}
