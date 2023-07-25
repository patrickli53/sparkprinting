import './styles.css'
import { Nav, Row, Tab, Col, Container } from 'react-bootstrap';
import utmsu from '../../../assets/utmsu-logo.webp';
import maconeact from '../../../assets/maconact-logo.webp'
import utmfsa from '../../../assets/utmfsa-logo.webp'
import dem from '../../../assets/dem-logo.webp'
import numonic from '../../../assets/numonic-logo.webp'
import hosa from '../../../assets/hosa-logo.webp'
import sk from '../../../assets/sick-logo.webp'
import ap from '../../../assets/ap-logo.webp'
import amacss from '../../../assets/amacss-logo.webp'
import mmac from '../../../assets/mmac-logo.webp'
import mactkd from '../../../assets/mactkd-logo.webp'
import mcss from '../../../assets/mcss-logo.webp'
import delta from '../../../assets/deltalogo.png'
import cutc from '../../../assets/cutc.png'
import rlh from '../../../assets/rlh.png'
import morphace from '../../../assets/morphace-logo.webp'
import carearch from '../../../assets/carearch-logo.webp'
import planni from '../../../assets/planni-logo.webp'
import haven from '../../../assets/haven-logo.webp'
import asepha from '../../../assets/asepha-logo.svg'
import seleste from '../../../assets/seleste-logo.webp'

const CustomerTab = () => {
    return (
        <div className='section'>
            <div className='customer-title'>
                Our Loyal Customers
            </div>
            <div >
                <Container className='customCont'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="clubs">
                        <Nav variant="pills" className="flex-column customers">
                            <Row>
                                <Col sm={4}>
                                    <Nav.Item className='customers'>
                                        <Nav.Link className='customers' eventKey="clubs">Student Clubs</Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={4}>
                                    <Nav.Item className='customers'>
                                        <Nav.Link className='customers' eventKey="events">Student Events</Nav.Link>
                                    </Nav.Item>

                                </Col>
                                <Col sm={4}>
                                    <Nav.Item className='customers'>
                                        <Nav.Link className='customers' eventKey="ventures">Student Ventures</Nav.Link>
                                    </Nav.Item>

                                </Col>
                            </Row>

                        </Nav>
                        <Row>
                            <Tab.Content>
                                <Tab.Pane eventKey="clubs">
                                    <div className='pic-section'>
                                        <div className='pic-box4'>
                                            <img src={utmsu} className='image-10' />
                                            <img src={maconeact} className='image-10' />
                                            <img src={utmfsa} className='image-10' />
                                            <img src={dem} className='image-10' />
                                            <img src={numonic} className='image-10' />
                                            <img src={hosa} className='image-10' />
                                            <img src={sk} className='image-10' />
                                            <img src={ap} className='image-10' />
                                            <img src={amacss} className='image-10' />
                                            <img src={mmac} className='image-10' />
                                            <img src={mactkd} className='image-10' />
                                            <img src={mcss} className='image-10' />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="events">
                                    <div className='pic-section'>
                                        <div className='pic-box3'>
                                            <img src={delta} className='image-10' />
                                            <img src={cutc} className='image-10' />
                                            <img src={rlh} className='image-10' />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ventures">
                                    <div className='pic-section'>
                                        <div className='pic-box4'>
                                            <img src={morphace} className='image-10' />
                                            <img src={carearch} className='image-10' />
                                            <img src={planni} className='image-10' />
                                            <img src={haven} className='image-10' />
                                            <img src={asepha} className='image-10' />
                                            <img src={seleste} className='image-10' />
                                        </div>
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        </div>
    )
}

export default CustomerTab;