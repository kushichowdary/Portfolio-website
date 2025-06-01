// src/components/Education.tsx
import React from "react";
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
  <section id="education" className="education-wrapper">
    <h2 className="gradient-heading">Education</h2>
    <div className="cards-container">
      {cards.map((card, idx) => (
        <div className="card" data-text={card.dataText} key={idx}>
          <div className="card-image">
            <img src={card.image} alt={card.dataText} />
          </div>
          <h2>{card.title}</h2>
          <p className="school-name">{card.sub}</p>
          <p className="years">{card.years}</p>
          <p className="grade">{card.grade}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
