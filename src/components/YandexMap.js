import {useRef} from "react";
import { SearchControl, YMaps, Map } from "@pbe/react-yandex-maps";

import "../styles/YandexMap.css"

function YaMap(props) {
    let coords = [];
    const searchControlRef = useRef(null);
    const onResultShow = async () => {
        if (searchControlRef.current) {
           coords = await (searchControlRef.current.getResultsArray()[1].geometry["_coordinates"]);
           props.updateDate(coords);
           }
        }
          return (
            <div className="div-for-map" id="divMap" >
                <YMaps query={{ apikey: '4546bd21-bd2a-4f11-b3ff-eb2d744c77e0'}}>
                    <Map defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                        controls: []
                    }} width='60vw' height='400px'>
                        <SearchControl
                            instanceRef={searchControlRef}
                            options={{ float: "left" }}
                            onResultShow={onResultShow}/>
                    </Map>
                </YMaps>
            </div>
    );
}



export default YaMap