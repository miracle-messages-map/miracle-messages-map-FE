import React, { useState, useEffect } from "react"
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"
import uuid from "uuid/v4"

import mapStyles from "./mapStyles"

import { getCoordinates, getVolunteers } from "../api"

const coordinates = getCoordinates()
let volunteers = []

getVolunteers(1)
    .then(v => {
        volunteers = v
        console.log(volunteers)
    })
    .catch(err => alert(err))

const MapInner = () => {
    const [selectedVolunteer, setSelectedVolunteer] = useState(null)

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedVolunteer(null)
            }
        }
        window.addEventListener("keydown", listener)

        return () => {
            window.removeEventListener("keydown", listener)
        }
    }, [])

    return (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={coordinates[0]}
            defaultOptions={{ styles: mapStyles }}
        >
            {coordinates.map((c, i) => (
                <Marker
                    key={uuid()}
                    position={c}
                    onClick={() => {
                        setSelectedVolunteer(i)
                    }}
                />
            ))}

            {selectedVolunteer && volunteers.length > 0 && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedVolunteer(null)
                    }}
                    position={coordinates[selectedVolunteer]}
                >
                    <>
                        <h3>{volunteers[selectedVolunteer].firstName}</h3>
                        <h4>{volunteers[selectedVolunteer].lastName}</h4>
                    </>
                </InfoWindow>
            )}
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
