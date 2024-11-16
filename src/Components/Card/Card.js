import './card.css'

import { FaStar } from "react-icons/fa6";

import { FaDownload } from "react-icons/fa";
const Card =(props)=>{


    return (
        <div className='most-popular-items'>
            <div className="card-wrapper">
            <img  className='most-popular-item-img' src={props.image}  alt="game"/>
            <div className="most-popular-item-content">
                <h4 className="most-popular-item-name">{props.title}
                    <br />
                    <span>{props.category}</span>
                </h4>
                <ul className="most-popular-item-rate">
                <li><span style={{'color':'var( --color-icons)'}}><FaStar /></span> <span>{props.rate}</span></li>
                <li><span style={{'color':'red'}}><FaDownload /> </span><span>{props.download}</span></li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Card;