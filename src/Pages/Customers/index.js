import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";
import Quote from "../components/Quote";
import CustomerTab from "../components/CustomerTab";
import './styles.css'

const Customers = () => {
    return(
        <>
            <NavigationBar/>
            <h1>Our Journey</h1>
            <CustomerTab/>
            <h1>Custom Printing</h1>
            <Quote/>
            <Footer/>





        </>
    )
}

export default Customers;