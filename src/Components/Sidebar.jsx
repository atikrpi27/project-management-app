import React from 'react'
import Button from './Button'

export default function Sidebar({ onHandleProject, projects }) {
  return (
    <div className='w-1/3 h-full px-8 pt-10 bg-stone-900 text-stone-50 md:w-1/5 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
        <Button onClick={onHandleProject}> + Add Project  </Button>
        <ul className='mt-6'>
          {projects.map((project) => (<li key={project.id} className='w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800 '>
            <button> {project.title} </button>
          </li>))}
        </ul>
    </div>
  )
}
