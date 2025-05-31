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
    title: "Diploma in Computer Engineering",
    sub: "Sri Jyothi Polytechnic College",
    years: "(2020 - 2023)",
    grade: "Grade: 85%",
    dataText: "DIPLOMA",
  },
  {
    image: "/images/ssc.jpg",
    title: "SSC (10th)",
    sub: "Sri Chaitanya School",
    years: "(2019 - 2020)",
    grade: "Grade: 10",
    dataText: "SSC",
  },
];

const Education: React.FC = () => (
  <EducationWrapper>
    <Glow />
    <section id="education" className="educ-section">
      <GradientHeading>Education</GradientHeading>
      <CardsContainer>
        {cards.map((card, idx) => (
          <Card data-text={card.dataText} key={idx} cardIndex={idx}>
            <CardImage>
              <img src={card.image} alt={card.dataText} />
            </CardImage>

            {/* Text block */}
            <TextBlock>
              <h2>{card.title}</h2>
              <p className="school-name">{card.sub}</p>
              <p className="years">{card.years}</p>
              <p className="grade">{card.grade}</p>
            </TextBlock>
          </Card>
        ))}
      </CardsContainer>
    </section>
  </EducationWrapper>
);

const pulse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50%      { transform: translate(-50%, -50%) scale(1.3); opacity: 0.4; }
`;

const hueRotate = keyframes`
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const EducationWrapper = styled.div`
  position: relative;
  min-height: 115vh; /* Taller on mobile to accommodate stacked cards */
  background-color: #080808;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 3rem 1rem 5rem; /* extra bottom padding on narrow screens */
  font-family: "Source Code Pro", monospace;

  @media (min-width: 769px) {
    min-height: 100vh;
    padding-bottom: 3rem;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle at center,
    rgba(128, 0, 128, 0.4),
    rgba(0, 128, 255, 0.2),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  animation: ${pulse} 6s ease-in-out infinite, ${hueRotate} 12s linear infinite;
  z-index: 0;
`;

const GradientHeading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(180deg, #d5caff 0%, #7c5fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* center on desktop */

  /* Desktop hover: fan out horizontally */
  &:hover > div:nth-child(1) {
    transform: translateX(-93%);
  }
  &:hover > div:nth-child(2) {
    transform: translateX(0);
  }
  &:hover > div:nth-child(3) {
    transform: translateX(93%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 2rem;    /* space at bottom */
    min-height: 1700px;      /* ensure vertical room for 3 stacked cards + extra padding */

    /* On mobile, when hovering any card, lift it up slightly */
    &:hover > div {
      transform: translateY(-10px) !important;
    }
  }
`;

interface CardProps {
  cardIndex: number;
}

const Card = styled.div<CardProps>`
  --size-w: 350px;
  --size-h: 450px; /* increased from 450px to 550px */
  position: absolute;
  width: var(--size-w);
  height: var(--size-h);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;

  /* ensure overlapping order */
  z-index: ${({ cardIndex }) =>
    cardIndex === 0 ? 3 : cardIndex === 1 ? 2 : 1};

  transform: ${({ cardIndex }) =>
    cardIndex === 0
      ? "translateX(-15px)"
      : cardIndex === 1
      ? "translateX(0)"
      : "translateX(15px)"};

  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
  }

  /* Mobile adjustments: stack vertically, enlarge, add extra bottom padding */
  @media (max-width: 768px) {
    position: relative;
    width: 95%;
    min-height: 450px;         /* force a taller card on mobile */
    margin: 1.5rem 0;            /* vertical spacing between cards */
    transform: none !important;
    padding-bottom: 0.1rem;      /* extra space below text */
  }

  /* Text styling adjustments: allow freer positioning */
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 1.2rem 0 0.2rem;    /* push title down, larger gap above */
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin: 1rem 0 0.6rem;
    }
  }

  p.school-name {
    color: #ddd;
    font-size: 1rem;
    margin: 0.3rem 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.4rem 0;
    }
  }

  p.years {
    color: #ddd;
    font-size: 1rem;
    margin: 0.3rem 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.4rem 0;
    }
  }

  p.grade {
    color: #ddd;
    font-size: 1rem;
    margin: 0.3rem 0 2rem;    /* extra bottom margin for spacing */
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0.4rem 0 2.5rem; /* even more space below on mobile */
    }
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.08);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.05em;
    pointer-events: none;

    @media (max-width: 768px) {
      height: 50px;
      font-size: 0.9rem;
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;   /* unchanged */
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 180px; /* slightly taller on mobile */
  }
`;

/* Wrap all text paragraphs into a flex container for easier positioning */
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export default Education;
