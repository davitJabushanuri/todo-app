import autoAnimate from '@formkit/auto-animate'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect, useRef, useState } from 'react'
import Task from '../task/Task'
import TaskInput from '../taskInput/TaskInput'
import styles from './Tasks.module.scss'

export interface TasksProps {
  tasks: []
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)
  const [show, setShow] = useState(false)
  const dropdownParent = useRef(null)

  const reveal = () => setShow((prev) => !prev)

  useEffect(() => {
    dropdownParent.current && autoAnimate(dropdownParent.current)
  }, [dropdownParent])

  return (
    <div ref={parent} className={styles.container}>
      <button ref={dropdownParent} className={styles.addTask}>
        <p onClick={reveal}>{!show ? `Add a new task` : `close`}</p>
        {show && <TaskInput setShow={setShow} />}
      </button>
      {tasks.map((task: any) => {
        return (
          <Task
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        )
      })}
    </div>
  )
}

export default Tasks
