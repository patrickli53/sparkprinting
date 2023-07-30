import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";
import Quote from "../components/Quote";
import CustomerTab from "../components/CustomerTab";
import Swiper from "../components/Swiper";
import './styles.css'
import { Row, Col, Container } from "react-bootstrap";




const Customers = () => {
    return (
        <>
            <NavigationBar />
            
            <CustomerTab />
            <Container className='customCont highlights'>
                <Row>
                    <Col xs='12' sm='6'>
                        <div>
                            <Swiper />
                        </div>
                    </Col>
                    <Col className='highlights-title' xs='12' sm='6'>
                        <div className='customer-title'>
                            Our Highlights
                        </div>
                    </Col>
                </Row>
            </Container>
            <Quote />
            <Footer />





        </>
    )
}

export default Customers;