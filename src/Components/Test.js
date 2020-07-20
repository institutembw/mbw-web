import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  
} from 'reactstrap';

const Test = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
<Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src="./logo.png" style={{height: "30px",
width: "50px"}} ></img></NavbarBrand>
 <NavbarBrand href="/" style={{color:"blue",fontSize: "12px"}}>MBWI Institute</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Teach on MBWI</NavLink>
            </NavItem>
            <NavItem>
            <NavItem>
              <NavLink href="/"><img src="./cart.png" style={{height: "40px",
              width: "40px"}} ></img></NavLink>
            </NavItem>
              <NavLink href="/">Donate</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Sign Up</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
</div>
  );
}

export default Test;