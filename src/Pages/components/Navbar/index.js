import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './styles.css'

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="navbg">
            <Container className='navContainer'>
                <div className='nav-flex'>
                    <Navbar.Brand as={Link} to="/">
                        <h3 class="heading">Spark Printing</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='collapse' id="basic-navbar-nav">
                        <Nav className="ml-auto navItems">
                            <Nav.Link as={Link} to="/" className='navItem'>Home</Nav.Link>
                            <NavDropdown title={
                                <span className="navItem">Collection</span>
                            } className='dropdownLink' id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/tshirts">
                                    T-shirts
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/crewnecks">
                                    Crewnecks
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/hoodies">
                                    Hoodies
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navItem' as={Link} to="/pricing">Pricing</Nav.Link>
                            <Nav.Link className='navItem' as={Link} to="/customers">Customer</Nav.Link>
                            <Nav.Link className='navItem' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='navItem' as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

        //     {/* <Navbar className='navbarBg' variant="dark">
        //             <Link to="/"> 
        //                 <Navbar.Brand>
        //                     <h3 class="heading">Spark Printing</h3>
        //                 </Navbar.Brand>
        //             </Link> */}
        // {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="ml-auto">

        //                     <Link className='navlink' to="/addcoin">
        //                         <Button className="mr-4 navbutton">
        //                             Add Coin
        //                         </Button>
        //                     </Link>
        //                     <Link  className='navlink' to="/promote">
        //                         <Button  className="mr-4 navbutton">
        //                             Promote
        //                         </Button>
        //                     </Link>
        //                     {logInButton()}
        //                 </Nav>
        //             </Navbar.Collapse> */}
        // {/* </Navbar> */ }
    )
}

export default NavigationBar
