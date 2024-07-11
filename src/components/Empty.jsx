import styles from './Empty.module.css'
import ClipBoard from '../assets/Clipboard.png'

export function Empty() {
    return (
        <>
        <div className={styles.EmptyTask}>
            <img className={styles.ClipBoard} src={ClipBoard} alt="ClipBoard" />
        </div>

        <div className={styles.Description}>
            <h2 className={styles.DescriptionEmpty}>Você ainda não tem tarefas cadastradas</h2>
        </div>
        </>
    )
}