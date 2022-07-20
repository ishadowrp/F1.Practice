import React from 'react';
import '../css/MapBlock.css';
import { YMaps, Map } from 'react-yandex-maps';

function MapBlock(props: any) {

    return (
        <YMaps>
            <div className = 'mapBlock' id = 'mapBlock'>
                <Map state={{ center: [props.lati, props.long], zoom: 9 }} width = '500'  options = {{'autoFitToViewport': 'always'}}/>
            </div>
        </YMaps>
    );
}

export default MapBlock;