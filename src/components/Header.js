import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"
import {linksArray, singleLinksArray} from "../resources/links"
import {Link} from "gatsby";

const NavLinks = () => {
    const newLinksArray = linksArray.map(elem => {
        if (!singleLinksArray.includes(window.location.pathname) && elem.charAt(0) === "#") {
            return `/${elem}`
        }
        return elem
    })

    return (
        newLinksArray.map((elem, index) => {
            return (
                <Nav.Link key={elem + index} as={Link} to={elem}>
                    {linksArray[index].slice(1).charAt(0).toUpperCase() + linksArray[index].slice(2).replace(/([A-Z])/g, ' $1').trim()}
                </Nav.Link>
            )
        })
    )
}

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3">
            <Navbar.Brand
                className="justify-content-start">
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
