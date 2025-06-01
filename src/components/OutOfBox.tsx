import React, { useState, useEffect } from "react";
import AnimatedVerifyButton from "./AnimatedVerifyButton";
import "./styles/OutOfBox.css";

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
    <div className="outofbox-container" onMouseEnter={handleMouseEnter}>
      <h2 className="outofbox-title">Passion</h2>

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
