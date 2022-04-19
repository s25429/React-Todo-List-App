import { useState } from 'react'

import './style.css'
import Header from './components/Header'
import TodayDate from './components/TodayDate'
import Actions from './components/Actions'
import List from './components/List'
import TaskForm from './components/TaskForm'
import Footer from './components/Footer'


function App() {
  const ID_CAP = 30
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "title": "Doctors Appointment",
      "details": "I need a check, because one of my teeth hurts, but only when I eat cold food, like ice cream.", 
      "date": "2022-04-12",
      "time": "12:30",
      "important": true
    },
    {
      "id": 2,
      "title": "Take out garbage",
      "details": "It stinks!", 
      "date": "2022-05-05",
      "time": "19:00",
      "important": false
    },
  ])
  const [selected, setSelected] = useState(null)
  const [taskForm, setTaskForm] = useState(false)

  const getUniqueTaskId = () => {
    let id = -1
    const taken_ids = []

    for (let { id } of tasks)
      taken_ids.push(id)
    
    for (let i = 1; i < ID_CAP + 1; i++) {
      if (!taken_ids.includes(i)) {
        id = i
        break
      }
    }

    return id
  }

  const addTask = (task) => {
    let id = getUniqueTaskId()

    if (id === -1)  {
      alert("Can't add more tasks because of a task limit.")
      return
    }

    const new_task = { ...task, id }
    setTasks([ ...tasks, new_task ])
  }

  const selectTask = (id) => {
    if (id === selected) setSelected(null)
    else                 setSelected(id)
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (newTask) => {
    setTasks(tasks.map((task) => {
      return task.id === newTask.id ? newTask : task
    }))
  }

  const getTask = () => {
    return tasks.find((task) => task.id === selected)
  }

  const showTaskForm = (id = null) => {
    if (id === null) setSelected(null)
    setTaskForm(true)
  }

  const hideTaskForm = () => {
    setTaskForm(false)
  }

  return (
    <>
      {taskForm && <TaskForm task={getTask()} onAdd={addTask} onEdit={editTask} onFinished={hideTaskForm} />}
      <Header />
      <TodayDate />
      <Actions onAdd={showTaskForm} onEdit={showTaskForm} onRemove={removeTask} onSetImportant={editTask} task={getTask()} />
      <List tasks={tasks} selectedTask={selected} onSelectTask={selectTask}/>
      <Footer />
    </>
  )
}

export default App
