import {useState, useEffect} from 'react';
import useSWR from 'swr';
import PlaceCard from './PlaceCard';
import Link from 'next/link';
import Filter from './Filter';
import SkeletonPlaceCard from './SkeletonPlaceCard';
import styles from '../styles/PlaceList.module.css';

/**
 * List with places cards used on homepage
 * @returns list of cards with places
 */
export default function PlaceList() {
    const [filter, setFilter] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);
    const {data: tags, errorTags} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/tags`);
    
    /**
     * Filtering places according to selected tags
     */
    useEffect(() => {
        if (places && filter.length > 0) {
            setFilteredPlaces(state => places.filter(place => {
                const tags = place.tags.map(tag => tag.id.toString());
                return filter.some(item => tags.includes(item));
            }));
        }
        if (filter.length === 0 && places) {
            setFilteredPlaces(state => places);
        }
    }, [places, filter]);

    if (error) return <div>failed to load</div>

    return (
        <div className={styles.placeList}>
            <div className={styles.placeList__header}>
                <h1 className={styles.placeList__headline}>Místa</h1>
                <Filter filter={filter} setFilter={setFilter} tags={tags ? tags : []}/>
            </div>
            <div className={styles.placeList__list}>
                {filteredPlaces.length > 0 ? filteredPlaces.map(({id, name, description_short, url, city, image}) => (
                    <Link key={id} href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard name={name} description={description_short} cityName={city && city.name} image={image[0]}/>
                        </a>
                    </Link>
                )) : <>
                        {[...Array(20)].map((value, index) => <SkeletonPlaceCard key={index}/>)}
                    </>}
            </div>
        </div>
    )
}