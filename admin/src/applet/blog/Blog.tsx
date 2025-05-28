import React from 'react'
import './blog.css'
import { useDraggable } from '../../util/useDraggable'

function Blog() {
    const dragRef = useDraggable();
    return (
        <div id="blogApplet" ref={dragRef}>
            <div id="AppletBar">
                <div id="minimizeButton"></div>
                <div id="maximizeButton"></div>
                <div id="closeButton"></div>
            </div>
            <div id="blogAppletView">
                <h2>Blog Applet</h2>
                <p>This is the Blog Applet </p>
            </div>
            {/* Create a router that changes view inside applet. */}
            {/* Create a tabbed view like a browser */}
        </div>
    )
}

export default Blog