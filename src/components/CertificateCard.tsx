<<<<<<< HEAD
<<<<<<< HEAD
// CertificateCard.tsx
import React from 'react';
import styles from './styles/CertificateCard.module.css';
=======
import React from 'react';
import styles from './CertificateCard.module.css';
import Matrix from './Matrix'; // Matrix animation component
>>>>>>> ba3dc94 (second commit)
=======
// CertificateCard.tsx
import React from 'react';
import styles from './styles/CertificateCard.module.css';
>>>>>>> 56c497d (updated)
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
        {/* FRONT FACE */}
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.frontImage} />
          <div className={styles.frontTitleWrapper}>
            <span className={styles.frontTitle}>{title}</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div className={styles.cardBack}>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className={styles.animatedBlobs} />
=======
          <div className={styles.matrixWrapper}>
            <Matrix />
          </div>
>>>>>>> ba3dc94 (second commit)
=======
          <div className={styles.animatedBlobs} />
>>>>>>> 56c497d (updated)
          <div className={styles.backOverlay} />
          <div className={styles.backContent}>
            <AnimatedVerifyButton onClick={() => window.open(verifyUrl, '_blank')}>
              Verify Certificate
            </AnimatedVerifyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
