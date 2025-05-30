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
    <section className="educ-section">
      <GradientHeading>Education</GradientHeading>
      <CardsContainer>
        {cards.map((card, idx) => (
          <Card data-text={card.dataText} key={idx} cardIndex={idx}>
            <CardImage>
              <img src={card.image} alt={card.dataText} />
            </CardImage>
            <h2>{card.title}</h2>
            <p>{card.sub}</p>
            <p>{card.years}</p>
            <p>{card.grade}</p>
          </Card>
        ))}
      </CardsContainer>
    </section>
  </EducationWrapper>
);

const pulse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.4; }
`;

const hueRotate = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const EducationWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #080808;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 3rem 1rem;
  font-family: 'Source Code Pro', monospace;
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle at center,
    rgba(128, 0, 128, 0.4),
    rgba(0, 128, 255, 0.2),
    transparent 70%);
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
`;

const CardsContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > div:nth-child(1) {
    transform: translateX(-93%);
  }

  &:hover > div:nth-child(2) {
    transform: translateX(0);
  }

  &:hover > div:nth-child(3) {
    transform: translateX(93%);
  }
`;

interface CardProps {
  cardIndex: number;
}

const Card = styled.div<CardProps>`
  --size-w: 350px;
  --size-h: 450px;
  position: absolute;
  width: var(--size-w);
  height: var(--size-h);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
  z-index: ${({ cardIndex }) => (cardIndex === 0 ? 3 : cardIndex === 1 ? 2 : 1)};
  transform: ${({ cardIndex }) =>
    cardIndex === 0 ? "translateX(-15px)" : cardIndex === 1 ? "translateX(0)" : "translateX(15px)"};

  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
  }

  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center;
  }

  p {
    color: #ddd;
    font-size: 1rem;
    margin: 0.3rem 0;
    text-align: center;
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
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Education;
