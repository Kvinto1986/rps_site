import * as React from "react"
import ProjectPageTemplate from "../templates/ProjectPageTemplate"
import {classpassPageData} from "../resources/texts"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ClasspassPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <ProjectPageTemplate
                data={classpassPageData}
            />
            <Footer/>
        </>
    )
}

export default ClasspassPage
