import styles from '../styles/BackButton.module.css';
import {useRouter} from 'next/router'

export default function BackButton() {
    const router = useRouter();

    const backButtonClick = () => {
        router.back();
    }

    return (
        <button className={styles.backButton} onClick={backButtonClick}><img className={styles.backButton__icon} src="/icon-arrow-back.svg"></img>Zpět</button>
    )
}