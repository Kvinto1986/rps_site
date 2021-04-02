import * as React from "react";
import MainContent from '../components/pagesContent/MainPageContent'
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css"
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const IndexPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <MainPageTemplate>
                <MainContent/>
            </MainPageTemplate>
            <Footer/>
        </>
    )
}

export default IndexPage
