import React from 'react'

export default function AddNewProject() {
  return (
    <div>
        <div>            
            <button>Cancel</button>
            <br />
            <button>Save</button>           
        </div>
        <form action="">
            <menu>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </menu>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />
            </div>
            <div>
                <label htmlFor="date">Due Date</label>
                <input type="date" name="date" id="date" />
            </div>
        </form>
    </div>
  )
}
