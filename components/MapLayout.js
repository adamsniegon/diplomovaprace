import styles from '../styles/MapLayout.module.css';

export default function MapLayout({children}) {
    return (
        <div className={styles.mapLayout}>
            {children}
        </div>
    )
}