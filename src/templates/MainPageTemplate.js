import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CompanyInfoMainPageContent from "../components/pagesContent/CompanyInfoMainPageContent"

const MainPageTemplate = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <CompanyInfoMainPageContent/>
            <Footer/>
        </>
    )
}

export default MainPageTemplate
