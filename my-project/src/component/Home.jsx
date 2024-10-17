import React, { useState, useRef, useEffect } from 'react';
import "./Home.css";

const Home = () => {
  const [message, setMessage] = useState('Do you love me?');
  const wrapperRef = useRef(null);
  const noBtnRef = useRef(null);

  const handleYesClick = () => {
    setMessage('I Love You Too :)');
  };

  const handleNoHover = () => {
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const noBtnRect = noBtnRef.current.getBoundingClientRect();

    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

    noBtnRef.current.style.left = `${i}px`;
    noBtnRef.current.style.top = `${j}px`;
  };

  useEffect(() => {
    const noBtn = noBtnRef.current;

    noBtn.addEventListener('mouseover', handleNoHover); // For desktop hover
    noBtn.addEventListener('touchstart', handleNoHover); // For mobile touch

    return () => {
      noBtn.removeEventListener('mouseover', handleNoHover);
      noBtn.removeEventListener('touchstart', handleNoHover);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (noBtnRef.current) {
        handleNoHover();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="wrapper" ref={wrapperRef} style={{ position: 'relative', height: '480px', width: '300px', border: '1px solid black' }}>
        <p className="question" style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>{message}</p>
        <button className="yes-btn" onClick={handleYesClick} style={{ display: 'block', margin: '0 auto', width: '60px', height: '30px', fontSize: '12px' }}>Yes</button>
        <button
          className="no-btn"
          ref={noBtnRef}
          style={{ width: '60px', height: '30px', fontSize: '12px', position: 'absolute' }}
        >
          No
        </button>
      </div>

      
      <footer className="footer">
       
      </footer>
    </>
  );
};

export default Home;
