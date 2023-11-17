
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
                        <p className='faqtext'>Flexibility at checkout! You can easily pay through online Email Transfer or by cheque. Pick the option that works best for you!</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='prod-p'>What is your return policy?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Custom made just for you! Review and tweak your order details before finalizing. Once your order is placed, it's set to go as we craft it to your unique specifications. Returns aren't available since it's tailored to you, but we're here to ensure you love what you order!</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='prod-p'>How long does it take to receive my order?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Greatness takes time! Expect your bespoke items to arrive in about 5 weeks, or opt for standard shipping to get them within 7 weeks. Your patience will be rewarded with unmatched quality.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='prod-p'>What is your import/export policy?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Fashion knows no borders! We're thrilled to ship your custom designs worldwide, adhering to all international guidelines. Wherever you are, you're just an order away from something special.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='prod-p'>What printing method is used for the t-shirts?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Our tees come to life through vinyl heat press—a technique that offers stretchy, durable, multi-color designs with eco-friendly materials. It's all about quality that feels good and does good!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className='prod-p'>Can I place a single order with multiple colors?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Absolutely! Unleash your style with a kaleidoscope of colors. Mix and match to create a wardrobe that’s as vibrant and varied as you are. Just let us know your palette and we’ll take care of the rest!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header className='prod-p'>What is the minimum order to get the t-shirt price?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Our Spark tees kick in at a cozy minimum of just 200 units. Perfect for teams, events, or any group ready to rock a unified look!"
</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header className='prod-p'>What file formats do you accept for uploading my artwork?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>We want your designs to shine! Send us your artwork in vector format like ai or png for top-notch quality.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header className='prod-p'>Will there be an extra charge with my customizations?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>No surprises here! The prices you see for our athletic and comfort styles—$8 and $13 per unit, respectively—already include your custom flair. Customize away without a worry!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header className='prod-p'>What is the maximum size you can screen print my design (without extra charge)?</Accordion.Header>
                    <Accordion.Body>
                        <p className='faqtext'>Maximize your design at no extra cost up to 8.6 x 11.8 inches(220mm x 300mm)! Want to go bigger, up to 11.7 in x 16.5 in (300mm x 420mm)? Let's talk about it in our meeting and we'll work out the details together.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default FAQ;