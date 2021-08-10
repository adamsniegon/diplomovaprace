import styles from '../styles/Badge.module.css';

/**
 * Creates Badge component to show properties of specific place
 * @param {*} param0 text and icon to use in badge
 * @returns Badge component with text and icon
 */
export default function Badge({text, icon}) {
    return (
        <p className={styles.badge}><img className={styles.badge__icon} src={icon}></img>{text}</p>
    )
}