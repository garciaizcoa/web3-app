import React , {useState, useEffect, }from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';




function Navbar() {
    

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick =()=> setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };
  useEffect(() => {
    showButton();
    }, []);
    
  window.addEventListener('resize', showButton);

  return (
    <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
                    WET3.0<i class="fa-solid fa-droplet"></i>
                    </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/Upload' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Upload
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/Map' className='nav-links' onClick={closeMobileMenu}>
                                Map
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Upload</Button>}
                </div>
            </nav>
        <Outlet />
    </>
  );
}

export default Navbar;