import "./MostPopular.css" 

import {Card,SectionHeader,SectionWrapper} from '../../Components/index';


import MostPopularData from '../../data/mostPopularData';

const MostPopular=()=>{

   
    const cards=MostPopularData.map(card =>{
       return <Card image={card.image}  title={card.title} category={card.category}  rate={card.rate} download={card.download}/>
    })
    return(
       <>
          <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className="section-body">
                <div className="most-popular-item">
                
                    {cards}
                

                 
                </div>
            </div>
         </SectionWrapper>
       </>
    );
}
export default MostPopular;