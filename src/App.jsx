import React from 'react'
import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar.jsx'
import AddNewProject from './Components/AddNewProject.jsx'
import NoProject from './Components/NoProject.jsx'

function App() {

  const [project, setProject] = useState({
    selectProject : undefined,
    project: []
  })

  const handleProject = () => {
    setProject(preState => {
      return {
        ...preState,
        selectProject : null
      }
    })
  }

  let content;
  if (project.selectProject === undefined) {
    content = <NoProject onHandleProject = {handleProject} />
  }

  else if (project.selectProject === null) {
    content = <AddNewProject />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onHandleProject = {handleProject}/>
      {content}
    </main>
  )
}

export default App
