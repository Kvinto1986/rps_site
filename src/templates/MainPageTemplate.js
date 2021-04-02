import * as React from "react"
import CompanyInfoMainPageContent from "../components/pagesContent/CompanyInfoMainPageContent"

const MainPageTemplate = ({children}) => {
    return (
        <>
            {children}
            <CompanyInfoMainPageContent/>
        </>
    )
}

export default MainPageTemplate
