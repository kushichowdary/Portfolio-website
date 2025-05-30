// src/components/CertificateCard.tsx
import React from 'react';
import AnimatedVerifyButton from './AnimatedVerifyButton';
import './styles/CertificateCard.module.css';

interface CertificateCardProps {
  imgSrc: string;
  verifyUrl: string;
}

export default function CertificateCard({ imgSrc, verifyUrl }: CertificateCardProps) {
  return (
    <div className="certificate-card">
      <img src={imgSrc} alt="Certificate" />
      <div className="verify-button-wrapper">
        <AnimatedVerifyButton onClick={() => window.open(verifyUrl, '_blank')}>
          Verify
        </AnimatedVerifyButton>
      </div>
    </div>
  );
}
