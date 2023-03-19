
import axios from "axios";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

import "../styles/YandexMap.css"

import WeatherResultOne from "./WeatherResultOne";
import WeatherResultFive from "./WeatherResultFive";
import ErrorWeather from "./ErrorWeather";

function GetWeather(props) {
    let [weatherData, setWeather] = useState([]);
    let newUpdateDate = props.updateDate
    if(!weatherData.length && props.coords.length ) {
            let lat = props.coords[0];
            let lon = props.coords[1];
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=64512e96f167bc502bdbfc288c984019`)
                .then(res => {
                    setWeather(res.data.list);
                });
        }
      if (weatherData.length && !props.isFiveDays) {
        return (
            <div>
                <WeatherResultOne weatherData={weatherData} />
                <Button className='button-another-city' variant="secondary" onClick={()=> {newUpdateDate([]); setWeather([])}}>Выбрать другой город</Button>
            </div>
      );
      }else if(weatherData.length) {
          return (
            <div>
              <WeatherResultFive weatherData={weatherData} />
               <Button className='button-another-city' variant="secondary" size="lg" onClick={()=> {newUpdateDate([]); setWeather([])}}>Выбрать другой город</Button>
            </div>
      );
      }
    return <ErrorWeather  weatherData={weatherData} /> ;
}

export default GetWeather;