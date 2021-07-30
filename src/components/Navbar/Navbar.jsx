import { useState } from 'react';

const navLinks = [
    {
        id: 1,
        name: 'Work',
        href: '/our-work'
    },
    {
        id: 2,
        name: 'Services',
        href: '/services'
    },
    {
        id: 3,
        name: 'About',
        href: '/about-us'
    },
    {
        id: 4,
        name: 'Careers',
        href: '/careers'
    },
    {
        id: 5,
        name: 'Contact',
        href: '/contact-us'
    }
];

const Navbar = () => {

    const [ open, setOpen ] = useState(false);

    const changeLogoColor = open ? 'navbar--logo active' : 'navbar--logo';
    const changeLine1Color = open ? 'line-1 active' : 'line-1';
    const changeLine2Color = open ? 'line-2 active' : 'line-2';
    const navbarActive = open ? 'navbar active' : 'navbar';
    const navbarMenuActive = open ? 'navbar--menu active' : 'navbar--menu';

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className={navbarActive}>
            <div className="container">
                <a href="#">
                    <h5 className={changeLogoColor}>indigo.</h5>
                </a>
                <div className="navbar--hamburger-menu" onClick={handleMenu}>
                    <div className={changeLine1Color}></div>
                    <div className={changeLine2Color}></div>
                </div>
            </div>
            <div className={navbarMenuActive}>
                <div className="container">
                    <div className="menu-links">
                        <h5 className="menu-links--header">menu</h5>
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.id}><a href={link.href}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="menu-footer">

                    </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar
