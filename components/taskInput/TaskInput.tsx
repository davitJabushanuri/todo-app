import styles from './TaskInput.module.scss'

export interface TasksProps {}

const TaskInput: React.FC<TasksProps> = () => {
  return (
    <form action="POST" className={styles.container}>
      <input type="text" name="title" placeholder="Add a task" />
      <textarea name="description" placeholder="Description"></textarea>
      <div className={styles.actions}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.submit}>Create task</button>
      </div>
    </form>
  )
}

export default TaskInput
