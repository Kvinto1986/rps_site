import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../styles/startups.css';
import {startupsIcons} from "../../resources/images.js";

const data = [
    {
        id: 1,
        title: 'What should we build',
        name: 'strategy',
        image: startupsIcons.oneIcon,
        body: 'We will sit down with you to understand your long term goals, business objectives, KPI’s, and budget to create an effective strategy to take your product to market. Our extensive network allows us to make strategic introductions for our partners to VCs, potential clients, and other resources to accelerate growth.'
    },
    {
        id: 2,
        title: 'How should you build it?',
        name: 'execution',
        image: startupsIcons.twoIcon,
        body: 'We will work with you to execute your product in the most efficient way possible. We use lean development practices and believe in releasing early and iterating often. We will consider using off the shelf tools, APIs, and custom code to see what best fits your company’s needs. Our MVPs are built in around 8 weeks and we institute analytics, reporting, and user interviews to iterate based on user feedback.'
    },
    {
        id: 3,
        title: 'When and how should you deploy?',
        name: 'launch',
        image: startupsIcons.threeIcon,
        body: 'The RPS team will create a deployment strategy for when your product is ready to hit the market. We work closely with your team and make sure we have an understanding of your stakeholders expectations as we plan the launch. Once released, RPS implements reporting & analytics tools to gather qualitative and quantitative feedback.'
    },
    {
        id: 4,
        title: 'How will you grow it',
        name: 'investment',
        image: startupsIcons.fourIcon,
        body: 'RPS invests in select companies across industries. You can find requirements for investment here. In addition to our own investment, we work with a network of angels and venture capitalists to match startups to the best investor fits. We help startups prepare for fundraising by crafting the narrative, preparing the pitch, and ensuring you are hitting key metrics to demonstrate product-market fit.'
    },

]

const StartupItem = () => {
    return (
        data.map((item, index, i) => (
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
