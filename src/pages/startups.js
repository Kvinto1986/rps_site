import * as React from "react";
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css";
import StartupsPageContent from '../components/pagesContent/StartupsPageContent'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const IndexPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <MainPageTemplate>
                <StartupsPageContent/>
            </MainPageTemplate>
            <Footer/>
        </>
    )
}

export default IndexPage
