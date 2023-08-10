import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import './styles.css'
const FlipCard = ({name, img, role, backText}) => {
    const [flip, setFlip] = useState(false);
    useEffect(() =>{
        console.log(name)
        console.log(img)
        console.log(role)
    }, [name,role,img,backText])
    console.log(name)
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className='front'>
                <img variant="top" src={require(`../../../assets/images/${img}.webp`)} />
                <div>
                    <div>{name}</div>
                    <div>
                        {role}
                    </div>
                </div>
            </div>
            <div className="back">
                <div>
                {backText}
                </div>
            </div>
        </div >
    )
}
export default FlipCard