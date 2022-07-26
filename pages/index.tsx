import { GetServerSideProps } from 'next'
import Tasks from '../components/tasks/Tasks'
import styles from '../styles/Home.module.scss'

export interface TasksProps {
  tasks: []
}

const HomePage: React.FC<TasksProps> = ({ tasks }) => {
  console.log(tasks)
  return (
    <div className={styles.container}>
      <h1>Tasks</h1>
      <Tasks tasks={tasks} />
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
