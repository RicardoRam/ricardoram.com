import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Banner.css';
import Avatar from './Avatar';


export default (props) => {
    return (
        <>
        <Navbar bg="light" variant="light" fixed="top" expand="md" className="min-height">
            <Navbar.Brand href="contact">
            <Avatar inline src="assets/ricardo.jpeg" name="Ricardo Ramnarine" id="responsive-navbar-nav" state="avatar my-div"></Avatar>
                <span class="my-div">Ricardo Ramnarine</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link></Nav.Link>
                    <Nav.Link></Nav.Link>
                    <Nav.Link></Nav.Link>
                    <Nav.Link href="contact" className={props.active === "contact" ? "active" : ""}>Contact</Nav.Link>
                    <Nav.Link href="experience" className={props.active === "experience" ? "active" : ""}>Experience</Nav.Link>
                    <Nav.Link href="portfolio" className={props.active === "portfolio" ? "active" : ""}>Portfolio</Nav.Link>
                    <Nav.Link href="resume" className={props.active === "resume" ? "active" : ""}>Resume</Nav.Link>
                    <Nav.Link href="blog" className={props.active === "blog" ? "active" : ""}>Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        </>
    )
}