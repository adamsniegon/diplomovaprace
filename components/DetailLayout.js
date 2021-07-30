import styles from '../styles/DetailLayout.module.css';

export default function DetailLayout({children}) {
    return (
        <div className={styles.detailLayout}>
            {children}
        </div>
    )
}