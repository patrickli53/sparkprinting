
import NavigationBar from "../components/Navbar"
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import './styles.css'
import { Container, Row, Col } from "react-bootstrap"
import hoodieprm from '../../assets/hoodieprm.webp'
import hoodiePrmMeasure from '../../assets/hoodieprm-measure.webp'
import hoodieWC from '../../assets/hoodiewc.webp'
import hoodieWCMeasure from '../../assets/hoodiewc-measure.webp'

const Hoodies = () => {
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
                        <h1 className='product-title1'>HOODIES</h1>
                        <h1 className='product-title2'>Spark Premium </h1>
                        <Row>
                            <Col xs={6}>
                                <p className='prod-p'> Available Colours</p>
                                <img className='prod-img' src={hoodieprm}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 300g/piece<br/>■ 65% Cotton, 35% CVC<br/>■ 10 Color Options</p>
                                <img className='prod-measure' src={hoodiePrmMeasure}/>
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
                                <img className='prod-img' src={hoodieWC}/>
                            </Col>
                            <Col xs={6}>
                                <p className='prod-p'>Product Descriptions</p>
                                <p class="prod-points">■ Weight: 500g/piece<br/>■ 100% cotton<br/>■ 8 Color Options</p>
                                <img className='prod-measure' src={hoodieWCMeasure}/>
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

export default Hoodies;