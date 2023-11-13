import { Chrono } from "react-chrono";
import './styles.css'
import meeting from '../../../assets/undraw_conversation_re_c26v.svg';
import quote from '../../../assets/undraw_printing_invoices_-5-r4r.svg';
import order from '../../../assets/undraw_online_transactions_-02-ka.svg';
import factory from '../../../assets/undraw_factory_dy-0-a.svg';
import delivered from '../../../assets/undraw_order_delivered_re_v4ab.svg';


const HorTimeline = () => {
  const items = [
    {
        title: "Initial Meeting",
        cardTitle: "1 Day",
        cardDetailedText:"Meet with Spark to discuss order details",
    },
    {
        title: "Quote",
        cardTitle: "1 Day",
        cardDetailedText:"Calculate details of estimated quote",
    },
    {
        title: "Place Order",
        cardTitle: "1 Day",
        cardDetailedText: "Spark submits the order to our manufacturer"
    },
    {
        title: "Manufacturing",
        cardTitle: "3 weeks",
        cardDetailedText:"Factory manufactures your shirts, to order!",
    },
    {
        title: "Delivery",
        cardTitle: "2 - 4 Weeks",
        cardDetailedText: "Standard - 2 Weeks, Express - 4 weeks"
    },
 ];

  return (
    <div className='chronobody'> 
      <Chrono 
        mode='HORIZONTAL' 
        items={items} 
        cardWidth='175'
        cardHeight='120'
        hideControls='true' 
        showAllCardsHorizontal='true' 
        slideShow='true' 
        timelinePointDimension='90'
        noUniqueId='true'
        theme={{
            primary: '#edb8384a',
            secondary: '#edb8384a',
            cardBgColor: '#f7e2b0',
            titleColor: 'black',
            titleColorActive: '#edb8384',
          }}
    >
        <div className="chrono-icons">
            <img className='undraw' src={meeting}></img>
            <img className='undraw' src={quote}></img>
            <img className='undraw' src={order}></img>
            <img className='undraw' src={factory}></img>
            <img className='undraw' src={delivered}></img>

        </div>
      </Chrono>
    </div>
  )
}

export default HorTimeline