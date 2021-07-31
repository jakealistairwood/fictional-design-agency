import { useState } from 'react';
import Menu from './Menu'

const Navbar = () => {

    const [ open, setOpen ] = useState(false);

    const changeLogoColor = open ? 'navbar--logo active' : 'navbar--logo';
    const changeLine1Color = open ? 'line-1 active' : 'line-1';
    const changeLine2Color = open ? 'line-2 active' : 'line-2';
    const navbarActive = open ? 'navbar active' : 'navbar';

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className={navbarActive}>
            <div className="container">
                <a href="/">
                    <h5 className={changeLogoColor}>indigo.</h5>
                </a>
                <div className="navbar--hamburger-menu" onClick={handleMenu}>
                    <div className={changeLine1Color}></div>
                    <div className={changeLine2Color}></div>
                </div>
            </div>
            <Menu open={open} />
      </nav>
    )
}

export default Navbar
