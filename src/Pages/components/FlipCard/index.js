import Card from 'react-bootstrap/Card';
import pengfei from '../../../assets/pengfei.webp'
import { useState } from 'react';



function FlipCard(){
    const [flip, setFlip] = useState(false);

    return (
        <div className={`card ${flip ? "flip" : ""}`}>
            <Card style={{ width: '18rem' }} className='front' onClick={(setFlip(!flip))}>
                <Card.Img variant="top" src={pengfei} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='back' onClick={(setFlip(!flip))}>
                <Card.Img variant="top" src={pengfei} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            
        </div>
    );
}

export default FlipCard