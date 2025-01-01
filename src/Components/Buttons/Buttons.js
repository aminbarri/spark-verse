import './buttons.css'

const PrimaryButtons =(props)=>{


    return (
     
      <>
       <div className='hero_buton'>{props.children}</div>
      </>
    )
}

const SecondryButtons =(props)=>{


    return (
     
       <>
       <div >
       <a href='' className='download'> {props.children}</a>
       </div>
      </>
    )
}
export default PrimaryButtons;
export {SecondryButtons}