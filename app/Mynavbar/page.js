'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShoppingCart, CircleUserRound } from 'lucide-react';

export default function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Item</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="list">앨범목록</Nav.Link>
                    </Nav>
                    <Nav.Link href="/cart" className='mx-2'><ShoppingCart /></Nav.Link>
                    <Nav.Link href="/cart" className='mx-2'><CircleUserRound /></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}