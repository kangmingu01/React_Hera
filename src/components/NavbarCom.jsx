import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Icon from "../imgs/HERA.svg";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const NavbarCom = () => {
  return (
    <>
      <Navbar
        className="fixed-top"
        expand="lg"
        style={{
          height: "65px",
          background: "linear-gradient(to bottom, rgb(56 56 56), transparent)",
        }}
        className="fixed-top bg-opacity-10"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Icon}
              height="18"
              className="d-inline-block align-center text-white"
              alt="HERA logo"
            />
          </Navbar.Brand>

          {/* 햄버거 */}
          <Navbar.Toggle
            className="text-white text-bg-dark"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4 pt-2 ">
              <Nav.Link href="#home" className="text-white">
                헤라스토리
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                메이크업
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                스킨케어
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                프래그런스
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                #HERA
              </Nav.Link>
            </Nav>
            <Nav style={{ width: 80 }}>
              <Nav.Link>
                <GrLocation
                  style={{ width: 18, height: 18 }}
                  className="text-white"
                />
              </Nav.Link>
              <Nav.Link>
                <AiOutlineSearch
                  style={{ width: 20, height: 20 }}
                  className="text-white"
                />
              </Nav.Link>
              <Nav.Link>
                <AiOutlineUser
                  style={{ width: 18, height: 18 }}
                  className="text-white"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCom;
