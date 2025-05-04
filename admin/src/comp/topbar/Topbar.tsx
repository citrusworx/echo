import React from 'react';

interface TopbarConfig {
    style?: React.CSSProperties; // Accepts style as an object now
    title: string;
    url: string;
    links: string[];
}

const Topbar: React.FC<TopbarConfig> = ({ style, title, url, links }) => {
  return (
    <header style={style}>
      <h2>{title}</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`${url}${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
