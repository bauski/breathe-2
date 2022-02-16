import React, { useState } from 'react'
import '../styles/menu.css'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggle = () => setMenuOpen(!menuOpen)

    return (
        <div id="menu">
            <a id="menu-icon" onClick={toggle}>
                <div id="circle" className={ menuOpen ? 'active' : '' }>
                    <div className="bar">
                    </div>
                    <div className="bar">
                    </div>
                    <div className="bar">
                    </div>
                </div>
            </a>
            <div id="menu-form" className={ menuOpen ? 'active' : '' }>
                Breathe 
            </div>
        </div>
    )
}

export default Menu
