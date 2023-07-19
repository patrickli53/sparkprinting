import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import email from '../../../assets/email.png'
import phone from '../../../assets/phone.png'

const Footer = () => {
    return (
        <div className='footer-div'> 
            <Container className='customCont'>
                <h3 class="heading">Spark Printing</h3>
                <p class="footer-text">Building the future of custom branding for student groups</p>
                <Row>
                    <Col className='footer-col' xs={6}>
                        <img className='footer-img' src={email}></img>
                        <h4 className='footer-title'>EMAIL</h4>
                        <br/>
                        <p class="footer-p">sales@sparkprinting.ca<br/>orders@sparkprinting.ca</p>
                    </Col>
                    <Col className='footer-col' xs={6}>
                        <img className='footer-img' src={phone}></img>
                        <h4 className='footer-title'>CALL</h4>
                        <br/>
                        <p class="footer-p">+1 (289) 775-6385<br/>+1 (613) 608-1158</p>
                    </Col>
                </Row>
                <div className='footer-copyright'>
                    <p className='copyright'>
                    Copyright © 2023 Spark Printing

                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer