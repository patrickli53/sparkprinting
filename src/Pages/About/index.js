import NavigationBar from "../components/Navbar";
import Footer from '../components/Footer'
import './styles.css';
import {Container, Row, Col} from 'react-bootstrap'
import pengfei from '../../assets/images/pengfei.webp'
import chris from '../../assets/images/chris.webp'
import leo from '../../assets/images/leo.webp'
import nick from '../../assets/images/nick.webp'



const About = () => {
    return(
        <div className='aboutBlock'>
            <NavigationBar/>
            <div className="collection-body"> 
                <div className='collection-hero'>
                    <Container className='customCont'>
                        <div className='collection-title-block'>
                            <h1 className="collection-title">About Us</h1>
                        </div>
                    </Container>

                </div>
            </div>
            <Container className='customCont'>
                
                <h1 className='page-title customPrint meetTitle'>Meet the Team</h1>
                <Row>
                    <Col sm='6'>
                        <div className="profileCard">
                            <img
                                className="avatar"
                                src={pengfei}
                                alt="Pengfei Fu"
                            />
                            <div className="data">
                            <h4 className='icon-title'>Pengfei Fu</h4>
                            <h4 className='icon-subtitle'>CO-FOUNDER <br/> CEO</h4>
                            </div>
                        </div>
                    </Col>
                    <Col sm='6'>
                        <div className="profileCard">
                            <img
                                className="avatar"
                                src={leo}
                                alt="Leo Zhou"
                            />
                            <div className="data">
                            <h4 className='icon-title'>Leo Zhou</h4>
                            <h4 className='icon-subtitle'>CO-FOUNDER <br/> COO</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='6'>
                        <div className="profileCard">
                            <img
                                className="avatar"
                                src={nick}
                                alt="Nick Zhou"
                            />
                            <div className="data">
                            <h4 className='icon-title'>Nick Zhou</h4>
                            <h4 className='icon-subtitle'>SALES MANAGER</h4>
                            </div>
                        </div>
                    </Col>
                    <Col sm='6'>
                        <div className="profileCard">
                            <img
                                className="avatar"
                                src={chris}
                                alt="Chris Zheng"
                            />
                            <div className="data">
                            <h4 className='icon-title'>Chris Zheng</h4>
                            <h4 className='icon-subtitle'>OPERATION ANALYST</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>





        </div>
    )
}

export default About;