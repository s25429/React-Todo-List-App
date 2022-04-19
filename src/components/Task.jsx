import { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'


const Task = ({ data, selected, onSelectTask }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <li 
      className={`task ${selected ? 'selected-task' : ''}`} 
      onDoubleClick={() => onSelectTask(data.id)}
    >
      <p className='ff-rubik'>{data.title}</p>

      <div>
        <p className='fs-smaller'>
          <FaStar className='fa-icon fa-icon-blue' style={{
            visibility: (data.important ? 'visible' : 'hidden')
          }} />
        </p>

        <p className='fs-smaller'>{data.date}, {data.time}</p>

        <button 
          className={`btn ${showDetails ? 'btn-light' : 'btn-dark'} fs-tiny ff-josefin ${showDetails ? 'btn-border-dark' : ''}`} 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails 
            ? <FaAngleUp className='fa-icon fa-icon-dark' /> 
            : <FaAngleDown className='fa-icon' />
          }
          Details
        </button>
      </div>

      {showDetails && <>
        <p className='fs-tiny'>{data.details}</p>
      </>}
    </li>
  )
}

export default Task