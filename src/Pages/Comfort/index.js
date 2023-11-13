import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col, Accordion } from "react-bootstrap"
import tshirtClassic from '../../assets/tshirt-classic.webp'
import tshirtClassicMeasure from '../../assets/tshirt-classic-measurements.webp'

const Athletic = () => {
    return(
        <>
            <NavigationBar/>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <Row>
                            <Col xs={6}>
                                <img className='prod-img' src={tshirtClassic}/>
                            </Col>
                            <Col xs={6} className='prod-descbox'>
                                <h1 className="prod-title"> Comfort Cloud</h1>
                                <h3 className="prod-subtitle"> $8 <span className='small-p'>/ Unit (Customization Included)</span></h3>
                                <p>Introducing our Comfort Bliss Tee – a sensory delight designed to redefine your expectations of softness and comfort. Crafted from the finest blend of breathable fabrics, this shirt is a touch of luxury against your skin. </p>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='prod-p'>Product Descriptions</Accordion.Header>
                                        <Accordion.Body>
                                        <p>• Weight: 120g/piece<br/>• 100%&nbsp;Polyester<br/>• 16 Color Options</p>
                                        <h6>Feather-Like Softness:</h6>
                                        <p>Experience a level of softness that feels like a gentle caress. The Comfort Cloud Tee is carefully woven to create a feather-light texture, ensuring an unparalleled comfort that lasts all day.</p>
                                        <h6>Breathable Elegance:</h6>
                                        <p>Stay cool and collected with our breathable fabric that effortlessly adapts to your body's natural movements. Whether you're navigating a busy day or enjoying a leisurely afternoon, the Comfort Bliss Tee provides an airy embrace that feels as good as it looks.</p>
                                        <h6>Endless Customization Options:</h6>
                                        <p>But the innovation doesn't stop at fit and functionality – we're proud to present a world of endless customization possibilities. Express your unique style by choosing from a spectrum of colors, patterns, and graphic designs. Whether you're looking to showcase team spirit, make a bold fashion statement, or represent your personal brand, our customization options empower you to create a one-of-a-kind masterpiece that's as unique as you are.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='prod-p'>Size Chart</Accordion.Header>
                                        <Accordion.Body>
                                        <img className='prod-measure' src={tshirtClassicMeasure}/>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className='prod-p'>Delivery Options</Accordion.Header>
                                        <Accordion.Body>
                                        <p>• Standard Shipping (7 Weeks) - $100 <br/>• Express Shipping (5 Weeks) - $500<br/>Shipping Times and Prices apply for all order sizes.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Quote/>
            <Footer/>
        </>
    )
}

export default Athletic;