import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar"
import Quote from '../components/Quote'
import { Container } from "react-bootstrap";
import pricechart from '../../assets/pricechart.webp';

import './styles.css'

const Pricing = () => {
    return (
        <>
            <NavigationBar />
            <div className="pricing-body">
                <div className='pricing-hero'>
                    <Container className='customCont'>
                        <div className='pricing-title-block'>
                            <h1 className="pricing-title">Pricing</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="pricechart">
                <Container className='customCont'>
                    <div className='pricebox'>
                        <img className='priceimg' src={pricechart}/>
                    </div>
                    <div>
                        <h1 class="pricing-txt">No hidden cost ever.<br/>Lowest price in The Greater Toronto area guaranteed.</h1>
                    </div>
                </Container>

            </div>
            <Quote />
            <Footer />

        </>
    )
}

export default Pricing;