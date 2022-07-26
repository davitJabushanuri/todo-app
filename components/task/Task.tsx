import { useRouter } from 'next/router'
import styles from './Task.module.scss'

export interface TaskProps {
  id: string
  title: string
  description: string
  completed: boolean
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/${id}`)} className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}

export default Task
