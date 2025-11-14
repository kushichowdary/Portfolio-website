import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
    name: "PORTFOLIO",
    category: "website",
    tools: "TypeScript, CSS, React",
    image: "/images/portfolio.png",
    link: "https://github.com/kushichowdary/Portfolio",
  },
  {
    name: "JARVIS",
    category: "Full Stack",
    tools: "React, TypeScript, CSS, HTML, Firebase",
    image: "/images/jarvis.png",
    link: "https://aiorb.netlify.app",
  },
  {
    name: "LEVEL UP",
    category: "Full Stack",
    tools: "React, TypeScript, CSS, HTML, Firebase",
    image: "/images/levelup.png",
    link: "https://sololevelingup.netlify.app",
  },
    {
    name: "PORTVERSE",
    category: "Full Stack",
    tools: "React, TypeScript, CSS, HTML, Firebase",
    image: "/images/portverse.png",
    link: "https://portverse.netlify.app",
  },
  {
    name: "HOTELEX",
    category: "Full Stack",
    tools: "React, JavaScript, CSS, HTML, Mongodb",
    image: "/images/hotelix.png",
    link: "https://github.com/Naveen14321432/MERN-Hotel-Booking",
  },
  {
    name: "BALANCEBYTES",
    category: "Full stack",
    tools: "React, JavaScript, CSS, HTML",
    image: "/images/bytes.png",
    link: "https://github.com/saikrishna22000/backend-balancebytes",
  },
  {
    name: "Project D",
    category: "Coming Soon...",
    tools: "JavaScript, React, CSS, HTML",
    image: "/images/soon.jpg",
    link: "https://link-to-project-d.com",
  },
];

const Work = () => {
  useEffect(() => {
    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const boxRect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) || 0;

      const translateX = boxRect.width * boxes.length - (rectLeft + parentWidth) + padding;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        duration: 40,
        delay: 0.2,
      });
    };

    setTranslateX();
    window.addEventListener("resize", setTranslateX);
    return () => {
      window.removeEventListener("resize", setTranslateX);
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-image">
                <WorkImage image={project.image} alt={project.name} />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link">
                  🔗
                </a>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-btn"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
