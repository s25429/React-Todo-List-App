import Task from './Task'

const List = ({ tasks, selectedTask, onSelectTask }) => {
  return (
    <ul className='list ff-khula fs-medium'>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          data={task} 
          selected={selectedTask === task.id} 
          onSelectTask={onSelectTask} 
        />
      ))}
    </ul>
  )
}

export default List;