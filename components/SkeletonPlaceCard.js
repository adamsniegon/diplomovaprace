import Skeleton from 'react-loading-skeleton';
import styles from '../styles/SkeletonPlaceCard.module.css';

export default function SkeletonPlaceCard() {
    return (
        <div className={styles.skeletonPlaceCard}>
            <Skeleton className={styles.skeletonPlaceCard__image} height={150}/>
            <div className={styles.skeletonPlaceCard__info}>
                <Skeleton className={styles.skeletonPlaceCard__name} height={20}/>
                <Skeleton className={styles.skeletonPlaceCard__description} count={3} height={14}/>
                <Skeleton className={styles.skeletonPlaceCard__badge} width={72} height={16}/>
            </div>
        </div>
    )
}