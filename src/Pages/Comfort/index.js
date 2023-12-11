import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col, Accordion } from "react-bootstrap"
import tshirtClassic from '../../assets/images/tshirt-prm.jpg'
import tshirtClassicMeasure from '../../assets/images/sizechartcm.jpg'
import inches from '../../assets/images/sizechartinches.jpg'
const Athletic = () => {
    return(
        <>
            <NavigationBar/>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <Row>
                            <Col md={6} xs={12}>
                                <img className='prod-img' src={tshirtClassic}/>
                            </Col>
                            <Col md={6} xs={12} className='prod-descbox'>
                                <h1 className="prod-title"> Spark Comfort</h1>
                                <h3 className="prod-subtitle"> $13 <span className='small-p'>/ Unit (Customization Included)</span></h3>
                                <p>Step into a world of supreme comfort with the Spark Comfort T-shirt, crafted for those who value both comfort and longevity. This tee is a cozy blend of 90% cotton and 10% Lycra, giving you the best of both worlds: the comfortable, soft touch of cotton and the flexible, shape-retaining properties of Lycra.</p>
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='prod-p'>Product Descriptions</Accordion.Header>
                                        <Accordion.Body>
                                        <p>• Weight: 200g/piece<br/>• 90%&nbsp;Cotton, 10%&nbsp;Lycra <br/>• 18 Color Options</p>
                                       
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
                                        <p>• Standard Shipping (7 Weeks) - $100 <br/>• Express Shipping (5 Weeks) - Additional $500 ($600 Total)<br/>Shipping Times and Prices apply for all order sizes.</p>
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