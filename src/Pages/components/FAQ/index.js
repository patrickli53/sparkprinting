
import './styles.css'
import { Accordion } from 'react-bootstrap'
const FAQ = () => {
    return (
        <div>
            <h1 className='page-title customPrint'>Frequently Asked Questions</h1>

            <Accordion alwaysOpen className='faqbody'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='prod-p'>What payment methods do you accept?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>We accept a variety of payment methods, including major credit cards, debit cards, and secure online payment platforms for your convenience. Your transaction is in safe hands with our trusted payment gateways.</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='prod-p'>What is your return policy?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>To maintain product integrity and hygiene, we do not accept returns. Please carefully review your order before confirming the purchase. If you have any concerns, our customer support team is here to assist you.</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='prod-p'>How long does it take to receive my order?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Your satisfaction is our priority. Standard delivery time is approximately 5 weeks from the order placement date, while standard shipping may take up to 7 weeks. Rest assured, the wait is worth it for the premium quality you'll receive.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='prod-p'>What is your import/export policy?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>We cater to global tastes! We offer international shipping, and our import/export processes comply with all relevant regulations. Feel free to place your order from anywhere in the world.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='prod-p'>What printing method is used for the t-shirts?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Our t-shirts are crafted using state-of-the-art printing technology, ensuring vibrant and long-lasting designs. We employ a combination of precision and quality to bring your customizations to life.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className='prod-p'>Can I place a single order with multiple colors?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Absolutely! Express your style with a burst of colors. We offer a plethora of color options you to mix and match colors within a single order. Just let us know in the initial meeting. Create a truly unique wardrobe with ease.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default FAQ;