import React from "react";
import { Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");

  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  return (
    <Navbar expand="lg" color={'primary'} light>
      <Container>
          <div className="navbar-wrapper">
          <NavbarBrand href="/">Storak Digital</NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;