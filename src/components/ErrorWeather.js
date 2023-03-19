import "../styles/WeatherResult.css"

function ErrorWeather(props) {


    return (
        <div className="div-for-one-weather">
            Данные  о погоде не получены, отправьте запрос.
        </div>
    );
}

export default ErrorWeather;