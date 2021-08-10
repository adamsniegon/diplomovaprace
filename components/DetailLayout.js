import styles from '../styles/DetailLayout.module.css';

/**
 * Detail layout for place detail page
 * @param {*} param0 children components
 * @returns layout for place detail page
 */
export default function DetailLayout({children}) {
    return (
        <div className={styles.detailLayout}>
            {children}
        </div>
    )
}