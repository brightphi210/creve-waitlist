import React, {useState} from 'react'
import './styles.css'
import logo from './craves.png'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const openMenu = () => {
        setIsNavOpen(true)
      };
    
    
      const closeMenu = () => {
        setIsNavOpen(false)
      };
  return (
    <div>
        <section className='navSection'>
            <Link to={'/'}><img src={logo} alt="" /></Link>
            <ul className={`navSectionUl ${isNavOpen ? "open" :"close"}`}>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <i class="uil uil-multiply closebtn" onClick={closeMenu}></i>
            </ul>
            <i class="uil uil-apps openbtn" onClick={openMenu}></i>
        </section>
    </div>
  )
}

export default Nav