import NavigationBar from '../components/Navbar'
import { Button, Col, Container, Row, Accordion } from 'react-bootstrap'
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
import HorTimeline from '../components/Timeline'
import design from '../../assets/undraw_design_team_re_gh2d.svg'
import support from '../../assets/undraw_instant_support_re_s7un.svg'
import athlete from '../../assets/icons8-runner-on-the-start-96.png'
import cloud from '../../assets/icons8-cloud-96.png'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import { useState, useRef, useEffect } from 'react'
import { MdArrowDownward } from "react-icons/md";


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
const useMountEffect = fun => useEffect(fun, []);

const Home = () => {
    const groups = useRef(null)
    const [showScrollTopButton, setShowScrollTopButton] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setShowScrollTopButton(false);
            } else {
                setShowScrollTopButton(true);
            }
        });
    }, []);
    const executeScroll = () => groups.current.scrollIntoView()
    useMountEffect(executeScroll); // Scroll on mount

    return (
        <>
            <NavigationBar />
            <div className='homeBody'>
                {showScrollTopButton && (
                    <MdArrowDownward
                        className="top-btn-position top-btn-style"
                        onClick={executeScroll} />
                )}
                <div className='homeHero'>
                    <Container className='customCont'>
                        <div className='leftHero'>
                            <div className='heroText'>
                                <h1 class="page-title">North America's most affordable shop for custom t-shirt printing for your need.</h1>
                                {/* <p class="paragraph"></p> */}
                                <Link to="/athletic" class="top-text hero">$8 PER SHIRT, CUSTOMIZATION INCLUDED!</Link>
                                <br />
                                <div className='topPadding'>
                                    <Button href="https://meetings.hubspot.com/pengfei-fu" id='quote-button'>Get a quote now :)</Button>
                                </div>
                            </div>
                            <div className='heroImg-div'>
                                <div className='heroImg'>
                                    <img src={deltaGP} alt="Delta Group Pic" />
                                </div>
                                <p className='caption'> Spark Printing x DeltaHacks (McMaster University), 2023 </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div ref={groups} style={{ height: '3rem' }} />
                <div className='groups'>
                    <Link className='customerLink' to='/customers'>
                        <div className='rotatingcontainer'>
                            <h2 > Our Trusted Student Groups</h2>
                        </div>
                        <Banner images={images} speed={9000} />
                    </Link>
                </div>
                <div className='info1'>
                    <h1 className='titles'>
                        Order Timeline
                    </h1>
                    <Container className='infoCont'>
                        <Row className='textRow'>
                            <HorTimeline />
                        </Row>
                    </Container>
                </div>
                <div className='groups'>
                    <Container className='customCont'>
                        <h1 className='page-title customPrint'>Offering Two High-Quality Lines</h1>
                        <div className='button-cont'>
                            <Row>
                                <Col md={6} xs={12} >
                                    <Link className='print-link' to='/athletic'>
                                        <div className='print-button'>
                                            <img className='print-img' src={athlete}></img>
                                            <h3 className='print-text'> ATHLETIC</h3>
                                        </div>
                                    </Link>
                                </Col>
                                <Col md={6} xs={12} >
                                    <Link className='print-link pl1' to='/comfort'>
                                    <div className='print-button'>
                                            <img className='print-img' src={cloud}></img>
                                            <h3 className='print-text'> COMFORT</h3>
                                    </div>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className='info-1'>
                    <Container className='customCont'>
                        <FAQ />
                    </Container>
                </div>
                <Quote />
                <Footer />
            </div>






        </>
    )
}

export default Home;