import { useAutoAnimate } from '@formkit/auto-animate/react'
import Task from '../task/Task'
import styles from './Tasks.module.scss'

export interface TasksProps {
  tasks: []
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)
  return (
    <div ref={parent} className={styles.container}>
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
