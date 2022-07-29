import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Task.module.scss'

import editIcon from '../../public/pen-solid.svg'
import deleteIcon from '../../public/trash-solid.svg'

import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
export interface TaskProps {
  id: string
  title: string
  description: string
  completed: boolean
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed }) => {
  const URL: any = process.env.NEXT_PUBLIC_URL
  const router = useRouter()

  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  const deleteCard = async (id: string) => {
    try {
      await fetch(`${URL}/api/tasks/${id}`, {
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

  const handleCheckbox = async (id: string) => {
    try {
      await fetch(`${URL}/api/tasks/${id}`, {
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
    <div ref={parent} id={id} className={styles.container}>
      <div className={styles.main}>
        <div className={styles.checkbox}>
          <input
            onChange={() => handleCheckbox(id)}
            type="checkbox"
            checked={completed}
          />
        </div>
        <h2 onClick={reveal}>{title}</h2>
        <div className={styles.actions}>
          <button onClick={() => router.push(`/${id}`)} className={styles.edit}>
            <Image src={editIcon} alt="edit" width={`12px`} height={`12px`} />
          </button>
          <button onClick={() => deleteCard(id)} className={styles.delete}>
            <Image src={deleteIcon} alt="edit" width={`12px`} height={`12px`} />
          </button>
        </div>
      </div>
      {show && <p>{description}</p>}
    </div>
  )
}

export default Task
