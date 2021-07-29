import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {

    let callToAction = useRef(null);

    useEffect(() => {
        gsap.from(callToAction, {
            scrollTrigger: {
              trigger: callToAction
            },
            opacity: 0,
            duration: 2.5
        });
    }, []);

    return (
        <section className="contact">
            <div className="contact--callToAction" ref={el => callToAction = el}>
            <p>Feel like we can help you?</p>
            <h3 className="contact--header">Let's Talk</h3>
            <h5 className="contact--subheader">Get in touch</h5>
            </div>
        </section>
    )
}

export default Contact
