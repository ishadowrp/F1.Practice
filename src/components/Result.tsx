import React from 'react';
import '../css/Result.css';

import ResultsByFilter from './ResultsByFilter';
import { Nav } from "react-bootstrap";


function Result(props: any) {

    let [resultType, setType] = React.useState('today');

    function setChoiceResult(e: string | null) {
        if (e === null || e === 'today') {
            setType('today');
        } else if (e ==='2_days') {
            setType('2_days');
        } else {
            setType('week');
        }
    }

    return (
        <React.Fragment>
            <Nav justify variant="tabs" defaultActiveKey="today" onSelect = { setChoiceResult }>
                <Nav.Item>
                    <Nav.Link eventKey="today" className='navLink'>Now</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2_days" className='navLink'>Two days</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="week" className='navLink'>Week</Nav.Link>
                </Nav.Item>
            </Nav>
            <ResultsByFilter dataResult = { props.currentWeather } resultType = { resultType }/>
        </React.Fragment>
    );
}

export default Result;