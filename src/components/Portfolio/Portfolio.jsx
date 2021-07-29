import { useRef, useEffect } from "react";
import { projects } from '../../projects';
import ArrowRightIcon from '../../assets/img/arrow-right.svg';
import { gsap } from 'gsap';

const Portfolio = () => {

    let leftProjects = useRef(null);
    let rightProjects = useRef(null);

    useEffect(() => {
        gsap.from(leftProjects, {
          scrollTrigger: {
            trigger: leftProjects,
            // start: 'top top'
          },
          y: 100,
          opacity: 0,
          delay: 1,
          duration: 1,
          stagger: 0.2
        });
        gsap.from(rightProjects, {
          scrollTrigger: {
            trigger: rightProjects,
            // start: 'top top'
          },
          y: 200,
          opacity: 0,
          delay: 1.2,
          duration: 1.2,
        });
    }, []);

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio--left-col" ref={el => (leftProjects = el)}>
                    {projects.slice(0, 3).map(project => (
                    <div className="portfolio--project" key={project.title}>
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
                <div className="portfolio--right-col" ref={el => (rightProjects = el)}>
                    {projects.slice(3).map(project => (
                    <div className="portfolio--project" key={project.title}>
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
    )
}

export default Portfolio;
