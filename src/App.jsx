import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar.jsx'
import AddNewProject from './Components/AddNewProject.jsx'
import NoProject from './Components/NoProject.jsx'

function App() {

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar />
      <NoProject />
    </main>
  )
}

export default App
