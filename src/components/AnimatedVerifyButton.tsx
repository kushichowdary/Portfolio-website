import React from 'react';
import styled from 'styled-components';
import './styles/AnimatedVerifyButton.css';

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, children }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <span className="bracket">❴</span>
        <span className="text">{children}</span>
        <span className="bracket">❵</span>
      </button>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 12px;
    background-color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(182, 104, 255, 0.6),
                0 0 20px rgba(182, 104, 255, 0.4),
                0 0 30px rgba(182, 104, 255, 0.2);
  }

  .bracket {
    font-size: 22px;
    transition: all 0.3s ease;
    color: rgb(182, 104, 255);
  }

  .text {
    font-size: 18px;
    width: 0;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
    color: white;
    white-space: nowrap;
  }

  .button:hover {
    width: 140px;
    box-shadow: 0 0 15px rgba(182, 104, 255, 0.8),
                0 0 25px rgba(182, 104, 255, 0.6),
                0 0 35px rgba(182, 104, 255, 0.4);
  }

  .button:hover .text {
    transform: scale(1);
    width: auto;
    opacity: 1;
    margin: 0 6px;
  }
`;

export default AnimatedButton;
