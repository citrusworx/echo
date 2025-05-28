import {useEffect} from 'react'
import './desktop.css'
import Blog from '../../applet/blog/Blog';

function Desktop() {
  useEffect(() => {
    const desktop = document.getElementById("desktop");

    const rightClick = (e: MouseEvent) => {
      e.preventDefault();
      const oldMenu = document.getElementById('desktop-context-menu');
      if(oldMenu) oldMenu.remove();
      const div = document.createElement('div');
      const p = document.createElement('p');

      // Get Mouse location
      const getMouseX = e.clientX;
      const getMouseY = e.clientY;

      div.id = "desktop-context-menu"
      div.style.backgroundColor = 'white';
      div.style.height = '20vh';
      div.style.width = '10vw';
      div.style.position = 'absolute';
      div.style.top = `${getMouseY.toString()}px`;
      div.style.left = `${getMouseX.toString()}px`;

      p.textContent = 'Context Menu';
      p.style.cursor = 'pointer';
      p.addEventListener('click', () => {
        div?.removeChild(div);
      });

      div.appendChild(p);
      desktop?.appendChild(div);

      
    }
    const leftClickOut = (e: MouseEvent) => {
        const menu = document.getElementById('desktop-context-menu');
        if(menu && !menu.contains(e.target as Node)) menu.remove();
      }
    desktop?.addEventListener("contextmenu", rightClick);
    desktop?.addEventListener('click', leftClickOut);
  }, [])


  return (
    <div data-desktop="view" className="rastalime" id="desktop">
        <Blog />
    </div>
  )
}

export default Desktop