import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

import logo from "../assets/image/logo.png";

interface IProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink = ({ children, to, ...props }: IProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          padding: 8,
          textDecoration: match ? "underline" : "none",
          color: match ? "#fff" : "#ccc",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <CustomLink to="/">
            <img
              src={logo}
              width="125px"
              className="d-inline-block align-top"
              alt="gymfull logo"
            />
          </CustomLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/memberRegister/">Novo Cadastro</CustomLink>
            <CustomLink to="/members/">Alunos</CustomLink>
          </Nav>
          <Nav>
            <CustomLink to="/logout">Sair</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
