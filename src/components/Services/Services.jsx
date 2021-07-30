import { useRef, useEffect } from 'react';
import TriangleIcon from '../../assets/img/triangle.svg';
import CircleIcon from '../../assets/img/circle.svg';
import WaveIcon from '../../assets/img/wave.svg';
import { gsap } from 'gsap';

const Services = () => {

    let services = useRef(null);
    let details = useRef(null);

    // useEffect(() => {
    //     gsap.from(services, {
    //         duration: 1,
    //         delay: 3,
    //         opacity: 0,
    //         x: 600
    //     });
    // }, []);

    return (
        <section className="services">
            <div className="services--container" ref={el => services = el}>
                <div className="services--header">
                    <h2>Our Services</h2>
                    <div className="svg-container">
                    <img src={WaveIcon} alt="wave-design-detail" />
                    </div>
                    <div className="services--service">
                    <div className="service">
                        <h4>Strategy</h4>
                        <ul>
                            <li>Understanding your business needs and current issues.</li>
                            <li>Devising a long-term solution to help you fulfil these needs.</li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>Design</h4>
                        <ul>
                            <li>Wireframing/Prototyping</li>
                            <li>Web Development</li>
                            <li>UX/UI Design</li>
                            <li>Product Design</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>Marketing</h4>
                        <ul>
                            <li>Digital Marketing</li>
                            <li>SEO</li>
                            <li>Content Writing</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="triangle-design-detail" ref={el => details = el}>
                    <img src={TriangleIcon} alt="triangle-design-detail" />
                </div>
                <div className="circle-design-detail" ref={el => details = el}>
                    <img src={CircleIcon} alt="circle-design-detail" />
                </div>
            </div>
        </section>
    )
}

export default Services;
