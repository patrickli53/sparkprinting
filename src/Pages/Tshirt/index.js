import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col } from "react-bootstrap"
import tshirtClassic from '../../assets/tshirt-classic.webp'
import tshirtClassicMeasure from '../../assets/tshirt-classic-measurements.webp'
import tshirtPrm from '../../assets/tshirt-prm.webp'
import tshirtPrmMeasure from '../../assets/tshirt-prm-measure.webp'
import tshirtWC from '../../assets/tshirt-wc.webp'
import tshirtWCMeasure from '../../assets/tshirt-wc-measure.webp'

const Tshirt = () => {
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
                        <h1 className='product-title1'>T-SHIRTS</h1>
                        <h1 className='product-title2'>Spark Classic </h1>
                        <Row>
                            <Col xs={6}>
                                <p className='prod-p'> Available Colours</p>
                                <img className='prod-img' src={tshirtClassic}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 120g/piece<br/>■ 100%&nbsp;Polyester<br/>■ 16 Color Options</p>
                                <img className='prod-measure' src={tshirtClassicMeasure}/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className='product-body'>
                <Container className='customCont'>
                    <div className='product'>
                        <h1 className='product-title2'>Spark Premium </h1>
                        <Row>
                            <Col xs={6}>
                                <p className='prod-p'> Available Colours</p>
                                <img className='prod-img' src={tshirtPrm}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 200g/piece<br/>■ 90% Cotton, 10% Lycra<br/>■ 18 Color Options</p>
                                <img className='prod-measure' src={tshirtPrmMeasure}/>
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
                                <img className='prod-img' src={tshirtWC}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 240g/piece<br/>■ 100% High-grade combed cotton<br/>■ 9 Color Options</p>
                                <img className='prod-measure' src={tshirtWCMeasure}/>
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

export default Tshirt;