import React from 'react'
import Topbar from '../comp/topbar/Topbar'

function Dashboard() {
  return (
    <div>
      <div>
        Hello
      </div>
      <Topbar
        style={{ height: '40px', width: '100%', backgroundColor: '#CDCDCD' }}
        title="Home"
        links={["Home", "Blog"]}
        url="/"
        />
    </div>
  )
}

export default Dashboard