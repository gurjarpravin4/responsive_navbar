import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MenuList } from '../constants'
import './Navbar.css'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    function toggleMenu() {
        setClicked(!clicked)
    }   
    return (
        <nav>
            <div className="logo">
                NAV<font>BAR</font>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {
                    MenuList.map(({ title, url }, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact to={url} activeClassName="active">
                                    {title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar
