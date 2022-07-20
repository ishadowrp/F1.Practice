import React from 'react';
import '../css/ResultsByfilter.css';

import SPWeather from './SPWeather';
import TablePage from './TablePage';

function ResultsByFilter(props: any ) {

    if (props.resultType === 'today') {
        return (
            <SPWeather forecastData = { props.dataResult } />
        );
    } else {
        return (
            <React.Fragment>
                <TablePage forecastData = { props.dataResult } typeData = { props.resultType } />
            </React.Fragment>
        );
    }
}

export default ResultsByFilter;