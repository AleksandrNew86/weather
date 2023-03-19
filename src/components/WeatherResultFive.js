
import "../styles/WeatherResult.css"
import React from "react";

function WeatherResultFive(props) {
    let weatherArray = []
    let count = 0;
    for (let i=0; i<33; i++) {
        if (i%8) continue;
        weatherArray[count]={};
        weatherArray[count]["date"] =  props.weatherData[i]["dt_txt"];
        weatherArray[count]["temp"] =  props.weatherData[i].main["temp"];
        weatherArray[count]["feels"] =  props.weatherData[i].main["feels_like"];
        weatherArray[count]["humidity"] =  props.weatherData[i].main["humidity"];
        weatherArray[count]["pressure"] =  props.weatherData[i].main["pressure"]*0.75;
        count++;
    }
    return (
        <div className="div-for-weather">
            {weatherArray.map((weather) =>
                <div className="div-for-one-weather" key={weather["date"]}>
                    <h4>Погода на :{weather["date"]}</h4>
                    <ul>
                        <li><b>Температура:</b> {weather["temp"]} &deg;C</li>
                        <li><b>Ощущается:</b> {weather["feels"]} &deg;C</li>
                        <li><b>Влажность:</b> {weather["humidity"]} %</li>
                        <li><b>Давление:</b> {weather["pressure"] * 0.75} мм рт ст</li>
                    </ul>
                </div>
            )
            }
        </div>

    );
}

export default WeatherResultFive;