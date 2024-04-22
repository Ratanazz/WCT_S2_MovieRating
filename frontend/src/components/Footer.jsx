import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <Stack gap={1}>
              <Image src="" alt="Company Logo"  fluid rounded />
              <p>Company Name</p>
             
            </Stack>
          </Col>
          <Col xs={6} md={3}>
            <h4 className="mb-3">Team Member</h4>
            <Nav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/hiring">We're hiring!</NavLink>
            </Nav>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
