import * as React from "react"
import ProjectPageTemplate from "../templates/ProjectPageTemplate"
import {walkliData} from "../resources/texts"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const WalkliPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <ProjectPageTemplate
                data={walkliData}
            />
            <Footer/>
        </>
    )
}

export default WalkliPage
