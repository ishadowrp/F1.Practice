import React from 'react';
import '../css/TablePage.css';
import HourDetail from "./HourDetail";
import DayDetail from "./DayDetail";

function TablePage(props: any) {
    if (props.forecastData) {
        if (props.typeData === '2_days') {
            return (
                <div className = 'tableCont'>
                    <div className = 'contForecast'>
                        {props.forecastData.hourly.map((hour: any) => <HourDetail key={hour.dt} hour={hour}/>)}
                    </div>
                </div>
            );
        } else {
            return (
                <div className = 'tableCont'>
                    <div className = 'contForecast'>
                        {props.forecastData.daily.map((day: any) => <DayDetail key={day.dt} day={day}/>)}
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className = 'foreCastGroup'>
                Choice city for forecast!
            </div>
        );
    }
}

export default TablePage;