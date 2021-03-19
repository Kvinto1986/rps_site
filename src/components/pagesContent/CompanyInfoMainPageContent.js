import * as React from "react"
import {Card, Col, Container, Image, Row} from "react-bootstrap"
import {serviceIcons, productsLogo, productsPictures} from "../../resources/images"
import Link from "gatsby-link";
import "../../styles/companyInfo.css"

function ServiceColumn({iconsArray, textsArray}) {
    return (
        iconsArray.map((elem, index) => {
            return (
                <Col key={textsArray[index] + index} className="mb-3" xl={4} md={12}>
                    <span>
                        <Image className="mr-3" src={iconsArray[index]} width={27}/>
                        {textsArray[index]}
                    </span>
                </Col>
            )
        })
    )
}

const ProductsLogo = () => {
    return (
        Object.values(productsLogo).map((elem, index) => {
                return (
                    <Image
                        key={index + Object.keys(productsLogo)[index]}
                        className={`mr-4 ml-4 ${index < 3 && "mb-lg-5"} mb-3 mt-3`}
                        src={elem}
                    />
                )
            }
        )
    )
}

export function featuresList(featuresArray) {
    return featuresArray.map((elem, index) => {
        return (
            <span
                key={elem + index}
                className="projectFeaturesItem mr-2 mt-1">
                {elem}
            </span>
        )
    })
}

function ProductPictureBlock({productName, picture, featuresArray}) {
    return (
        <Card style={{width: '22rem'}} className="ml-3 mr-3 mt-4">
            <Link to={`/${productName.toLowerCase().replace(/ /g, "")}`}>
                <Card.Img variant="top" src={picture}/>
            </Link>
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text className="d-flex flex-wrap">
                    {featuresList(featuresArray)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const CompanyInfoMainPageContent = () => {
    return (
        <Container fluid>
            <Container id="services" className="servicesContainer">
                <Container className="mb-5 mt-4 d-flex justify-content-center">
                    <h2>SERVICES</h2>
                </Container>
                <Row className="d-flex justify-content-between mt-4">
                    <ServiceColumn
                        iconsArray={[serviceIcons.developerIcon, serviceIcons.dataScienceIcon, serviceIcons.apiIcon]}
                        textsArray={["Custom Software Development", "Data Science", "API Development & Integrations"]}/>
                </Row>
                <Row className="d-flex justify-content-between">
                    <ServiceColumn
                        iconsArray={[serviceIcons.ctoIcon, serviceIcons.diligenceIcon, serviceIcons.dataToolsIcon]}
                        textsArray={["CTO as a service", "Technical Due Diligence", "Data Tools"]}/>
                </Row>
                <Row id="partners" className="d-flex justify-content-between mb-5">
                    <ServiceColumn
                        iconsArray={[serviceIcons.leaderIcon, serviceIcons.performanceIcon, serviceIcons.ventureIcon]}
                        textsArray={["Product Leadership", "Performance Optimization", "Venture Strategy"]}/>
                </Row>
            </Container>
            <Container className="mt-5 mb-5 d-flex flex-wrap justify-content-lg-between justify-content-center">
                <ProductsLogo/>
            </Container>
            <Container fluid id="ourWork" className="ourWorkContainer">
                <Container className="d-flex justify-content-center">
                    <h2>OUR WORK</h2>
                </Container>
                <Container fluid className="d-flex flex-wrap justify-content-center">
                    <ProductPictureBlock
                        picture={productsPictures.classpassPicture}
                        productName="Classpass"
                        featuresArray={["Fitness", "Wellness", "Sports"]}
                    />
                    <ProductPictureBlock
                        picture={productsPictures.analyticsPicture}
                        productName="Block Six Analytics"
                        featuresArray={["Sports", "Analytics", "Machine Learning"]}
                    />
                    <ProductPictureBlock
                        picture={productsPictures.walkliPicture}
                        productName="Walkli"
                        featuresArray={["Fitness", "Wellness", "Sports"]}
                    />
                </Container>
            </Container>
        </Container>
    )
}

export default CompanyInfoMainPageContent
