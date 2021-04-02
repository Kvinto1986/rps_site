import React, {useEffect, useRef, useState} from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../../resources/images"
import {linksArray, singleLinksArray} from "../../resources/links"
import {Link} from "gatsby";

const NavLinks = ({ path }) => {
    const newLinksArray = linksArray.map(elem => {
        if (!singleLinksArray.includes(path) && elem.charAt(0) === "#") {
            return `/${elem}`
        }
        return elem
    })

    return (
        newLinksArray.map((elem, index) => {
            return (
                <Nav.Link eventKey={index} key={elem + index} as={Link} to={elem}>
                    {linksArray[index].slice(1).charAt(0).toUpperCase() + linksArray[index].slice(2).replace(/([A-Z])/g, ' $1').trim()}
                </Nav.Link>
            )
        })
    )
}

const Header = ({path}) => {
    const nav = useRef(null)
    const collapse = useRef(null)
    const [navExpanded, setNavExpanded] = useState(false)

    const handleDocumentClick = (e) => {
        if (e.target !== nav.current && !nav.current.contains(e.target)) {
            setNavExpanded(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleDocumentClick, true)
        return () => window.removeEventListener('click', handleDocumentClick, true)
    }, [])

    return (
        <Navbar
            onToggle={setNavExpanded}
            expanded={navExpanded}
            ref={nav}
            collapseOnSelect
            expand="lg"
            className="container mt-3 mb-3">
            <Navbar.Brand
                className="justify-content-start">
                <Link to="/">
                    <Image src={commonIcons.remedyIcon}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse ref={collapse}>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end">
                    <NavLinks
                        path={path}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
