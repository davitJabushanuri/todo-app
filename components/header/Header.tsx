import styles from './Header.module.scss'

export interface HeaderProps {
  tasks: []
}

const Header: React.FC<HeaderProps> = ({ tasks }) => {
  const plural = tasks.length > 1 ? 'tasks' : 'task'
  return (
    <div className={styles.container}>
      <h1>Welcome {tasks.length > 0 && `back`}</h1>
      {tasks.length > 0 && (
        <p>
          You&apos;ve got {tasks.length} {plural} coming up in the next days.
        </p>
      )}
    </div>
  )
}

export default Header
