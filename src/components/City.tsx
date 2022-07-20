import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import axios from 'axios';
import '../css/City.css';
import geoButton from '../img/geolocation-white.svg';

import { Button, InputGroup, FormControl } from 'react-bootstrap';

import Result from './Result';

const APIKEY = '80f19f935fcea673426957db3e900f2b';
const YANDEXAPIKEY = 'ea93e82e-0358-4afe-98e2-e2bfa473d07a';


function City() {

    let [currentCity, setCurrentCityName] = useState<string>('');
    const debouncedValue = useDebounce<string>(currentCity, 500);
    let [currentWeather, setWeather] = useState('');

    const currentLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error);
        async function success(position: any) {
            localStorage.setItem('longitude', String(position.coords.longitude));
            localStorage.setItem('latitude', String(position.coords.latitude));

            let queryString = "https://geocode-maps.yandex.ru/1.x/?apikey="+YANDEXAPIKEY+"&format=json&en_RU&geocode="+ String(position.coords.longitude)+","+ String(position.coords.latitude);
            await axios.get(queryString).then(response => {
               let data = response.data.response.GeoObjectCollection.featureMember[0];
               let city = data.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[3].name;
                setCurrentCityName(city);
                setCurrentWeather();
            });
        }

        function error() {
            console.log('error current position!');
        }
    }

    const getCoordsForCityName = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentCityName(e.target.value);
    }

    useEffect(() => {
        if (debouncedValue) {
            let queryString = "https://geocode-maps.yandex.ru/1.x/?apikey="+YANDEXAPIKEY+"&format=json&en_RU&geocode=" + debouncedValue;
            axios.get(queryString).then(response => {
                let cityCoords = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                const arrayCoords = cityCoords.split(" ");
                localStorage.setItem('longitude', arrayCoords[0]);
                localStorage.setItem('latitude', arrayCoords[1]);
                setCurrentWeather();
            });
        }
    }, [debouncedValue]);


    function setCurrentWeather() {
        let queryString = 'https://api.openweathermap.org/data/2.5/onecall?lat='+localStorage.getItem('latitude')+'&lon='+localStorage.getItem('longitude')+'&units=metric&appid='+APIKEY;
        axios.get(queryString).then(response => {
            setWeather(response.data);
        });
    }

    return (
        <div className='groupCityInput'>
            <InputGroup className="mb-3">
                <FormControl value = {currentCity}
                             onChange = { getCoordsForCityName }
                             placeholder="City"
                             aria-label="City"
                             aria-describedby="City"
                             id = "inputCity"
                />
                <Button variant="outline-secondary" id="button-addon2" onClick = { currentLocation }>
                    <img className='geo-img' src={ geoButton } height = "25px" width = "25px" alt='GeoButton'></img>
                </Button>
            </InputGroup>
            <Result currentCity = {currentCity} currentWeather = {currentWeather}/>
        </div>
    );
}

export default City;