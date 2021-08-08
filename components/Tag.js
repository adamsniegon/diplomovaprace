import styles from '../styles/Tag.module.css';

export default function Tag({name}) {
    return (
        <div className={styles.tag}>
            <p className={styles.tag__name}>{name}</p>
        </div>
    )
}