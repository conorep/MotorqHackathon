import React from "react";
import NavBar from "../navBar";
import MapComponent from "./map";
import 'leaflet/dist/leaflet.css';
import {Col, Container, Row} from "react-bootstrap";

function EventsMap() {
    return (
        <>
            <NavBar />
            <p>Events map page.</p>

            <Row>
                <Col id={"map-container"}>
                    <MapComponent />
                </Col>

            </Row>


        </>
    );
}

export default EventsMap;
