import { FaRegPlusSquare, FaTrash, FaRegEdit, FaStar } from 'react-icons/fa'

const Actions = ({ onAdd, onRemove, onEdit, onSetImportant, task }) => {
  return (
    <div className='actions fs-tiny'>
      <button 
        className='btn btn-dark fs-tiny ff-josefin'
        onClick={() => onAdd()}
      >
        <FaRegPlusSquare className='fa-icon' />
        Add Task
      </button>

      {task !== undefined && <>
        <button
          className='btn btn-dark fs-tiny ff-josefin'
          onClick={() => onEdit(task.id)}
        >
          <FaRegEdit className='fa-icon' />
          Edit Task
        </button>

        <button 
          className='btn btn-decline fs-tiny ff-josefin'
          onClick={() => onRemove(task.id)}
        >
          <FaTrash className='fa-icon' />
          Remove Task
        </button>

        <button
          className={`btn btn-${task.important ? 'decline' : 'confirm'} fs-tiny ff-josefin`}
          onClick={() => onSetImportant({ ...task, important: !task.important })}
        >
          <FaStar className='fa-icon' />
          {task.important ? 'Not Important' : 'Important'}
        </button>
      </>}
    </div>
  )
}

export default Actions