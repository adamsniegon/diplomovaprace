import styles from '../styles/BackButton.module.css';
import {useRouter} from 'next/router'

/**
 * Component BackButton allows to go back to previous page from place detail page
 * @returns Detail page back button
 */
export default function BackButton() {
    const router = useRouter();

    const backButtonClick = () => {
        router.back();
    }

    return (
        <button className={styles.backButton} onClick={backButtonClick}><img className={styles.backButton__icon} src="/icon-arrow-back.svg"></img>Zpět</button>
    )
}