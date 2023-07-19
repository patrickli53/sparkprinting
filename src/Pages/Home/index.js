import NavigationBar from '../components/Navbar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Quote from '../components/Quote'

import './styles.css'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import deltaGP from '../../assets/deltaGroupPic.webp'
import cutc from '../../assets/cutc.png'
import deltalogo from '../../assets/deltalogo.png'
import dem from '../../assets/dem.png'
import hosa from '../../assets/hosa.png'
import mactkd from '../../assets/mactkd.webp'
import mm from '../../assets/mm.png'
import oneact from '../../assets/oneact.png'
import rlh from '../../assets/rlh.png'
import fsa from '../../assets/utmfsa.png'
import utmsu from '../../assets/utmsu.png'
import affordable from '../../assets/undraw_savings_re_eq4w.svg'
import design from '../../assets/undraw_design_team_re_gh2d.svg'
import support from '../../assets/undraw_instant_support_re_s7un.svg'
import tshirt from '../../assets/tshirt.webp'
import hoodie from '../../assets/hoodie.webp'
import crewneck from '../../assets/crewneck.webp'
import Footer from '../components/Footer'


const images = [
    cutc,
    deltalogo,
    dem,
    hosa,
    mactkd,
    mm,
    oneact,
    rlh,
    fsa,
    utmsu
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

const Home = () => {
    return (
        <>
            <NavigationBar />
            <div className='homeBody'>
                <div className='homeHero'>
                    <Container className='customCont'>
                        <div className='leftHero'>
                            <div className='heroText'>
                                <h1 class="page-title">Custom T-shirt Printing for Students in Toronto and Across Canada</h1>
                                <p class="paragraph">Toronto's most affordable shop for custom t-shirt printing for your club or event</p>
                                <Link to="/pricing" class="top-text hero">AS LOW AS $7 PER SHIRT!</Link>
                                <br />
                                <div className='topPadding'>
                                    <Button href="https://meetings.hubspot.com/pengfei-fu" id='quote-button'>Get a quote now :)</Button>
                                </div>
                            </div>
                            <div className='heroImg-div'>
                                <div className='heroImg'>
                                    <img src={deltaGP} alt="Delta Group Pic" />
                                </div>
                                <p> Spark Printing x DeltaHacks (McMaster University), 2023 </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='groups'>
                    <a className='customerLink' href='/customers'>
                        <div className='rotatingcontainer'>
                            <h2> Our Trusted Student Groups</h2>
                        </div>
                        <Banner images={images} speed={9000} />
                    </a>
                </div>
                <div className='info1'>
                    <h1 className='titles'>
                        What students love us for
                    </h1>
                    <Container className='infoCont'>
                        <Row className='textRow'>
                            <Col sm={6}>
                                <img className='undraw' src={affordable}></img>
                            </Col>
                            <Col sm={6}>
                                <h3 className='infoH3'>
                                    Affordable Custom T-Shirt Printing
                                </h3>
                                <p className='p2'>
                                    We are the most affordable custom t-shirt printing business in Toronto, with prices as low as $7 per full-color print shirt!
                                </p>
                                <Link to="/pricing" class="top-text infoLink">Pricing Chart</Link>
                            </Col>
                        </Row>
                        <Row className='textRow'>
                            <Col sm={6}>
                                <h3 className='infoH3'>
                                    Expert T-Shirt Design
                                </h3>
                                <p className='p2'>
                                    We have a team of design experts that will provide advice and optimize logo placements for FREE!
                                </p>
                            </Col>
                            <Col sm={6}>
                                <img className='undraw' src={design}></img>
                            </Col>
                        </Row>
                        <Row className='textRow'>
                            <Col sm={6}>
                                <img className='undraw' src={support}></img>
                            </Col>
                            <Col sm={6}>
                                <h3 className='infoH3'>
                                    Responsive Customer Service
                                </h3>
                                <p className='p2'>
                                    We don't take business days to respond. Talk to us and we will get back to you within hours and sometimes within minutes!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='groups'>
                    <Container className='customCont'>
                        <h1 className='page-title customPrint'>Custom T-Shirt Printing and More</h1>
                        <div className='button-cont'>
                            <Row>
                                <Col sm='4' xs='12'>
                                    <div className='print-button'>
                                        <Link className='print-link' to='/tshirts'>
                                            <img className='print-img' src={tshirt}></img>
                                            <h3 className='print-text'> T-SHIRTS</h3>
                                        </Link>
                                    </div>

                                </Col>
                                <Col sm='4' xs='12'>
                                    <div className='print-button'>
                                        <Link className='print-link' to='/hoodies'>
                                            <img className='print-img' src={hoodie}></img>
                                            <h3 className='print-text'> HOODIES</h3>
                                        </Link>
                                    </div>

                                </Col>
                                <Col sm='4' xs='12'>
                                    <div className='print-button'>
                                        <Link className='print-link' to='/crewnecks'>
                                            <img className='print-img' src={crewneck}></img>
                                            <h3 className='print-text'> CREWNECKS</h3>
                                        </Link>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Quote/>
                <Footer/>
            </div>






        </>
    )
}

export default Home;