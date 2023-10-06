import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";


const Sidebar = () => {
    const [open, setOpen] = useState(true)
  return (
    <div>
         <div className= {`bg-white rounded-xl h-screen p-5 pt-8 duration-300 ${open? 'w-72' : 'w-20'} relative`}>
          <div className={`absolute -right-3 top-9 border border-black rounded-full cursor-pointer ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}> <AiOutlineArrowLeft size={25} /> </div>
          <Link to='/'>
          <div className='mx-5 my-4 font-semibold'>⚡️ Home </div>
          </Link>

          <div className='mx-5 my-4 font-semibold'>🚀 Projects</div>
          <div className='mx-5 my-4 font-semibold'>💬 Discussions</div>
          <Link to='/browseDevs'>
          <div className='mx-5 my-4 font-semibold'>Developers</div>
          </Link>
          <Link to='/BrowseJobs'>
          <div className='mx-5 my-4 font-semibold'>🎯 Bounties & Jobs</div>
          </Link>
          <div className='mx-5 my-4 font-semibold'>🗓 Events</div>
          <div className='mx-5 my-4 font-semibold'>🗓 🎙 Podcasts</div>
          <div className='mx-5 my-4 font-semibold'>🎓 Courses</div>
        </div>
    </div>
  )
}

export default Sidebar