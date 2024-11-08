import React, { useEffect } from 'react';
import './BreathingSection.css';

const BreathingSection = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    function breathAnimation() {
      text.innerText = 'Breathe In!';
      container.className = 'container grow';

      setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
          text.innerText = 'Breathe Out!';
          container.className = 'container shrink';
        }, holdTime);
      }, breatheTime);
    }

    breathAnimation();
    const interval = setInterval(breathAnimation, totalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="breathing-section">
      <div id="container" className="container">
        <div className="circle"></div>
        <div className="gradient-circle"></div>
        <div className="pointer-container">
          <span className="pointer"></span>
        </div>
      </div>
      <p id="text">Breathe In!</p>
    </div>
  );
};

export default BreathingSection;
