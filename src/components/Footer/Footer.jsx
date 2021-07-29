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
                    <a href="#">
                        <p className="company-email">contact@oneninetoronto.agency</p>
                    </a>
                </div>
                <div className="footer--right">
                    <ul className="site-links">
                    <li className="site-link">Work</li>
                    <li className="site-link">Services</li>
                    <li className="site-link">Careers</li>
                    <li className="site-link">About</li>
                    <li className="site-link">Contact</li>
                    </ul>
                    <p className="footer--logo">19Toronto</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
