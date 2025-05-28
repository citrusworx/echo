import React from 'react'
import './topbar.css';

function Topbar() {
  return (
    <div data-top-dock="default" className="dock-top">
      <div id="adminApps">
        <i className="fa-solid fa-download"></i>
      </div>
      <div id="settings">
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  )
}

export default Topbar
