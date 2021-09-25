import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const Header = () => {
  return (
    <Navbar expand="lg" color="primary" light>
      <Container>
        <div className="navbar-wrapper">
          <NavbarBrand href="/">Storak Digital</NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
