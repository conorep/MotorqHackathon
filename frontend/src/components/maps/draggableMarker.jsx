import React, {useCallback, useMemo, useRef, useState} from "react";

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Marker, Popup} from "react-leaflet";


/*fix the location of icons for marker and its shadow.*/
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function DraggableMarker(props) {


    const [draggable, setDraggable] = useState(true);
    const [positionStart, setPosition] = useState(props.position);
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )

    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={positionStart}
            ref={markerRef} >
            <Popup minWidth={90}>
                Each marker should show the details of one event.
            </Popup>
        </Marker>

    );

}

export default DraggableMarker;
