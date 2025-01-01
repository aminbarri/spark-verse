import './CardLabiry.css'

import { FaStar } from "react-icons/fa6";

import { FaDownload } from "react-icons/fa";
import {SecondryButtons} from '../index';
const CardLabiry =(props)=>{


    return (
        <div className='labiry-card'>
            <ul className='items-card'>
                <li> <img src={props.image}  alt="" /> </li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>date_added</h4> <span>{props.date_added}</span></li>
                <li><h4>hours_palayed</h4> <span>{props.hours_palayed}</span></li>
                <li><h4>Currently</h4> <span>{props.download}</span></li>
                <div>
                <SecondryButtons>download</SecondryButtons>

                </div>

            </ul>
        </div>
    )
}

export default CardLabiry;