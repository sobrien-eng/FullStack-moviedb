import '../styles/global.css'
import Head from 'next/head'
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App({ Component, pageProps }) {
  return(
    <><Head>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/movies/first-movie">first movie</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/admindash">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Head>
    
    <Component {...pageProps} /></>
    )
}
