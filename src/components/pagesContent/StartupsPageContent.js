import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {startupsTexts} from "../../resources/texts";
import {startupsIcons} from "../../resources/images";
import '../../styles/startups.css';

const StartupItem = () => {
    return (
        startupsTexts.map((item, index, i) => (
            <Col md={12} lg={6} className="pb-4" key={item.name + index}>
                <Row className="mb-4">
                    <Col className="col-2 col d-flex justify-content-center">
                        <Image src={item.image} fluid/>
                    </Col>
                    <Col className="goalHeading d-flex align-items-center col-7">
                        {item.title.toUpperCase()}
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col className="goalName col-3">
                        {item.name.toUpperCase()}
                    </Col>
                    <Col className="lineBlue col-8"/>
                </Row>
                <Row>
                    <Col className="pt-3">
                        {item.body}
                    </Col>
                </Row>
            </Col>
        ))
    )
}

const StartupsPageContent = () => {

    return (
        <>
            <div className="mainBgStartups">
                <Container id="learnMore">
                    <Row className="container-fluid d-flex flex-wrap justify-content-center">
                        <Col className="titleText pt-5 pb-5">
                            Remedy Product Studio is a product partner, a technical cofounder, a development solution,
                            and a strategic investor
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="pt-5 d-flex align-items-center">
                    <Col md={6}>
                        <Image src={startupsIcons.startupsPictureOne} fluid/>
                    </Col>
                    <Col xs={12} md={5} className="introText display-2">
                        We partner with startups to strategize, execute, launch, and invest in digital products,
                        including web apps, mobile apps, data science tools, and firmware for connected devices.
                    </Col>
                </Row>
                <Row className="d-flex align-items-center pb-5">
                    <Col lg={{order: 'first'}} xs={{span: 12, order: 'second'}} md={{span: 5, order: 'first'}}
                         className="introText display-2">
                        RPS is structured to be a long term extension of your internal team, working with startups for
                        an average 3+ years and taking them through 2 fundraising cycles. We integrate fully into agile
                        development and communication processes to work closely with product teams as they grow.
                    </Col>
                    <Col lg={{order: 'second'}} xs={{order: 'first'}} md={6}>
                        <Image src={startupsIcons.startupsPictureTwo} fluid/>
                    </Col>
                </Row>
            </Container>
            <div className="goalsBg">
                <Container>
                    <Row className="goals pt-5 pb-3">
                        <StartupItem/>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StartupsPageContent;
