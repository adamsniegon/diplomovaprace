import styles from '../styles/BackButton.module.css';
import Image from 'next/image';
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
        <button className={styles.backButton} onClick={backButtonClick}><div className={styles.backButton__icon}><Image src="/icon-arrow-back.svg" width="20px" height="15px"></Image></div>Zpět</button>
    )
}