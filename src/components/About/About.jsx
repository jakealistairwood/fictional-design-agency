import { ArrowRightCircle } from 'react-feather';
import WaveIcon from '../../assets/img/wave.svg';
import OfficeImg from '../../assets/img/office.jpeg';

const About = () => {
    return (
        <section className="about">
            <div className="about--container">
                <div className="about--img">
                    <img src={OfficeImg} alt="indigo-office" />
                    <small>A picture of our beautiful office</small>
                </div>
                <div className="about--content">
                    <div className="about--content-header">
                        <h2>About Us</h2>
                        <img src={WaveIcon} alt="wave-design-detail" />
                    </div>
                    <div className="about--content-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis ut tristique ligula augue sit donec risus tellus enim. 
                            Elit enim suspendisse tincidunt commodo ut. Ultricies sit ac felis gravida consequat feugiat risus sed non. 
                            Aliquet elit leo platea aliquet vulputate. Erat urna eget tempus tempus, sed aenean fermentum, nullam tincidunt. 
                            Turpis posuere justo donec sed amet malesuada et. Vel enim diam, eu, risus id magna. Sed pellentesque molestie id
                            cursus dui pulvinar viverra imperdiet nulla.
                        </p>
                        <p>Et diam id sed interdum gravida amet lectus. Morbi cursus sed dictumst vitae eget ut. Molestie quam ultrices sed aenean aliquet sed elementum posuere. 
                            Tempus nulla nullam facilisis hendrerit. Arcu sapien, nibh congue id pharetra dui. Lorem nulla elit non aliquet volutpat ullamcorper massa ut dignissim.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aspernatur perspiciatis qui quidem impedit voluptates amet repellat officiis necessitatibus iure, 
                            nisi voluptatibus architecto iste sunt quam aliquid fuga atque fugiat eum non? Odio officia voluptas, saepe aspernatur earum itaque quibusdam corrupti, animi impedit consequuntur at accusantium. 
                            Quasi debitis dolorum magnam.
                        </p>
                        <a href="/about-us">
                            <h5>Read more about us</h5>
                            <ArrowRightCircle style={{
                                color: '#fff',
                                strokeWidth: '1.2px',
                                height: '35px',
                                width: '35px'
                            }} 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
