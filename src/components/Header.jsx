import styles from './Header.module.css'
import Logo from '../assets/Logo.png'

export function Header() {
    return (
        <div className={styles.headerBar}>
            <img src={Logo} alt="ToDo" />
        </div>
    )
}