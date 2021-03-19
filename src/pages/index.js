import * as React from "react";
import MainContent from '../components/pagesContent/MainPageContent'
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css"

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <MainContent/>
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
