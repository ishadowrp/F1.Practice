import React from 'react';
import '../css/Precipitation.css';


function Precipitation(props: any) {
    return (
        <div className='prescBlock'>
            <div className='time'>
                {new Date(props.precipitation.dt*1000).toLocaleTimeString().slice(0,-3)}
            </div>
            <div className='presc'>
                {props.precipitation.precipitation}
            </div>
        </div>
    );
}

export default Precipitation;