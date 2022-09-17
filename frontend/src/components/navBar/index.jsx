import React, { createRef, useEffect, useState } from "react";
import {Button, Col, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";


function NavBar() {

    return (
        <>
            <Navbar bg={"dark"} id={"navBarStyles"} className={"justify-content-center"}>
                <Container fluid>
                    <Col>
                        <Navbar.Brand href={"/"} className={"text-info"}>
                            <strong >VIT Riviera</strong>
                        </Navbar.Brand>
                    </Col>

                    <Col>
                        <Nav className={"justify-content-center"}>
                            {/*need to user userId. only usable if logged in*/}
                            <Nav.Link href={"/register"} className={"float-end text-info"}>
                                Log In or Register
                            </Nav.Link>
                        </Nav>
                    </Col>

                    <Col>
                        <Nav className={"justify-content-center"}>
                            {/*need to user userId. only usable if logged in*/}
                            <Nav.Link href={"/map"} className={"float-end text-info"}>
                                Events Map
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className={"justify-content-center"}>
                            {/*need to user userId. only usable if logged in*/}
                            <Nav.Link href={"/events/userId"} className={"float-end text-info"}>
                                User Events
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
