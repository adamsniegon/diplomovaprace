import Image from 'next/image';
import Badge from './Badge';
import styles from '../styles/PlaceCard.module.css';

export default function PlaceCard({name, description, cityName, image}) {
    const shortDescription = () => description.length > 80 ? `${description.substring(0, 80)}...` : description;

    return (
        <div className={styles.placeCard}>
            <Image className={styles.placeCard__image} src={image.url} width={image.width} height={image.height}/>
            <div className={styles.placeCard__info}>
                <h1 className={styles.placeCard__name}>{name}</h1>
                <p className={styles.placeCard__description} title={description}>{shortDescription()}</p>
                <p className={styles.placeCard__badge}><img className={styles.placeCard__badgeIcon} src="/icon-pin.svg"></img>{cityName}</p>
            </div>
        </div>
    )
}