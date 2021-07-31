import { useRef, useEffect } from 'react';
import DribbbleIcon from '../../assets/img/dribbble.svg';
import InstagramIcon from '../../assets/img/instagram.svg';
import BehanceIcon from '../../assets/img/behance.svg';
import { ArrowDownCircle } from 'react-feather';
import { gsap } from 'gsap';

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

    let pageHeader = useRef(null);
    let pageSubheader = useRef(null);
    let icons = useRef(null);
    let userGuide = useRef(null);

    useEffect(() => {
        gsap.from(pageHeader, {
            delay: 0.25,
            duration: 1,
            opacity: 0.05,
            ease: 'back'
        });
        gsap.from(pageSubheader, {
            delay: 0.25,
            duration: 1,
            opacity: 0.05,
            ease: 'back',
            x: -20
        });
        gsap.from(icons, {
            delay: 0.25,
            duration: 1,
            opacity: 0.05,
            ease: 'back',
            y: 20
        });
        gsap.from(userGuide, {
            delay: 0.25,
            duration: 1,
            opacity: 0.05,
            ease: 'back',
            x: -20
        });
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero--content">
                    <h1 className="hero--content-title" ref={el => pageHeader = el}>
                        <span>Delivering digital</span>
                        <span>experiences that excel</span>
                    </h1>
                    <p className="hero--content-description" ref={el => pageSubheader = el}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi libero ducimus. Modi, repellat. Rem voluptatibus repudiandae culpa vitae voluptas.</p>
                    <div className="hero--social-links" ref={el => icons = el}>
                        {socialIcons.map(icon => (
                            <a className="svg-container" key={icon.name} href={icon.href}>
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        ))}
                    </div>
                    <div className="hero--user-guide" ref={el => userGuide = el}>
                        <h4>Explore Our Work</h4>
                        <ArrowDownCircle style={{
                            color: '#fff',
                            strokeWidth: '1.5px',
                            height: '25px',
                            width: '25px'
                        }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
