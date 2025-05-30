// src/components/Certifications.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'AWS CERTIFIED CLOUD PRACTITIONER',
    imageSrc: '/images/aws.jpg',
    verifyUrl: 'https://www.credly.com/badges/0ba04224-f8da-4dd9-85c2-fb118d5535a3/public_url'
=======
    title: 'AWS Certified Cloud Practitioner',
    imageSrc: '/images/Screenshot 2025-05-27 201258.png',
    verifyUrl: 'https://www.certmetrics.com/amazon/verify/AWS'
>>>>>>> ba3dc94 (second commit)
=======
    title: 'AWS CERTIFIED CLOUD PRACTITIONER',
    imageSrc: '/images/aws.jpg',
    verifyUrl: 'https://www.credly.com/badges/0ba04224-f8da-4dd9-85c2-fb118d5535a3/public_url'
>>>>>>> 56c497d (updated)
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
    verifyUrl: 'https://admin.skillindiadigital.gov.in/documentverificationbyQR?content=P0NhbmRpZGF0ZSBOYW1lID0gS29sbGlwYXJhIGt1c2h3YW50aCBzYWkgY2hvd2RhcnkmJkNhbmRpZGF0ZSBJRCA9IENBTl8yODA0NTgxMSYmU2VjdG9yIE5hbWUgPSBJVC1JVGVTJiZRUCBOYW1lID0gU29mdHdhcmUgUHJvZ3JhbW1lciYmUVAgQ29kZSA9IFNTQy9RMDUxMC1TSTAwMiYmR3JhZGUgPSBCJiZDYW5kaWRhdGUvQXBwbGljYW50IHR5cGUgPSBDYW5kaWRhdGUmJkRvY3VtZW50IElEID0gUFEwQ1RQTlZUMzRHVjJNQyYmRG9jdW1lbnQgPSBjZXJ0aWZpY2F0ZSYmSXNzdWFuY2UgRGF0ZSA9IDA4LzA4LzIwMjQ%3D'
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
