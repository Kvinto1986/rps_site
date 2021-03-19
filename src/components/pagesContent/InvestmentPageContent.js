import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../styles/investment.css';
import {investmentIcon} from "../../resources/images.js";
import {invesmentTexts} from "../../resources/texts";

const InvestmentItem = () => {
    return (
        invesmentTexts.map((item, index, i) => (
            <Col md={12} lg={6} className="pb-4" key={item.title + index}>
                <Row className="mb-4">
                    <Col className="investHeading d-flex align-items-center col-8">
                        {item.title.toUpperCase()}
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col className="lineBlueInvest col-11 ml-3"/>
                </Row>
                <Row>
                    <Col className="pt-3 mb-5">
                        {item.body}
                    </Col>
                </Row>
            </Col>
        ))
    )
}

const InvestmentPageContent = () => {
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
                <Row className="pt-5 mb-5 d-flex align-items-center">
                    <Col md={6}>
                        <Image src={investmentIcon.investmentPicture} fluid/>
                    </Col>
                    <Col xs={12} md={5} className="introTextInvest display-2">
                        Remedy invests in pre-seed and seed rounds in the form of sweat equity. We primarily invest in
                        companies after working together for several months - this is part of our due diligence. We need
                        to know our founders and make sure their work style is a good fit before making an investment
                        decision.
                    </Col>
                </Row>

            </Container>
            <div className="goalsBg">
                <Container>
                    <Row className="goals pt-5 pb-3">
                        <InvestmentItem/>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default InvestmentPageContent;
