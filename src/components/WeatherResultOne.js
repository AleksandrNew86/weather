
import "../styles/WeatherResult.css"
import React from "react";

function WeatherResultOne(props) {

    return (
        <div className="div-for-one-weather">
            <h4>Время: {props.weatherData[0]["dt_txt"]}</h4>
            <ul>
                <li><b>Температура:</b> {props.weatherData[0].main["temp"]} &deg;C</li>
                <li><b>Ощущается:</b> {props.weatherData[0].main["feels_like"]} &deg;C</li>
                <li><b>Влажность:</b> {props.weatherData[0].main["humidity"]} %</li>
                <li><b>Давление:</b> {props.weatherData[0].main["pressure"]*0.75} мм рт ст</li>
            </ul>

        </div>

    );
}

export default WeatherResultOne;