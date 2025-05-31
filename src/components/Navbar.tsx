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
      smooth: 1.2,        // Lower = snappier, Higher = more momentum
      smoothTouch: 0.8,   // Touch devices feel smoother
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    // REMOVED: smoother.paused(true) – we want the smoother to run continuously

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

    // 3) “HIRE ME” button pulse animation (once smoother is ready)
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

    // 4) Hide-on-scroll behavior using GSAP’s scroll position
    let lastScrollTop = 0;
    const headerEl = document.querySelector(".header") as HTMLElement;

    const scrollTriggerInstance = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollTop = smoother.scrollTop(); // use smoother's scrollTop
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          headerEl.classList.add("nav-hidden");
        } else {
          headerEl.classList.remove("nav-hidden");
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
        const anchor = elem as HTMLAnchorElement;
        anchor.removeEventListener("click", () => {});
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
