// src/components/Certifications.tsx
import React from 'react';
import CertificateCard from './CertificateCard';
import './styles/Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: 'AWS CERTIFIED CLOUD PRACTITIONER',
    imageSrc: '/images/aws.jpg',
    verifyUrl: 'https://www.credly.com/badges/0ba04224-f8da-4dd9-85c2-fb118d5535a3/public_url'
  },
  {
    id: 2,
    title: 'SALESFORCE CERTIFIED AI ASSOCIATE',
    imageSrc: '/images/salesforce.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1IFKRb6ubHytx0JCl1rRj2kmMlh7bBB7z/view?usp=drivesdk'
  },
  {
    id: 3,
    title: 'PMKVY PYTHON',
    imageSrc: '/images/Skillindia.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1IYBorft0RJA9STieZDJ9OKXcf0wEVWlZ/view?usp=drivesdk'
  }
];

const Certifications: React.FC = () => (
  <section id="certifications" className="cert-section">
    <h2 className="cert-title">Certifications</h2>
    <div className="cert-wrapper">
      {certificationsData.map(cert => (
        <CertificateCard
          key={cert.id}
          imageSrc={cert.imageSrc}
          title={cert.title}
          verifyUrl={cert.verifyUrl}
        />
      ))}
    </div>
  </section>
);

export default Certifications;
