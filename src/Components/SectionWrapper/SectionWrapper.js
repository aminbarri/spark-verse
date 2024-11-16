import './SectionWrapper.css'

const SectionWrapper =(props)=>{


    return (
        <div className='section-warpper'>
            {props.children}
        </div>
    )
}

export default SectionWrapper;