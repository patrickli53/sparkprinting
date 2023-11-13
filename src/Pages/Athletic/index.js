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
                                <h1 className="prod-title"> Athletic Fit</h1>
                                <h3 className="prod-subtitle"> $8 <span className='small-p'>/ Unit (Customization Included)</span></h3>
                                <p>Introducing our Athletic Fit Performance Tee – where precision meets personalization for the modern athlete. Engineered for peak performance, this tee offers a tailored silhouette in a premium moisture-wicking blend, ensuring comfort during intense workouts. </p>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='prod-p'>Product Descriptions</Accordion.Header>
                                        <Accordion.Body>
                                        <p>• Weight: 120g/piece<br/>• 100%&nbsp;Polyester<br/>• 16 Color Options</p>
                                        <h6>Athletic Fit Precision:</h6>
                                        <p>Designed with the modern athlete in mind, our Athletic Fit Performance Tee offers a tailored silhouette that accentuates your physique without compromising on comfort. Crafted from a premium blend of moisture-wicking materials, this tee ensures you stay cool and dry during the most intense workouts, making it your go-to choice for the gym, the track, or wherever your active lifestyle takes you.</p>
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