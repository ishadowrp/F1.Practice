import React from 'react';
import {Table} from "react-bootstrap";
import '../css/HourDetail.css';

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

function HourDetail(props: any) {
    let weatherIcon = SunnyIcon;
    if (props.hour.weather[0].main === 'Clouds') {
        weatherIcon = CloudsIcon;
    } else if (props.hour.weather[0].main === 'Clear') {
        weatherIcon = SunnyIcon;
    } else if (props.hour.weather[0].main === 'Snow') {
        weatherIcon = SnowIcon;
    } else if (props.hour.weather[0].main === 'Rain') {
        weatherIcon = RainyIcon;
    } else if (props.hour.weather[0].main === 'Drizzle') {
        weatherIcon = MorningRainIcon;
    } else if (props.hour.weather[0].main === 'Thunderstorm') {
        weatherIcon = StormIcon;
    }

    return (
        <div className = 'weatherHour'>
            <div className = 'weatherTemp'>
                <div className = 'dateDiv'>{new Date(props.hour.dt*1000).toLocaleDateString()+' '+new Date(props.hour.dt*1000).toLocaleTimeString().slice(0,-3)}</div>
                <img className = 'weatherIcon' src={weatherIcon} alt = 'weather icon' height = "40px" width = "40px" />
                <div className = 'temp'>{props.hour.temp}° feels like {props.hour.feels_like}°</div>
            </div>
            <div className = 'weatherOther'>
                <Table striped bordered hover variant="dark" size='sm' className = 'resultTableSP'>
                    <tbody>
                    <tr>
                        <td>Wind</td>
                        <td>{props.hour.wind_speed} m/sec</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{props.hour.humidity} %</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>{props.hour.pressure} mm</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default HourDetail;