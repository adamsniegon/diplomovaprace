import styles from '../styles/Tag.module.css';

/**
 * Creates tag with text of category
 * @param {*} param0 text to show in tag
 * @returns tag with text of category
 */
export default function Tag({name, neco}) {
    return (
        <div className={styles.tag}>
            <p className={styles.tag__name}>{name}</p>
        </div>
    )
}