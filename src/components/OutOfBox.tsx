import React, { useState, useEffect } from "react";
import AnimatedVerifyButton from "./AnimatedVerifyButton";
import "./styles/OutOfBox.css";

const imageUrls = [
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/15.jpg",
  "/images/17.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/23.jpg",
  "/images/25.jpg",
  "/images/26.jpg",
  "/images/27.jpg",
  "/images/28.jpg",
];

const terminalLines = [
  { prompt: "guest@termux:", command: "cd /passion/photography/explore@lens" },
  { prompt: "explore@lens:~$", command: 'passion = "Capturing moments."' },
  {
    prompt: "explore@lens:~$",
    command: 'style = "Landscape | Product | Street | Nature"',
  },
  {
    prompt: "explore@lens:~$",
    command: 'status = "Always chasing the perfect frame..."',
  },
];

const OutOfBox: React.FC = () => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (typing && index < terminalLines.length) {
      const { command } = terminalLines[index];
      if (currentText.length < command.length) {
        timeoutId = window.setTimeout(() => {
          setCurrentText(command.slice(0, currentText.length + 1));
        }, 40);
      } else {
        timeoutId = window.setTimeout(() => {
          setDisplayed((prev) => [...prev, currentText]);
          setCurrentText("");
          setIndex((i) => i + 1);
        }, 600);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [typing, currentText, index]);

  const handleMouseEnter = () => {
    if (!typing) setTyping(true);
  };

  return (
    <div className="outofbox-container">
      <h2 className="outofbox-title">Passion</h2>

      <div className="marquee-wrapper" onMouseEnter={handleMouseEnter}>
        <div className="marquee-blur left-blur" />
        <div className="marquee-blur right-blur" />

        <div className="marquee-track marquee-left">
          {[...imageUrls, ...imageUrls].map((url, idx) => (
            <div className="marquee-card" key={`left-${idx}`}>
              <img src={url} alt={`img-${idx}`} />
            </div>
          ))}
        </div>

        <div className="marquee-track marquee-right">
          {[...imageUrls, ...imageUrls].map((url, idx) => (
            <div className="marquee-card" key={`right-${idx}`}>
              <img src={url} alt={`img-${idx}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="termux-box">
        <div className="termux-header">
          <div className="termux-dot red" />
          <div className="termux-dot yellow" />
          <div className="termux-dot green" />
          <span className="termux-title">Terminal</span>
        </div>

        <div className="termux-body">
          {displayed.map((cmd, i) => (
            <div className="termux-line" key={i}>
              <span className="prompt">{terminalLines[i].prompt}</span>
              <span className={`color-${i % 5}`}>{cmd}</span>
            </div>
          ))}
          {index < terminalLines.length && (
            <div className="termux-line">
              <span className="prompt">{terminalLines[index].prompt}</span>
              <span className={`color-${index % 5} typing`}>
                {currentText}
              </span>
            </div>
          )}
          {index >= terminalLines.length && (
            <>
              <div className="glitch">_</div>
              <div className="verify-button-wrapper">
                <a
                  href="https://www.instagram.com/_explore_lens_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedVerifyButton onClick={() => {}}>
                    Verify
                  </AnimatedVerifyButton>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutOfBox;
