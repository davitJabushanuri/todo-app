import { GetServerSideProps } from 'next'
import Header from '../components/header/Header'
import Tasks from '../components/tasks/Tasks'
import styles from '../styles/Home.module.scss'

export interface TasksProps {
  tasks: []
}

const HomePage: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <div className={styles.container}>
      <main>
        <Header tasks={tasks} />
        <Tasks tasks={tasks} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch('http://localhost:3000/api/todos')
  const tasks = await data.json()

  return {
    props: {
      tasks,
    },
  }
}

export default HomePage
