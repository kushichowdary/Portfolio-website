// src/components/CertificateCard.tsx
import React from 'react';
import styles from './styles/CertificateCard.module.css';
import AnimatedVerifyButton from './AnimatedVerifyButton';

interface CertificateCardProps {
  imageSrc: string;
  title: string;
  verifyUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ imageSrc, title, verifyUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.frontImage} />
          <div className={styles.frontTitleWrapper}>
            <span className={styles.frontTitle}>{title}</span>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.animatedBlobs}></div>
          <div className={styles.backOverlay}></div>
          <div className={styles.backContent}>
            <AnimatedVerifyButton onClick={() => window.open(verifyUrl, '_blank')}>
              VERIFY
            </AnimatedVerifyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
