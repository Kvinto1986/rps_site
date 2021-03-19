import * as React from "react";
import MainPageTemplate from "../templates/MainPageTemplate"
import "../styles/index.css";
import InvestmentPageContent from '../components/pagesContent/InvestmentPageContent'

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <InvestmentPageContent />
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
