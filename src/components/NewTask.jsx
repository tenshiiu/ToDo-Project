import styles from './NewTask.module.css'

export function NewTask(props) {

    return (
        <div className={styles.NewTask}>
        <input type="checkbox" name="" id="" onClick={props.check} />  <p>{props.content}</p>
        </div>
    )
}

