import * as React from "react";
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css";
import InvestmentPageContent from '../components/pagesContent/InvestmentPageContent'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const IndexPage = ({location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <MainPageTemplate>
                <InvestmentPageContent />
            </MainPageTemplate>
            <Footer/>
        </>
    )
}

export default IndexPage
