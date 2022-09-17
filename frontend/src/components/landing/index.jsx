import React, { useState, useEffect } from "react";
import NavBar from "../navBar";
import axios from "axios";
import {Card, Col, Container} from "react-bootstrap";

function Landing() {

    const [data, setData] = useState({});

    const [sqlData, setSqlData] = useState(null);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4001/events");
            await setSqlData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getData();
    }, []);

    /*TO DO: REMOVE WHEN DONE TESTING WITH THIS.*/
    useEffect(() => {
        console.log(sqlData);
    }, [sqlData]);


    return (
        <>
            <NavBar />

            <Container fluid>
                <h4 className={"text-center mt-2"}>EVENTS LANDING PAGE</h4>
            </Container>

            { sqlData ?
                sqlData.map( (thisEvent, key) => (
                    <Col key={thisEvent.eventID}>
                        <Card className={"w-50 mx-auto my-2"} >
                            <Card.Body>
                                <Card.Title>{thisEvent.eventName}</Card.Title>
                                <hr />
                                <Card.Text className={"text-center"}>Starts: {thisEvent.eventStart}</Card.Text>
                                <Card.Text className={"text-center"}>Ends: {thisEvent.eventEnd}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            : null}

        </>
    );
}

export default Landing;
