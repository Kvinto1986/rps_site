import React from 'react'
import {Button, Container} from "react-bootstrap";
import "../styles/404.css"
import {Link} from "gatsby";

const Page404 = () => (
    <Container className="d-flex flex-wrap justify-content-center mt-5">
            <h1>404</h1>
            <h3>The page you are looking for was not found</h3>
      <p>
        <Link to="/">
            <Button variant="outline-dark mt-5">Return to homepage</Button>
        </Link>
      </p>
    </Container>
)

export default Page404
