import "./labiry.css" 

import {SectionHeader,SectionWrapper,CardLabiry} from '../../Components/index';
import LabiryData from '../../data/LabiryData';



const Labiry=()=>{

   
    const cards = LabiryData.map(card => {
        return (
            <CardLabiry 
                key={card.id} 
                image={card.image}  
                title={card.title} 
                category={card.category}  
                date_added={card.date_added} 
                hours_palayed={card.hours_palayed} 
                download={card.download} 
            />
        );
     });
    return(
       <>
          <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className="section-body">
                <div className="labiry-item">
                
                {cards }

                 
                </div>
            </div>
         </SectionWrapper>
       </>
    );
}
export default Labiry;