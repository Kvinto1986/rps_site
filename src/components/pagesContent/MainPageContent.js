import React from 'react';
import {Container, Row, Col, Nav, Image, Card} from 'react-bootstrap';
import '../../styles/mainPageContent.css';
import {learnMoreIcons} from "../../resources/images.js";
import {cardsItems} from "../../resources/texts";

const CardItem = ({title, text, image}) => {
    return (
        <Col lg={4} md={12}>
            <Card className="cardContainer pt-4 pb-4 mb-5">
                <Nav.Link href="/">
                    <Card.Img variant="top" src={image} className="cardImage"/>
                    <Card.Body className="p-2">
                        <Card.Title className="textTitle">{title.toUpperCase()}</Card.Title>
                        <div className="horizontalLine"/>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Nav.Link>
            </Card>
        </Col>
    )
}

const MainContent = () => {
    return (
        <div>
            <Container className="mainTextContainer">
                <Row className="mt-5">
                    <Col className="mt-5">
                        <span className="mainText">Remedy product studio is a product partner</span>
                    </Col>
                </Row>
                <Row className="linksWork">
                    <Col>
                        <Nav.Link href="mailto:Hello@remedyproduct.com" className="linkText mt-5">Work with
                            us</Nav.Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav.Link href="#learnMore" className="arrowLink">
                            <Image src={learnMoreIcons.arrow} alt="arrow"/>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
            <div className="mainContent">
                <Container id="learnMore">
                    <Row>
                        <Col className="blueBackText">
                            Supporting founders and established companies in creating the next generation of great
                            digital products
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="cardBlock position-relative">
                <Container>
                    <Row>
                        {cardsItems.map((item, index) => (
                            <CardItem title={item.title} text={item.text} image={item.image} key={item.title + index}/>
                        ))}
                    </Row>
                </Container>
                <div className="backgroundTop"/>
                <div className="backgroundBottom position-absolute left-0 "/>
            </div>
        </div>
    )
}

export default MainContent;
