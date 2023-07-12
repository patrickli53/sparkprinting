import deltaGP from '../../assets/deltaGroupPic.webp'
import NavigationBar from '../components/Navbar'

import './styles.css'

const Home = () => {
    return(
        <>
            <NavigationBar/>
            <div className='homeBody'>
                <img src={deltaGP}></img>
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