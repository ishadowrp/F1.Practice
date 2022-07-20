import React from 'react';
import '../css/SPWeather.css';

import WeatherBlock from './WeatherBlock';
import MapBlock from './MapBlock';
import Precipitation from './Precipitation';

function SPWeather(props: any) {

    let formDate = '';

    if (props.forecastData) {
        formDate = new Date(props.forecastData.current.dt*1000).toLocaleDateString()+' '+new Date(props.forecastData.current.dt*1000).toLocaleTimeString().slice(0,-3);
    }

    if (props.forecastData) {
        return (
            <div className = 'foreCastGroup'>
                <div className = 'date'>
                    Now {formDate}
                </div>
                <div className = 'containerSP'>
                    <WeatherBlock weatherData = {props.forecastData.current} />
                    <MapBlock lati = {props.forecastData.lat} long = {props.forecastData.lon} />
                </div>
                <h6 className = 'headerPres'>Precipitation</h6>
                <div className = 'precipitations'>
                    {(props.forecastData.minutely ? props.forecastData.minutely.map((precipitation: any) => <Precipitation key={precipitation.dt} precipitation={precipitation}/>):'No data!')}
                </div>
            </div>
        );
    } else
        return (
            <div className = 'foreCastGroup'>
                Choice city for forecast!
            </div>
    );
}


export default SPWeather;