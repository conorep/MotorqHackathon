import React from "react";
import DraggableMarker from "./draggableMarker";
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function MapComponent() {
    const position = [47.608, -122.335];
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <div>
                    <DraggableMarker position={position} />
                </div>

            </MapContainer>
        </>
    );
}

export default MapComponent;
