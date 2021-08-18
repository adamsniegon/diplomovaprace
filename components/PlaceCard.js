import Image from 'next/image';
import Badge from './Badge';
import styles from '../styles/PlaceCard.module.css';

/**
 * Card with photo and basic information about the place
 * @param {*} param0 specific place properties
 * @returns card component used in list of places on homepage
 */
export default function PlaceCard({name, description, cityName, image}) {
    const shortDescription = () => description.length > 80 ? `${description.substring(0, 80)}...` : description;

    return (
        <div className={styles.placeCard}>
            <div className={styles.placeCard__image} style={{backgroundImage: `url(${image.url})`}}></div>
            <div className={styles.placeCard__info}>
                <h1 className={styles.placeCard__name}>{name}</h1>
                <p className={styles.placeCard__description} title={description}>{shortDescription()}</p>
                <p className={styles.placeCard__badge}><img className={styles.placeCard__badgeIcon} src="/icon-pin.svg"></img>{cityName}</p>
            </div>
        </div>
    )
}