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
      div.style.height = '10vh';
      div.style.width = '4vw';
      div.style.position = 'absolute';
      div.style.bottom = '5vh';
      div.style.left = '5vw';

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
        S
      </div>
    </div>
  );
}

export default Dock;
