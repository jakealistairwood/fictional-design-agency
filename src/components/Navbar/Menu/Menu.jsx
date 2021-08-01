const menuLinks = [
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

const Menu = ({ open }) => {

    const navbarMenuActive = open ? 'navbar--menu active' : 'navbar--menu';

    return (
        <div className={navbarMenuActive}>
            <div className="container">
                <div className="menu-links">
                    <h5 className="menu-links--header">menu</h5>
                    <ul>
                        {menuLinks.map(link => (
                            <li key={link.id}><a href={link.href}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="menu-footer">
                    <div className="menu-footer-left">
                        <p className="company-address">
                            <span>32 Park Lane,</span>
                            <span>Bristol, BS1 3FG.</span>
                        </p>
                        <p className="company-number">+44 (0) 1234 567 890</p>
                        <a href="mailto:contact@oneninetoronto.agency">
                            <p className="company-email">contact@oneninetoronto.agency</p>
                        </a>
                    </div>
                    <div className="menu-footer-right">
                        <a href="/">
                            <p className="footer-logo">indigo.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
