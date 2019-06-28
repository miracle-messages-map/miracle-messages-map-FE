import React from "react"
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps"
import uuid from "uuid/v4"

import { getCoordinates } from "../api"

const coordinates = getCoordinates()

const MapInner = () => {
    return (
        <GoogleMap defaultZoom={11} defaultCenter={coordinates[0]}>
            {coordinates.map(c => (
                <Marker key={uuid()} position={c} />
            ))}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapInner))

const Map = () => {
    return (
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                process.env.REACT_APP_GOOGLE_API_KEY
            }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Map
