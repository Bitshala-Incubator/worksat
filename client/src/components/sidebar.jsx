import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
  return (
    <div>
         <div className= {`bg-white h-screen p-5 pt-8 duration-300 ${open? 'w-72' : 'w-20'} relative`}>
          <div className={`absolute -right-1 top-9 border border-black rounded-full cursor-pointer ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}> X </div>
          <Link to='/'>
          <div>Home </div>
          </Link>

          <div>Projects</div>
          <div>Discuss</div>
          <Link to='/browseDevs'>
          <div>Developers</div>
          </Link>
          <Link to='/BrowseJobs'>
          <div>Jobs</div>
          </Link>
          <div>Events</div>
          <div>Courses</div>
        </div>
    </div>
  )
}

export default Sidebar