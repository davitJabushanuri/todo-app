import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Task.module.scss'

import editIcon from '../../public/pen-solid.svg'
import deleteIcon from '../../public/trash-solid.svg'

export interface TaskProps {
  id: string
  title: string
  description: string
  completed: boolean
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed }) => {
  const router = useRouter()

  const deleteCard = (id: string) => {
    try {
      fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckbox = (id: string) => {
    try {
      fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      })
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div id={id} className={styles.container}>
      <div className={styles.checkbox}>
        <input
          onChange={() => handleCheckbox(id)}
          type="checkbox"
          checked={completed}
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.actions}>
          <button
            onClick={() => router.push(`/edit/${id}`)}
            className={styles.edit}
          >
            <Image src={editIcon} alt="edit" width={`16px`} height={`16px`} />
          </button>
          <button onClick={() => deleteCard(id)} className={styles.delete}>
            <Image src={deleteIcon} alt="edit" width={`16px`} height={`16px`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task
