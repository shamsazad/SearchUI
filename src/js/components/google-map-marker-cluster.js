import React from "react";
import { compose, withProps, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeBounds } from '../actions/index';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";


import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeBounds }, dispatch);
}
const MapWithAMarkerClusterer = compose(
    withProps({
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    connect(null, mapDispatchToProps),
    withState('onBoundsChanged'),
    withHandlers((props) => {
        const refs = {
            map: undefined,
        };
        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onBoundsChanged: ({ onBoundsChanged }) => () => {
                const bounds = refs.map.getBounds();
                const ne = bounds.getNorthEast();
                const sw = bounds.getSouthWest();
                const boundsObject = {
                    "northeast": {
                        "lat": ne.lat(),
                        "lng": ne.lng()
                    },
                    "southwest": {
                        "lat": sw.lat(),
                        "lng": sw.lng()
                    }
                };
                console.log(boundsObject);
                props.changeBounds(boundsObject);
            }
        }
    }),
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: props.markers.location.lat, lng: props.markers.location.lng }}
        ref={props.onMapMounted}
        onBoundsChanged={props.onBoundsChanged}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.locationList.map(marker => (
                <Marker
                    key={marker.place_id}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

export default MapWithAMarkerClusterer;