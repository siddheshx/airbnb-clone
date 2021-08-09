import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({serachResults}) {

    const coordinates = serachResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const [selectedLocation, setSelectedLocation] = useState({});

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return <ReactMapGL
        mapStyle='mapbox://styles/sagecrow/cks4c7wes070417p55ksj1bwv'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {serachResults.map((result) => (
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p
                        role="img"
                        onClick={() => setSelectedLocation(result)}
                        className="text-2xl cursor-pointer animate-bounce"
                        aria-aria-label="push-pin"
                    >📌</p>
                </Marker>
                {selectedLocation.long === result.long ? (
                    <Popup
                        closeOnClick={true}
                        onClose={() => setSelectedLocation({})}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                ): (
                    false
                )}
            </div>
        ))}
    </ReactMapGL>
}

export default Map
