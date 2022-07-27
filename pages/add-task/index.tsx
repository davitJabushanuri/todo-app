import { NextPage } from 'next'
import Link from 'next/link'
import TaskInput from '../../components/taskInput/TaskInput'
import styles from './Add-task.module.scss'

const AddTask: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <button>
          <Link href={`/`}>
            <a>back</a>
          </Link>
        </button>
        <TaskInput />
      </main>
    </div>
  )
}

export default AddTask
