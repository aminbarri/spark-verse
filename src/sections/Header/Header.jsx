import {Link} from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/logo.png' 
import NavItem  from '../../Components/NavItem/NavItem'
const Header =()=>{


    return (
        <nav className="navbar navbar-expand-lg container">
            <div className="container-fluid">
            <Link to='/' className='nav-link'><img src={logo} className="" alt="" width="120px" /></Link>
              
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <NavItem>
                        <Link to='/' className='nav-link'>Home</Link>
                     
                    </NavItem>

                    <NavItem>
                     <Link to='/profile' className='nav-link'>Profile</Link>

                    </NavItem>
                   
                 
                    
                   
                </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Header;