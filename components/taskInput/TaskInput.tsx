import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './TaskInput.module.scss'

const TaskInput: React.FC = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const router = useRouter()

  const cancelTask = () => {
    router.push('/')
  }

  const createTask = async () => {
    try {
      await fetch(`https://todo-app-rust-nu.vercel.app/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      router.push('/')
      setTask({
        title: '',
        description: '',
      })
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
        <button
          disabled={task.title === '' || task.description === ''}
          type="button"
          onClick={createTask}
          className={styles.submit}
        >
          Create task
        </button>
      </div>
    </form>
  )
}

export default TaskInput
