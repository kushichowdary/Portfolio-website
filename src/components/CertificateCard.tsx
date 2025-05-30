import React from 'react';
import styles from './styles/CertificateCard.module.css';

interface CertificateCardProps {
  title: string;
  imageSrc: string;
  verifyUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, imageSrc, verifyUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={imageSrc} alt={title} className={styles.image} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.back}>
          <div className={styles.abstractWrapper}>

          </div>
          <a href={verifyUrl} className={styles.verifyButton} target="_blank" rel="noopener noreferrer">
            Verify Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;