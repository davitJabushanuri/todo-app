import styles from './Header.module.scss'

export interface HeaderProps {
  tasks: []
}

const Header: React.FC<HeaderProps> = ({ tasks }) => {
  return (
    <div className={styles.container}>
      <h1>Welcome back</h1>
      {tasks.length > 0 && (
        <p>You&apos;ve got {tasks.length} tasks coming up in the next days.</p>
      )}
    </div>
  )
}

export default Header
