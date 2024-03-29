import React, { useEffect } from 'react';
import './style.css';

const Snowfall = () => {

  useEffect(() => {
    const container = document.getElementById('snowflakes');
    const content = '❅';

    for (let i = 0; i < 8; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = content;
      snowflake.style.fontSize = '23px';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 30 + 18}s`;
      container.appendChild(snowflake);
    }
    for (let i = 0; i < 8; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake2';
      snowflake.innerHTML = content;
      snowflake.style.fontSize = '23px';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 30 + 18}s`;
      container.appendChild(snowflake);
    }
    for (let i = 0; i < 5; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = content;
      snowflake.style.fontSize = '18px';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 30 + 18}s`;
      container.appendChild(snowflake);
    }
    for (let i = 0; i < 5; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake2';
      snowflake.innerHTML = content;
      snowflake.style.fontSize = '18px';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 30 + 18}s`;
      container.appendChild(snowflake);
    }
  }, []);

  return (
    <div className='snowflakes' id="snowflakes" aria-hidden="true"></div>
  );
};

export default Snowfall;
