const footerLinks = [
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
    },
]

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer--left">
                    <p className="company-address">
                        <span>32 Park Lane,</span>
                        <span>Bristol, BS1 3FG.</span>
                    </p>
                    <p className="company-number">+44 (0) 1234 567 890</p>
                    <a href="mailto:contact@oneninetoronto.agency">
                        <p className="company-email">contact@oneninetoronto.agency</p>
                    </a>
                </div>
                <div className="footer--right">
                    <ul className="site-links">
                        {footerLinks.map(link => (
                            <li className="site-link" key={link.id}><a href={link.href}>{link.name}</a></li>
                        ))}
                    </ul>
                    <p className="footer--logo">19Toronto</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
