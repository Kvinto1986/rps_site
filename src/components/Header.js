import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"
import {Link} from "gatsby";

const linksArray = ["#learnMore", "#services", "#partners", "#ourWork",
    "/startups", "/investment", "/blog"]

const NavLinks = () => {
    return (
        linksArray.map((elem, index) => {
            return (<Link key={elem + index} to={elem} style={{textDecoration: "none"}}>
                    <Nav.Link href={elem}>
                        {elem.slice(1).charAt(0).toUpperCase() + elem.slice(2)}
                    </Nav.Link></Link>
            )
        })
    )
}

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3">
            <Navbar.Brand
                className="justify-content-start justify-content-start">
                <Link to="/">
                    <Image src={commonIcons.remedyIcon}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end">
                    <NavLinks/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
