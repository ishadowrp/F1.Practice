import React from 'react';

import SunnyIcon from '../img/weather/sunny-svgrepo-com.svg';
import CloudsSunIcon from '../img/weather/clouds-and-sun-svgrepo-com.svg';
import CloudsIcon from '../img/weather/clouds-svgrepo-com.svg';
import CloudsNightIcon from '../img/weather/cloudy-night-svgrepo-com.svg';
import MorningRainIcon from '../img/weather/morning-rain-svgrepo-com.svg';
import MorningSnowIcon from '../img/weather/morning-snow-svgrepo-com.svg';
import RainyIcon from '../img/weather/rainy-svgrepo-com.svg';
import SnowingIcon from '../img/weather/snowing-svgrepo-com.svg';
import SnowIcon from '../img/weather/snow-svgrepo-com.svg';
import SnowyIcon from '../img/weather/snowy-svgrepo-com.svg';
import StarsIcon from '../img/weather/stars-svgrepo-com.svg';
import StormIcon from '../img/weather/storm-svgrepo-com.svg';
import SummerRainIcon from '../img/weather/summer-rain-svgrepo-com.svg';
import TideIcon from '../img/weather/tide-svgrepo-com.svg';
import WindyIcon from '../img/weather/windy-svgrepo-com.svg';
import {Table} from "react-bootstrap";

function DayDetail(props: any) {
    let weatherIcon = SunnyIcon;
    if (props.day.weather[0].main === 'Clouds') {
        weatherIcon = CloudsIcon;
    } else if (props.day.weather[0].main === 'Clear') {
        weatherIcon = SunnyIcon;
    } else if (props.day.weather[0].main === 'Snow') {
        weatherIcon = SnowIcon;
    } else if (props.day.weather[0].main === 'Rain') {
        weatherIcon = RainyIcon;
    } else if (props.day.weather[0].main === 'Drizzle') {
        weatherIcon = MorningRainIcon;
    } else if (props.day.weather[0].main === 'Thunderstorm') {
        weatherIcon = StormIcon;
    }

    return (
        <div className = 'weatherHour'>
            <div className = 'weatherTemp'>
                <div className = 'dateDiv'>{new Date(props.day.dt*1000).toLocaleDateString()+' '+new Date(props.day.dt*1000).toLocaleTimeString().slice(0,-3)}</div>
                <img className = 'weatherIcon' src={weatherIcon} alt = 'weather icon' height = "40px" width = "40px" />
                <div>{props.day.weather[0].description}</div>
            </div>
            <div className = 'tempDay'>Day: {props.day.temp.day}° feels like {props.day.feels_like.day}°</div>
            <div className = 'tempDay'>Night: {props.day.temp.night}° feels like {props.day.feels_like.night}°</div>
            <div className = 'tempDay'>Evening: {props.day.temp.eve}° feels like {props.day.feels_like.eve}°</div>
            <div className = 'tempDay'>Morning: {props.day.temp.morn}° feels like {props.day.feels_like.morn}°</div>
            <div className = 'tempDay'>Max: {props.day.temp.max}°</div>
            <div className = 'tempDay'>Min: {props.day.temp.min}°</div>
            <div className = 'weatherOther'>
                <Table striped bordered hover variant="dark" size='sm' className = 'resultTableSP'>
                    <tbody>
                    <tr>
                        <td>Wind</td>
                        <td>{props.day.wind_speed} m/sec</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{props.day.humidity} %</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>{props.day.pressure} mm</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default DayDetail;