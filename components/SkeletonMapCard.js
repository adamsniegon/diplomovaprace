import Skeleton from 'react-loading-skeleton';
import styles from '../styles/SkeletonMapCard.module.css';

export default function SkeletonMapCard() {
    return (
        <div className={styles.skeletonMapCard}>
            <Skeleton className={styles.skeletonMapCard__image} width={150} height={100}/>
            <div className={styles.skeletonMapCard__info}>
                <Skeleton className={styles.skeletonMapCard__name} height={20}/>
                <Skeleton className={styles.skeletonMapCard__description} count={2} height={14}/>
                <Skeleton className={styles.skeletonMapCard__badge} width={72} height={14}/>
            </div>
        </div>
    )
}