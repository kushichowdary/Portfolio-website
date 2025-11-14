// src/components/Navbar.tsx

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    // 1) Initialize ScrollSmoother
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    // 2) Link-click scrolling
    const links = document.querySelectorAll(".header ul a, .navbar-connect");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });

    // 3) “HIRE ME” button pulse animation
    gsap.fromTo(
      ".navbar-connect",
      { scale: 1 },
      {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.5,
      }
    );

    // 4) Hide-on-scroll behavior
    let lastScrollTop = 0;
    const header = document.querySelector(".header") as HTMLElement;

    const scrollTriggerInstance = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollTop = self.scroll();
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // User is scrolling down past 100px → hide navbar
          header.classList.add("nav-hidden");
        } else {
          // User is scrolling up → show navbar
          header.classList.remove("nav-hidden");
        }
        lastScrollTop = scrollTop;
      },
    });

    // 5) Refresh ScrollSmoother on window resize
    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      links.forEach((elem) => {
        (elem as HTMLAnchorElement).removeEventListener("click", () => {});
      });
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Kushi
        </a>
        <a
          href="mailto:gearhead6699@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          HIRE ME
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
