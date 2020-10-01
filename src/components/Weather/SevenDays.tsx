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
              state.data.daily.map((day: any, i: number) => <div key={i} className="d-flex mb-1">
                <div className="card">
                  <div className="card-image">
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content has-text-left rows is-full">
                        <time><div className="subtitle row">{moment().add(i, 'days').format("dddd")}</div></time>
                        <time><div> {moment().add(i, 'days').format("MMMM Do")}</div></time>
                      </div>
                      <div className="media-content rows has-text-right is-full">
                        <div className="subtitle is-6 row">{day.weather[0].description}</div>
                        <div className="title is-4 row">{Math.round(day.temp.day)}<sup>°C</sup> </div>
                      </div>
                      <div className="media-right ">
                        <figure className="image is-128x128">
                          <img className="city-icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                        </figure>
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
