import styles from '../styles/Badge.module.css';

export default function Badge({text, icon}) {
    return (
        <p className={styles.badge}><img className={styles.badge__icon} src={icon}></img>{text}</p>
    )
}