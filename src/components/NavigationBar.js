import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import ATS from '../assets/ATS_LOGO.png';

const Styles = styled.div`
  .navbar {
    background-color: #111;
  }
  .navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
      color: #c50638;
    }
  }

  .navbar-light .navbar-toggler {
    background-color: #c50638;
  }

  img {
    max-width: 50px;
  }
`;

export const Navigationbar = () => (
  <Styles>
    <Navbar className="fixed-top" expand="lg">
      <Navbar.Brand href="/"><img src={ATS} />ATS Inc.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/survey">Survey</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/engineering">Engineering</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/planning">Planning</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)