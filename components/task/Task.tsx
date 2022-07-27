import Image from 'next/image'
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
  return (
    <div id={id} className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={completed} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.actions}>
          <button className={styles.edit}>
            <Image src={editIcon} alt="edit" width={`16px`} height={`16px`} />
          </button>
          <button className={styles.delete}>
            <Image src={deleteIcon} alt="edit" width={`16px`} height={`16px`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task
