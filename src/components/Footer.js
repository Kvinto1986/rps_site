import React from "react";
import {Col, Container, Row} from "react-bootstrap"
import {Envelope, Instagram, Linkedin, Twitter} from "react-bootstrap-icons";
import "../styles/footer.css"

const Footer = () => {
    return (
        <Container fluid className="footerContainer">
            <Row className="footerRow container-fluid d-flex flex-wrap justify-content-center">
                <Col lg={7} md={12} className="mb-4 d-flex flex-wrap justify-content-center">
                    <span style={{textAlign: "center"}}>© 2020 Remedy Point Solutions, Inc. All rights reserved</span>
                </Col>
                <Col lg={5} md={12} className="mb-4 d-flex flex-wrap justify-content-center">
                    <a href="https://www.instagram.com/remedyproduct" rel="noreferrer" target="_blank">
                        <Instagram
                            className="icon"
                            size={27}
                        />
                    </a>
                    <a href="https://twitter.com/RemedyProduct" rel="noreferrer" target="_blank">
                        <Twitter
                            className="icon mr-4 ml-4"
                            size={27}
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/remedyproduct" rel="noreferrer" target="_blank">
                        <Linkedin
                            className="icon mr-4"
                            size={27}
                        />
                    </a>
                    <a href="mailto:Hello@remedyproduct.com" rel="noreferrer" target="_blank">
                        <Envelope
                            className="icon"
                            size={27}
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer
