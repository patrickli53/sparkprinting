import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col, Accordion } from "react-bootstrap"
import tshirtClassic from '../../assets/images/tshirt-classic.jpg'
import tshirtClassicMeasure from '../../assets/tshirt-classic-measurements.webp'
import inches from '../../assets/images/sizechartinches.png'

const Athletic = () => {
    return(
        <>
            <NavigationBar/>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <Row>
                            <Col s={6} xs={12}>
                                <img className='prod-img' src={tshirtClassic}/>
                            </Col>
                            <Col s={6} xs={12}className='prod-descbox'>
                                <h1 className="prod-title"> Spark Athletic</h1>
                                <h3 className="prod-subtitle"> $8 <span className='small-p'>/ Unit (Customization Included)</span></h3>
                                <p>The Spark Athletic performance T-shirt is the ultimate ally for any action-packed day or workout sessions. Indulge in the soft embrace of its 100% polyester fabric that's as gentle as a breeze against your skin, while the advanced sweat-absorption feature keeps you fresh and focused. This breathable wonder guarantees a carefree and stylish look that moves with you.  </p>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='prod-p'>Product Descriptions</Accordion.Header>
                                        <Accordion.Body>
                                        <p>• Weight: 120g/piece<br/>• 100%&nbsp;Polyester<br/>• 12 Color Options</p>
                                        
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='prod-p'>Size Chart</Accordion.Header>
                                        <Accordion.Body>
                                        <img className='prod-measure' src={tshirtClassicMeasure}/>
                                        <img className='prod-measure' src={inches}/>

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