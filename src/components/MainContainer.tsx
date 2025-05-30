import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Certifications from "./Certifications";
import setSplitText from "./utils/splitText";
import Education from "./Education";
<<<<<<< HEAD
<<<<<<< HEAD
import OutOfBox from "./OutOfBox";
//import EndingText from "./EndingText.css";
=======

>>>>>>> ba3dc94 (second commit)
=======
import OutOfBox from "./OutOfBox";
//import EndingText from "./EndingText.css";
>>>>>>> 56c497d (updated)
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth > 1024 : true
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Certifications />
            <Education />

            {/* TechStack Section with Gridlines underlay */}
            <div className="relative z-0">
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none"></div>
=======
              <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
              </div>
>>>>>>> ba3dc94 (second commit)
=======
              <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none"></div>
>>>>>>> 56c497d (updated)
              {isDesktopView && (
                <Suspense fallback={<div>Loading....</div>}>
                  <TechStack />
                </Suspense>
              )}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <OutOfBox />
            
=======
>>>>>>> ba3dc94 (second commit)
=======
            <OutOfBox />
            
>>>>>>> 56c497d (updated)

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
