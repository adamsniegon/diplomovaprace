import useSWR from 'swr';
import PlaceCard from './PlaceCard';
import Link from 'next/link';
import styles from '../styles/PlaceList.module.css';

export default function PlaceList() {
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);

    if (error) return <div>failed to load</div>
    if (!places) return <div>loading...</div>

    return (
        <div className={styles.placeList}>
            <h1 className={styles.placeList__headline}>Místa</h1>
            <div className={styles.placeList__list}>
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
                {places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                    <Link href={`/places/${url}`}>
                        <a className={styles.placeList__link}>
                            <PlaceCard key={id} name={name} description={description_short} cityName={cityName} image={image[0]}/>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}