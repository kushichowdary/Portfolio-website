// src/components/OutOfBox.tsx
import React, { useEffect, useRef } from 'react';
import './styles/OutOfBox.css';
import CertificateCard from './CertificateCard';
import AnimatedVerifyButton from './AnimatedVerifyButton';

const certificateImages = [
  { imgSrc: '/cert1.png', verifyUrl: 'https://verify1.com' },
  { imgSrc: '/cert2.png', verifyUrl: 'https://verify2.com' },
  { imgSrc: '/cert3.png', verifyUrl: 'https://verify3.com' },
];

export default function OutOfBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  let timeout: number; // ✅ DOM type

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const pauseOnHover = () => {
      el.querySelectorAll('.marquee-track').forEach(track => {
        (track as HTMLElement).style.animationPlayState = 'paused';
      });
    };

    const resumeOnLeave = () => {
      el.querySelectorAll('.marquee-track').forEach(track => {
        (track as HTMLElement).style.animationPlayState = 'running';
      });
    };

    el.addEventListener('mouseenter', pauseOnHover);
    el.addEventListener('mouseleave', resumeOnLeave);

    return () => {
      el.removeEventListener('mouseenter', pauseOnHover);
      el.removeEventListener('mouseleave', resumeOnLeave);
    };
  }, []);

  return (
    <div className="outofbox-container" ref={containerRef}>
      <h2 className="outofbox-title">Verified Certifications</h2>
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left">
          {certificateImages.map((cert, index) => (
            <CertificateCard key={index} imgSrc={cert.imgSrc} verifyUrl={cert.verifyUrl} />
          ))}
        </div>
        <div className="marquee-blur left-blur" />
        <div className="marquee-blur right-blur" />
      </div>

      <div className="verify-button-wrapper">
        <AnimatedVerifyButton onClick={() => alert('Verification clicked!')}>
          Verify All
        </AnimatedVerifyButton>
      </div>
    </div>
  );
}
