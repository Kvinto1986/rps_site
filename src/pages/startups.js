import * as React from "react";
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css";
import StartupsPageContent from '../components/pagesContent/StartupsPageContent'

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <StartupsPageContent />
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
