import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar.jsx'
import AddNewProject from './Components/AddNewProject.jsx'

function App() {

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar />
      <AddNewProject />
    </main>
  )
}

export default App
