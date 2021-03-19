import * as React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import "../styles/projectPage.css"
import {Link45deg} from "react-bootstrap-icons";
import {featuresList} from "../components/pagesContent/CompanyInfoMainPageContent";

function simpleList(textArray) {
    return <ul className="list-group" style={{listStyleType: "none"}}>
        {textArray.map((elem, index) => {
            return <li key={elem + index} style={{fontSize: 14}}>{elem}</li>
        })}
    </ul>
}

const ProjectPageTemplate = ({data}) => {
    return (
        <>
            <div
                className="introPictureContainer container-fluid d-flex flex-wrap justify-content-start align-content-end"
                style={{backgroundImage: `url(${data.introImage})`}}>
            <span className="ml-5 mb-4 bg-light p-2 rounded-pill">
                <Link45deg
                    size={30}
                />
                <a className="ml-2 mr-2" href={data.siteLink} rel="noreferrer" target="_blank">{data.site}</a>
            </span>
            </div>
            <Container className="mt-5">
                <Row lg={10} className="d-flex flex-wrap justify-content-lg-between justify-content-center">
                    <Col lg={3} md={12} className="mt-3">
                        <div><Image src={data.logo} width={150}/></div>
                        <div className="d-flex flex-wrap mt-3">{featuresList(data.features)}</div>
                        <p className="introProductText mt-4">{data.introText}</p>
                        {data.testimonials &&
                        <>
                            <h6 className="mt-4 mb-3">Testimonials</h6>
                            <Row
                                className="mb-3 container d-flex flex-nowrap justify-content-start align-content-center">
                                <div><Image src={data.testimonials.avatar} width={50}/></div>
                                <div className="d-flex flex-wrap justify-content-start mt-2 ml-3">
                                    <span className="ceoName">{data.testimonials.name}</span>
                                    <span className="ceoPosition">{data.testimonials.position}</span>
                                </div>
                            </Row>
                            <p className="introProductText mt-1">{data.testimonials.comment}</p>
                        </>
                        }
                    </Col>
                    <Col lg={6} md={12} className="">
                        <h4 className="mt-4 mb-3">Challenge</h4>
                        <p className="infoText">{data.challengeText}</p>
                        <h4 className="mt-4 mb-3">Solutions</h4>
                        <p className="infoText">{data.solutionsTexst}</p>
                        <h4 className="mt-4 mb-3">Results</h4>
                        <ul className="list-group" style={{listStyleType: "none"}}>
                            {data.results.map((elem, index) => {
                                return <li key={elem.charAt(8) + index}>{elem}</li>
                            })}
                        </ul>
                        <h4 className="mt-3">Business Impact</h4>
                        <p className="infoText mt-4">{data.businessImpactText}</p>
                    </Col>
                    <Col lg={3} md={12} className="">
                        <h5 className="mt-4 mb-3">Product Team</h5>
                        {simpleList(data.productTeam)}
                        <h5 className="mb-3 mt-5">Funding Stage</h5>
                        {simpleList(data.fundingStage)}
                        <h5 className="mb-3 mt-5">Services</h5>
                        {simpleList(data.services)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProjectPageTemplate
