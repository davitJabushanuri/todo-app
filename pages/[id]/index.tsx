import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import backIcon from '../../public/arrow-left-long-solid.svg'
import styles from './TaskPage.module.scss'

import { useRouter } from 'next/router'

export interface TasksProps {
  task: {
    _id: string
    title: string
    description: string
    completed: boolean
  }
}

const URL = process.env.NEXT_PUBLIC_URL

const HomePage: NextPage<TasksProps> = ({ task }) => {
  const [newTask, setNewTask] = useState(task)
  const router = useRouter()

  const editTask = async () => {
    try {
      await fetch(`${URL}/api/tasks/${newTask._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

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
        <form>
          <input
            value={newTask.title}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value })
            }}
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            value={newTask.description}
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value })
            }}
            name="description"
          />

          <div className={styles.actions}>
            <button
              onClick={() => router.push('/')}
              type="button"
              className={styles.cancel}
            >
              Cancel
            </button>
            <button
              onClick={editTask}
              disabled={task === newTask}
              type="button"
              className={styles.submit}
            >
              Edit task
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const data = await fetch(`${process.env.NEXT_PUBLIC_URl}/api/tasks/${id}`)
  const task = await data.json()

  return {
    props: {
      task,
    },
  }
}

export default HomePage
