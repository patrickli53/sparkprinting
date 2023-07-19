
import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col } from "react-bootstrap"
import crewprm from '../../assets/crewprm.webp'
import crewPrmMeasure from '../../assets/crewprm-measure.webp'
import crewWC from '../../assets/crewwc.webp'
import crewWCMeasure from '../../assets/crewwc-measure.webp'

const Crewneck = () => {
    return(
        <>
            <NavigationBar/>
            <div className="collection-body"> 
                <div className='collection-hero'>
                    <Container className='customCont'>
                        <div className='collection-title-block'>
                            <h1 className="collection-title">Collections</h1>
                        </div>
                    </Container>

                </div>
            </div>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <h1 className='product-title1'>CREWNECKS</h1>
                        <h1 className='product-title2'>Spark Premium </h1>
                        <Row>
                            <Col xs={6}>
                                <p className='prod-p'> Available Colours</p>
                                <img className='prod-img' src={crewprm}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 450g/piece<br/>■ 35% Cotton, 65% Polyester<br/>■ 17 Color Options</p>
                                <img className='prod-measure' src={crewPrmMeasure}/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <h1 className='product-title2'>Spark World Class</h1>
                        <Row>
                            <Col xs={6}>
                                <p className='prod-p'> Available Colours</p>
                                <img className='prod-img' src={crewWC}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 480g/piece<br/>■ 100% Polyester<br/>■ 8 Color Options</p>
                                <img className='prod-measure' src={crewWCMeasure}/>
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

export default Crewneck;