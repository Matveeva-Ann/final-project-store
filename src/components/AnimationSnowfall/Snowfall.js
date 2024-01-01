import React, { useEffect } from 'react';
import './style.css';

const Snowfall = () => {

  useEffect(() => {
    const container = document.getElementById('snowflakes');
    for (let i = 0; i < 25; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❅';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 20 + 10}s`;
      container.appendChild(snowflake);
    }
    for (let i = 0; i < 25; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake2';
      snowflake.innerHTML = '❅';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 20 + 10}s`;
      container.appendChild(snowflake);
    }
  }, []);

  return (
    <div className='snowflakes' id="snowflakes" aria-hidden="true"></div>
  );
};

export default Snowfall;
