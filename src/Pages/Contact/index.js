import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";
import { Container, Button, Row, Col } from "react-bootstrap";
import FAQ from "../components/FAQ";
import './styles.css'
const Contact = () => {
    return (
        <div>
            <NavigationBar />
            <div className="collection-body">
                <div className='collection-hero'>
                    <Container className='customCont'>
                        <div className='collection-title-block'>
                            <h1 className="collection-title">Contact Us</h1>
                        </div>
                    </Container>

                </div>
            </div>
            <Container className='customCont'>
                <FAQ />
            </Container>
            <div className='greyBlock'>
            <Container className='customCont'>

                <h3 className='quote-title meetTitle'>Book a Meeting</h3>
                <p className='quote-p'> Easiest way to reach us is to schedule a meeting! We would love to meet you and help :)</p>
                <div className='topPadding'>
                    <Button href="https://meetings.hubspot.com/pengfei-fu" id='quote-button'>Let's Meet!</Button>
                </div>
                </Container>
            </div>
            
            <Footer />





        </div>
    )
}

export default Contact;