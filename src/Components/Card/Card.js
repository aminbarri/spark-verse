import './card.css'
import game from '../../assets/images/game.png'

const Card =(props)=>{


    return (
        <div className='most-popular-items'>
            <div className="card-wrapper">
            <img  className='most-popular-item-img' src={game}  alt="game"/>
            <div className="most-popular-item-content">
                <h4 className="most-popular-item-name">{props.title}
                    <br />
                    <span>{props.category}</span>
                </h4>
                <ul className="most-popular-item-rate">
                <li><span>{props.rate}</span></li>
                <li><span>{props.download}</span></li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Card;