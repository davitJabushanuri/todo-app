import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './TaskInput.module.scss'

export interface TasksProps {
  setShow: any
}

const TaskInput: React.FC<TasksProps> = ({ setShow }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const router = useRouter()

  const cancelTask = () => {
    setShow(false)
  }

  const createTask = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      setTimeout(() => {
        setShow(false)
      }, 1000)
      setTask({
        title: '',
        description: '',
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={styles.container}>
      <input
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        type="text"
        name="title"
        placeholder="Title"
      />

      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        name="description"
        placeholder="Description"
      ></textarea>
      <div className={styles.actions}>
        <button type="button" onClick={cancelTask} className={styles.cancel}>
          Cancel
        </button>
        <button type="button" onClick={createTask} className={styles.submit}>
          Create task
        </button>
      </div>
    </form>
  )
}

export default TaskInput
