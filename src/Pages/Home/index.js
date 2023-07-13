import NavigationBar from '../components/Navbar'
import { Button, Container } from 'react-bootstrap'

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
                                <br/>
                                <div className='topPadding'>
                                    <Button href="https://meetings.hubspot.com/nick-zhou" id ='quote-button'>Get a quote now :)</Button>
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
                        <Banner images={images} speed={7000}/>
                    </a>
                </div>
                <h1>Trust Groups</h1>
                <h1>What students love us for</h1>
                <h1>Pricing Chart</h1>
                <h1>Expert Design</h1>
                <h1>Responsive Customer Service</h1>
                <h1>Custom Printing</h1>
                <h1>Quote</h1>
                <h1>Footer</h1>
            </div>






        </>
    )
}

export default Home;