import React, { useEffect } from 'react';
import './dock.css';

function Dock() {
  useEffect(() => {
    const startMenu = document.getElementById('startMenu');
    const dock = document.getElementById('dock');

    const handleClick = () => {
      const div = document.createElement('div');
      const p = document.createElement('p');

      div.style.backgroundColor = 'white';
      div.style.height = '20vh';
      div.style.width = '10vw';
      div.style.position = 'absolute';
      div.style.bottom = '5vh';
      div.style.left = '0vw';

      p.textContent = 'Context Menu';
      p.style.cursor = 'pointer';
      p.addEventListener('click', () => {
        dock?.removeChild(div);
      });

      div.appendChild(p);
      dock?.appendChild(div);
    };

    startMenu?.addEventListener('click', handleClick);

    return () => {
      startMenu?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div data-dock="default" className="dock" id="dock">
      <div id="startMenu">
        <i id="startLogo">S</i>
      </div>
    </div>
  );
}

export default Dock;
