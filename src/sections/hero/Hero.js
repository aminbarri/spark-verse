import "./hero.css" 
import {PrimaryButtons} from '../../Components/index';
const Hero=()=>{
    return(
        <div className="hero_main">

            <div className="hero_text">
                <h6 className="hero_sub">Welcome to spark verse</h6>
                <h2 className="hero_title"><em>BROWSER</em> OUR POPULAR SRAPK VERSE</h2>

                <PrimaryButtons>
                    BROWSER NOW 
                </PrimaryButtons>
                
               
            </div>
         
        </div>
    );
}
export default Hero;