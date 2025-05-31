import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar: React.FC = () => {
  useEffect(() => {
    // 1) Initialize ScrollSmoother with more responsive settings
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.8,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);

    // 2) Link-click scrolling
    const links = document.querySelectorAll(".header ul a, .navbar-connect");
    links.forEach((elem) => {
      const anchor = elem as HTMLAnchorElement;
      anchor.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const targetSection = anchor.getAttribute("data-href");
          if (targetSection) {
            smoother.scrollTo(targetSection, true, "top top");
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
        delay: 0.5,
      }
    );

    // 4) Hide-on-scroll behavior using GSAP scroll position
    let lastScrollTop = 0;
    const headerEl = document.querySelector(".header") as HTMLElement;

    const scrollTriggerInstance = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: () => {
        const scrollTop = smoother.scrollTop();
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          headerEl.classList.add("nav-hidden");
        } else {
          headerEl.classList.remove("nav-hidden");
        }
        lastScrollTop = scrollTop;
      },
    });

    // 5) Refresh on resize
    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      links.forEach((elem) => {
        const anchor = elem as HTMLAnchorElement;
        anchor.replaceWith(anchor.cloneNode(true) as HTMLAnchorElement); // remove all listeners
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
          href="#contact"
          className="navbar-connect"
          data-href="#contact"
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
