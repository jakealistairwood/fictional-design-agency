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
]

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#">
                    <h5 className="navbar--logo">19Toronto</h5>
                </a>
                <div className="navbar--hamburger-menu">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>
            </div>
            <div className="navbar--menu">
                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}><a href={link.href}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
      </nav>
    )
}

export default Navbar
