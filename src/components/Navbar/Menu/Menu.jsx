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

                </div>
            </div>
        </div>
    )
}

export default Menu
