import './styles.css'
import { Container, Button } from 'react-bootstrap';

const Quote = () => {
    return (
        <div className='getaquote'>
        <Container className='customCont'>
            <h3 className='quote-title'>Ready to Start Your Custom T-Shirt Printing Journey?</h3>
            <p className='quote-p'> Contact for a quote now. We'd love to help!</p>
            <div className='topPadding'>
                <Button href="https://meetings.hubspot.com/pengfei-fu" id='quote-button'>Let's Do it!</Button>
            </div>
        </Container>
    </div>
    );
  };
  
export default Quote;