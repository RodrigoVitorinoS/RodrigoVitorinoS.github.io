import MenuLink from '../MenuLink';
import styles from './Menu.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Menu() {
  return (
    <Navbar expand="lg" variant="dark" className={styles.minhaNavbar}>
      <Container>
   
        <Navbar.Brand as={Link} to='/' className={styles.logo}>
          Rodrigo Vitorino
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <MenuLink to="#resumo"   aba="Resumo"/>
            <MenuLink to="#habilidades" aba="Habilidades"/> 
            <MenuLink to="#projetos" aba="Projetos"/>
            <MenuLink to="#contato"  aba="Contato"/>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;