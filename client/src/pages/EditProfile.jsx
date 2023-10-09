import React from 'react'
import NavBar from '../components/navbar'
import { Tab, Tabs } from '../components/tabs'
import RolesAndSkills from './rolesAndSkills'
import MyProfile from './myProfile'

const EditProfile = () => {
  return (
    <div>
         <>
      <div className="mb-3 lg:mb-0">
        <NavBar />
      </div>

      <Tabs>
        <Tab label="My Profile">
          <div className="py-4">
            <MyProfile />
          </div>
        </Tab>
        <Tab label="Roles & Skills">
          <div className="py-4">
            <RolesAndSkills />
          </div>
        </Tab>
      </Tabs>


     
    </>
    </div>
    
  )
}

export default EditProfile