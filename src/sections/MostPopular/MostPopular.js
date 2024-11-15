import "./MostPopular.css" 

import {Card} from '../../Components/index'


const MostPopular=()=>{
    return(
       <>
       <div className='section-warpper'>
            <div className="section-header">
                <h4>MostPopular</h4>
            </div>
            <div className="section-body">
                <div className="most-popular-item">
                
                  <Card image="game1"  title='fortnite' category="category 1"  rate='4.6' download='1M'/>
                  <Card image="game2" title='freefire' category="category 2"  rate='3.6' download='1.2M' />
                  <Card image="game3" title='pubg' category="category 3"  rate='2.9' download='100K' />
                  <Card image="game4" title='fifa' category="category 4"  rate='1' download='5M' />
                  <Card image="game1"  title='fortnite' category="category 1"  rate='4.6' download='1M'/>
                  <Card image="game2" title='freefire' category="category 2"  rate='3.6' download='1.2M' />
                  <Card image="game3" title='pubg' category="category 3"  rate='2.9' download='100K' />
                  <Card image="game4" title='fifa' category="category 4"  rate='1' download='5M' />

                 
                </div>
            </div>
       </div>
       </>
    );
}
export default MostPopular;