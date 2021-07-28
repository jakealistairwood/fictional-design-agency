import './App.scss';
import DribbbleIcon from './assets/img/dribbble.svg';
import InstagramIcon from './assets/img/instagram.svg';
import BehanceIcon from './assets/img/behance.svg';
import ArrowDownIcon from './assets/img/arrow-down.svg';
import ArrowRightIcon from './assets/img/arrow-right.svg';
import WaveIcon from './assets/img/wave.svg';
import TriangleIcon from './assets/img/triangle.svg';
import CircleIcon from './assets/img/circle.svg';
import OfficeImg from './assets/img/office.jpeg';
import { projects } from './projects';

const App = () => {

  console.log(projects.slice(0, 3));
  console.log(projects.slice(3));
  return (
    <main className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <a href="#">
            <h5 className="navbar--logo">19Toronto</h5>
          </a>
          <div className="navbar--menu">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero--content">
            <h1 className="hero--content-title">
              <span>Delivering digital</span>
              <span>experiences that excel</span>
            </h1>
            <p className="hero--content-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi libero ducimus. Modi, repellat. Rem voluptatibus repudiandae culpa vitae voluptas.</p>
            <div className="hero--social-links">
              <a className="svg-container" href="#">
                <img src={DribbbleIcon} alt="dribble-icon" />
              </a>
              <a className="svg-container" href="#">
                <img src={InstagramIcon} alt="instagram-icon" />
              </a>
              <a className="svg-container" href="#">
                <img src={BehanceIcon} alt="behance-icon" />
              </a>
            </div>
            <div className="hero--user-guide">
              <h4>Explore Our Work</h4>
              <img src={ArrowDownIcon} alt="arrow-down-btn" />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="portfolio">
        <div className="container">
          <div className="portfolio--left-col">
            {projects.slice(0, 3).map(project => (
              <div className="portfolio--project">
                <div className="portfolio--project-img">
                  <img src={project.img} alt={project.alt} />
                </div>
                <div className="portfolio--project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <img src={ArrowRightIcon} alt="arrow-right-btn" />
                  </div>
                  <h5 className="project--subheader"><span style={{
                    color: `${project.categoryColor}`,
                    fontWeight: '700'
                  }}>{project.category}</span> | {project.features}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio--right-col">
            {projects.slice(3).map(project => (
              <div className="portfolio--project">
                <div className="portfolio--project-img">
                  <img src={project.img} alt={project.alt} />
                </div>
                <div className="portfolio--project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <img src={ArrowRightIcon} alt="arrow-right-btn" />
                  </div>
                  <h5 className="project--subheader"><span style={{
                    color: `${project.categoryColor}`,
                    fontWeight: '700'
                  }}>{project.category}</span> | {project.features}</h5>
                </div>
              </div>
            ))}
            <a href="#">
              <h3>View More</h3>
            </a>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="services">
        <div className="services--container">
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
          <div className="triangle-design-detail">
            <img src={TriangleIcon} alt="triangle-design-detail" />
          </div>
          <div className="circle-design-detail">
            <img src={CircleIcon} alt="circle-design-detail" />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="about">
        <div className="about--container">
          <div className="about--img">
            <img src={OfficeImg} alt="picture-of-our-office" />
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
              <a href="#">
                <h5>Read more about us</h5>
                <img src={ArrowRightIcon} alt="arrow-right-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="contact">
        <div className="contact--callToAction">
          <p>Feel like we can help you?</p>
          <h3 className="contact--header">Let's Talk</h3>
          <h5 className="contact--subheader">Get in touch</h5>
        </div>
      </section>
      {/* footer */}
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
    </main>
  )
}

export default App
