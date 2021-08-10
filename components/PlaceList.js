import {useState, useEffect} from 'react';
import useSWR from 'swr';
import PlaceCard from './PlaceCard';
import Link from 'next/link';
import Filter from './Filter';
import SkeletonPlaceCard from './SkeletonPlaceCard';
import styles from '../styles/PlaceList.module.css';


export default function PlaceList() {
    const [filter, setFilter] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);
    const {data: tags, errorTags} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/tags`);
    
    if (error) return <div>failed to load</div>

    useEffect(() => {
        if (places && filter.length > 0) {
            setFilteredPlaces(state => places.filter(place => {
                const tags = place.tags.map(tag => tag.id.toString());
                return filter.some(item => tags.includes(item));
            }));
        }
        if (filter.length === 0) {
            setFilteredPlaces(places);
        }
    }, [places, filter]);



    return (
        <div className={styles.placeList}>
            <div className={styles.placeList__header}>
                <h1 className={styles.placeList__headline}>Místa</h1>
                <Filter filter={filter} setFilter={setFilter} tags={tags ? tags : []}/>
            </div>
            <div className={styles.placeList__list}>
                {filteredPlaces ? filteredPlaces.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link key={id} href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                )) : <>
                        {[...Array(20)].map((value, index) => <SkeletonPlaceCard key={index}/>)}
                    </>}
            </div>
        </div>
    )
}