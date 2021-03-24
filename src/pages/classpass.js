import * as React from "react"
import ProjectPageTemplate from "../templates/ProjectPageTemplate"
import {classpassPageData} from "../resources/texts"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ClasspassPage = () => {
    return (
        <>
            <Header/>
            <ProjectPageTemplate
                data={classpassPageData}
            />
            <Footer/>
        </>
    )
}

export default ClasspassPage
