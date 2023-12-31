import React, { useEffect } from 'react';
import './style.css';

const Snowfall = () => {
  useEffect(() => {
    const container = document.querySelector('.snowflakes');

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❅';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 10 + 9}s`;
      container.appendChild(snowflake);
    }
  }, []);

  return (
    <div className="snowflakes" aria-hidden="true"></div>
  );
};

export default Snowfall;
