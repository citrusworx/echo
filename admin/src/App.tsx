import React from 'react'
import Dashboard from './pages/Dashboard'
import './css/base.css';
import Topbar from './comp/topbar/Topbar';
import Desktop from './comp/desktop/Desktop';
import Dock from './comp/dock/Dock';

function App() {
  return (
    <div data-desktop="default" className="desktop">
    <Topbar />
      {/* Desktop 
        1. This is where the applet windows will mount to.
        2. They should be able to be dragged around the desktop, be resized, be minimized, and be exited out from
        3. Every action should mimic an OS operation
      */}
      <Desktop />
      {/* Dock 
      This is where user login, applet access, and other OS-like functionality takes place.
      */}
      <Dock />
    </div>
  )
}

export default App