<<<<<<< HEAD
<<<<<<< HEAD
// src/components/Education.tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import "./styles/Education.css";

const cards = [
  {
    image: "/images/engineering.jpg",
    title: "BTech in Computer Science and Engineering",
    sub: "KL University",
    years: "(2023 - 2026)",
    grade: "Grade: 9.1 CGPA",
    dataText: "ENGINEERING",
  },
  {
    image: "/images/diploma.jpg",
    title: "Diploma in Computer Engineering (12th)",
    sub: "Sri Jyothi Polytechnic College",
    years: "(2020 - 2023)",
    grade: "Grade: 85%",
    dataText: "DIPLOMA",
  },
  {
    image: "/images/ssc.jpg",
    title: "SSC (10th)",
    sub: "Sri Chaitanya Techno School",
    years: "(2019 - 2020)",
    grade: "Grade: 10",
    dataText: "SSC",
  },
];

const Education: React.FC = () => (
  <div className="education-wrapper">
    <div className="glow" />
    <section className="educ-section">
      <h2 className="gradient-heading">Education</h2>
      <div className="cards-container">
        {cards.map((card, idx) => (
          <div className="card" data-text={card.dataText} key={idx}>
            <div className="card-image">
              <img src={card.image} alt={card.dataText} />
            </div>
            <h2>{card.title}</h2>
            <p>{card.sub}</p>
            <p>{card.years}</p>
            <p>{card.grade}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
=======
=======
// src/components/Education.tsx
>>>>>>> 56c497d (updated)
import React from "react";
import styled, { keyframes } from "styled-components";
import "./styles/Education.css";

const cards = [
  {
    image: "/images/engineering.jpg",
    title: "BTech in Computer Science and Engineering",
    sub: "KL University",
    years: "(2023 - 2026)",
    grade: "Grade: 9.1 CGPA",
    dataText: "ENGINEERING",
  },
  {
    image: "/images/diploma.jpg",
    title: "Diploma in Computer Engineering (12th)",
    sub: "Sri Jyothi Polytechnic College",
    years: "(2020 - 2023)",
    grade: "Grade: 85%",
    dataText: "DIPLOMA",
  },
  {
    image: "/images/ssc.jpg",
    title: "SSC (10th)",
    sub: "Sri Chaitanya Techno School",
    years: "(2019 - 2020)",
    grade: "Grade: 10",
    dataText: "SSC",
  },
];

const Education: React.FC = () => (
  <div className="education-wrapper">
    <div className="glow" />
    <section className="educ-section">
      <h2 className="gradient-heading">Education</h2>
      <div className="cards-container">
        {cards.map((card, idx) => (
          <div className="card" data-text={card.dataText} key={idx}>
            <div className="card-image">
              <img src={card.image} alt={card.dataText} />
            </div>
            <h2>{card.title}</h2>
            <p>{card.sub}</p>
            <p>{card.years}</p>
            <p>{card.grade}</p>
          </div>
<<<<<<< HEAD
          <div className="card" data-text="Diploma in Computer Engineering">
            <h2>Diploma in Computer Engineering</h2>
            <p>Sri Jyothi Polytechnic College (2020 - 2023)</p>
          </div>
          <div className="card" data-text="SSC">
            <h2>SSC</h2>
            <p>Sri Chaitanya School (2019 - 2020)</p>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};
>>>>>>> ba3dc94 (second commit)
=======
        ))}
      </div>
    </section>
  </div>
);
>>>>>>> 56c497d (updated)

export default Education;

const pulse = keyframes`
<<<<<<< HEAD
<<<<<<< HEAD
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
=======
  0%   { transform: translate(-50%, -50%) scale(1);  opacity: 0.6; }
  50%  { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1);  opacity: 0.6; }
>>>>>>> ba3dc94 (second commit)
=======
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
>>>>>>> 56c497d (updated)
`;

const glowMove = keyframes`
  from { filter: blur(50px) hue-rotate(0deg); }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 56c497d (updated)
  to { filter: blur(80px) hue-rotate(360deg); }
`;

const gradientGlow = keyframes`
  0% {
    background-position: 0% 50%;
    text-shadow: 0 0 10px #ac4ef0, 0 0 20px #ac4ef0, 0 0 30px #ac4ef0, 0 0 40px #ac4ef0;
  }
  50% {
    background-position: 100% 50%;
    text-shadow: 0 0 10px #1e0a6f, 0 0 20px #1e0a6f, 0 0 30px #1e0a6f, 0 0 40px #1e0a6f;
  }
  100% {
    background-position: 0% 50%;
    text-shadow: 0 0 10px #ac4ef0, 0 0 20px #ac4ef0, 0 0 30px #ac4ef0, 0 0 40px #ac4ef0;
  }
`;

const GlowHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(270deg, #e0b0ff, #6a0dad);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientGlow} 5s ease infinite;
  text-align: center;
  margin: 20px 0;
  padding: 1rem 0;
<<<<<<< HEAD
=======
  to   { filter: blur(80px) hue-rotate(360deg); }
>>>>>>> ba3dc94 (second commit)
=======
>>>>>>> 56c497d (updated)
`;

const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #080808;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

<<<<<<< HEAD
<<<<<<< HEAD
  .cards-container {
    position: relative;
    width: 1000px;  /* Increased container width */
    height: 500px;   /* Increased height for larger cards */
=======
  .educ-title {
    color: #fff;
    font-size: 2.5rem;
    margin: 20px 0;
    text-align: center;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
                 0 0 20px rgba(255, 255, 255, 0.6), 
                 0 0 30px rgba(255, 0, 255, 0.5);
  }

  .cards-container {
    position: relative;
    width: 300px;
    height: 350px;
>>>>>>> ba3dc94 (second commit)
=======
  .cards-container {
    position: relative;
    width: 1000px;  /* Increased container width */
    height: 500px;   /* Increased height for larger cards */
>>>>>>> 56c497d (updated)
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

<<<<<<< HEAD
<<<<<<< HEAD
    &:hover .card:nth-child(1) { transform: translateX(-90%); }
    &:hover .card:nth-child(2) { transform: translateX(0); }
    &:hover .card:nth-child(3) { transform: translateX(90%); }
  }

  .card {
    --size-w: 350px;  /* Increased width */
    --size-h: 450px;  /* Increased height */
    position: absolute;
    width: var(--size-w);
    height: var(--size-h);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
=======
    &:hover .card {
      /* on hover container, spread cards */
      &:nth-child(1) { transform: translateX(-180%); }
      &:nth-child(2) { transform: translateX(0); }
      &:nth-child(3) { transform: translateX(180%); }
    }
=======
    &:hover .card:nth-child(1) { transform: translateX(-90%); }
    &:hover .card:nth-child(2) { transform: translateX(0); }
    &:hover .card:nth-child(3) { transform: translateX(90%); }
>>>>>>> 56c497d (updated)
  }

  .card {
    --size-w: 350px;  /* Increased width */
    --size-h: 450px;  /* Increased height */
    position: absolute;
    width: var(--size-w);
    height: var(--size-h);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
<<<<<<< HEAD
    box-shadow: 0 15px 30px rgba(0,0,0,0.6);
>>>>>>> ba3dc94 (second commit)
=======
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
>>>>>>> 56c497d (updated)
    border-radius: 24px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    cursor: pointer;

<<<<<<< HEAD
<<<<<<< HEAD
    &:nth-child(1) { z-index: 3; transform: translateX(-10px); }
    &:nth-child(2) { z-index: 2; transform: translateX(0); }
    &:nth-child(3) { z-index: 1; transform: translateX(10px); }

    &:hover {
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.8);
=======
    &:nth-child(1) { z-index: 3; transform: translateX(-20px); }
    &:nth-child(2) { z-index: 2; }
    &:nth-child(3) { z-index: 1; transform: translateX(20px); }

    &:hover {
      box-shadow: 0 25px 45px rgba(0,0,0,0.8);
>>>>>>> ba3dc94 (second commit)
=======
    &:nth-child(1) { z-index: 3; transform: translateX(-10px); }
    &:nth-child(2) { z-index: 2; transform: translateX(0); }
    &:nth-child(3) { z-index: 1; transform: translateX(10px); }

    &:hover {
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.8);
>>>>>>> 56c497d (updated)
    }

    h2 {
      color: #fff;
<<<<<<< HEAD
<<<<<<< HEAD
      font-size: 1.5rem;  /* Increased font size */
=======
      font-size: 1.4rem;
>>>>>>> ba3dc94 (second commit)
=======
      font-size: 1.5rem;  /* Increased font size */
>>>>>>> 56c497d (updated)
      margin-bottom: 0.6rem;
      text-align: center;
    }

    p {
      color: #ddd;
<<<<<<< HEAD
<<<<<<< HEAD
      font-size: 1rem;  /* Increased font size */
=======
      font-size: 0.95rem;
>>>>>>> ba3dc94 (second commit)
=======
      font-size: 1rem;  /* Increased font size */
>>>>>>> 56c497d (updated)
      text-align: center;
    }

    &::before {
      content: attr(data-text);
      position: absolute;
      bottom: 0;
      width: 100%;
<<<<<<< HEAD
<<<<<<< HEAD
      background: rgba(255, 255, 255, 0.08);
      height: 60px;
=======
      background: rgba(255,255,255,0.08);
      height: 50px;
>>>>>>> ba3dc94 (second commit)
=======
      background: rgba(255, 255, 255, 0.08);
      height: 60px;
>>>>>>> 56c497d (updated)
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.05em;
      pointer-events: none;
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

  .labels {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    z-index: 5;

    span {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s;
      &:hover { color: #a855f7; }
    }
  }
>>>>>>> ba3dc94 (second commit)
=======
>>>>>>> 56c497d (updated)
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
<<<<<<< HEAD
<<<<<<< HEAD
  width: 900px;  /* Increased glow size */
  height: 900px;  /* Increased glow size */
  background: radial-gradient(circle at center,
    rgba(128, 0, 128, 0.4),
    rgba(0, 128, 255, 0.2),
=======
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at center,
    rgba(128,0,128,0.4),
    rgba(0,128,255,0.2),
>>>>>>> ba3dc94 (second commit)
=======
  width: 900px;  /* Increased glow size */
  height: 900px;  /* Increased glow size */
  background: radial-gradient(circle at center,
    rgba(128, 0, 128, 0.4),
    rgba(0, 128, 255, 0.2),
>>>>>>> 56c497d (updated)
    transparent 70%);
  transform: translate(-50%, -50%);
  animation: ${pulse} 6s ease-in-out infinite, ${glowMove} 12s linear infinite;
  z-index: 0;
`;
