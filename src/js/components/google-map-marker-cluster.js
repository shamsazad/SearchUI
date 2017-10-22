import React from "react";
import { compose, withProps, withState, withHandlers } from "recompose";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";


import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const MapWithAMarkerClusterer = compose(
    withProps({
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('bounds', 'onBoundsChanged'),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }
        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onBoundsChanged: ({ onBoundsChanged }) => () => {
                console.log(refs.map.getBounds());
                onBoundsChanged(refs.map.getBounds())
            }
        }
    }),
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: props.markers.lat, lng: props.markers.lng }}
        ref={props.onMapMounted}
        onBoundsChanged={props.onBoundsChanged}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.photos.map(marker => (
                <Marker
                    key={marker.photo_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

export default MapWithAMarkerClusterer;