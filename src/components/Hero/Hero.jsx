import DribbbleIcon from '../../assets/img/dribbble.svg';
import InstagramIcon from '../../assets/img/instagram.svg';
import BehanceIcon from '../../assets/img/behance.svg';
import ArrowDownIcon from '../../assets/img/arrow-down.svg';

const socialIcons = [
    {
        href: 'https://dribbble.com/',
        src: `${DribbbleIcon}`,
        name: 'Dribbble Account',
        alt: 'link-to-our-dribble-account-icon'
    },
    {
        href: 'https://www.instagram.com/',
        src: `${InstagramIcon}`,
        name: 'Instagram Account',
        alt: 'link-to-our-instagram-account-icon'
    },
    {
        href: 'https://www.behance.net/',
        src: `${BehanceIcon}`,
        name: 'Behance Account',
        alt: 'link-to-our-behance-account-icon'
    },
]

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero--content">
                    <h1 className="hero--content-title">
                        <span>Delivering digital</span>
                        <span>experiences that excel</span>
                    </h1>
                    <p className="hero--content-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi libero ducimus. Modi, repellat. Rem voluptatibus repudiandae culpa vitae voluptas.</p>
                    <div className="hero--social-links">
                        {socialIcons.map(icon => (
                            <a className="svg-container" key={icon.name} href={icon.href}>
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        ))}
                    </div>
                    <div className="hero--user-guide">
                        <h4>Explore Our Work</h4>
                        <img src={ArrowDownIcon} alt="arrow-down-btn" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
