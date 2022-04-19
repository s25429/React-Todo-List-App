import { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'


const TaskForm = ({ task, onAdd, onEdit, onFinished }) => {
  const [title,     setTitle] =     useState(task?.title     || '')
  const [details,   setDetails] =   useState(task?.details   || '')
  const [date,      setDate] =      useState(task?.date      || '')
  const [time,      setTime] =      useState(task?.time      || '')
  const [important, setImportant] = useState(task?.important || false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (task === undefined) {
      onAdd({ title, details, date, time, important })
      setTitle('')
      setDetails('')
      setDate('')
      setTime('')
      setImportant(false)
    } else {
      onEdit({ id: task.id, title, details, date, time, important })
      onFinished()
    }
  }

  return (
    <form className="form-task btn-border-dark" onSubmit={onSubmit}>
      <button className="form-quit" onClick={() => onFinished()}>
        <FaRegWindowClose />
      </button>

      <h4>{task === undefined ? 'Create a Task' : 'Edit your Task'}</h4>

      <div className="form-input">
        <label htmlFor="title">Title</label>
        <input 
          className='btn btn-light btn-border-dark' 
          type="text" 
          name="title" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>

      <div className="form-input">
        <label htmlFor="details">Details</label>
        <textarea 
          className='btn btn-light btn-border-dark' 
          name="details" 
          id="details" 
          cols="30" 
          rows="10" 
          value={details} 
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>

      <div className="form-input">
        <label htmlFor="date">Date</label>
        <input 
          className='btn btn-light btn-border-dark' 
          type="date" 
          name="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value === undefined ? '' : e.target.value)} 
        />
      </div>

      <div className="form-input">
        <label htmlFor="time">Time</label>
        <input 
          className='btn btn-light btn-border-dark' 
          type="time" 
          name="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value === undefined ? '' : e.target.value)} 
        />
      </div>

      <div className="form-input">
        <label htmlFor="important">Important</label>
        <input 
          type="checkbox" 
          name="important" 
          id="important" 
          checked={important} 
          onChange={(e) => setImportant(e.currentTarget.checked)} 
        />
        <input 
          className='btn btn-confirm ff-josefin fs-tiny' 
          type="submit" 
          value={task === undefined ? 'Create' : 'Edit'} 
        />
      </div>
    </form>
  )
}

export default TaskForm