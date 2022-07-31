import Image from 'next/image'
import Link from 'next/link'
import TaskInput from '../components/taskInput/TaskInput'
import backIcon from '../public/arrow-left-long-solid.svg'
import styles from '../styles/add-task.module.scss'

const createTask = () => {
  return (
    <div className={styles.container}>
      <main>
        <button className={styles.back}>
          <Link href="/">
            <a>
              <Image
                src={backIcon}
                alt="back-icon"
                width="12px"
                height="12px"
              />
              <span>Back</span>
            </a>
          </Link>
        </button>
        <TaskInput />
      </main>
    </div>
  )
}

export default createTask
