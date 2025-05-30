import React from 'react';
import CertificateCard from './CertificateCard';
import './styles/Certifications.css';

interface Certificate {
  id: number;
  title: string;
  imageSrc: string;
  verifyUrl: string;
}

const certificationsData: Certificate[] = [
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
    verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification'
  },
  {
    id: 3,
    title: 'PYTHON CERTIFICATION',
    imageSrc: '/images/python.jpg',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/5B86A2YLC5DB'
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="cert-section">
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
};

export default Certifications;
