import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/header/Header'
import Tasks from '../components/tasks/Tasks'
import styles from '../styles/Home.module.scss'

export interface TasksProps {
  tasks: []
}

const HomePage: NextPage<TasksProps> = ({ tasks }) => {
  return (
    <div className={styles.container}>
      <main>
        <Header tasks={tasks} />
        <button className={styles.addTask}>
          <Link className={styles.addTask__link} href={`/add-task`}>
            <a className={styles.addTask__link__anchor}>Add a new task</a>
          </Link>
        </button>
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URl}/api/tasks`)
  const tasks = await data.json()

  return {
    props: {
      tasks,
    },
  }
}

export default HomePage
