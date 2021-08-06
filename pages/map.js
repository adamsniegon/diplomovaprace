import Head from 'next/head';
import dynamic from 'next/dynamic';
import MapLayout from '../components/MapLayout';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/MapPage.module.css';

const MapPage = dynamic(() => import('../components/MapPage'), {
    ssr: false
});

export default function Map() {
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);
    const shortDescription = (description) => description.length > 50 ? `${description.substring(0, 50)}...` : description;

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MapLayout>
                <div className={styles.mapList}>
                    {error && <div>failed to load</div>}
                    {!places && <div>loading...</div>}
                    {places && places.map(({id, name, description_short, url, city: {name: cityName}, image}) => (
                        <Link key={id} href={`/places/${url}`} id={"neco"}>
                            <a id={"neco"} className={styles.mapList__link}>
                                <div className={styles.mapList__card}>
                                    <div className={styles.mapList__cardImageWrapper}>
                                        <Image className={styles.mapList__cardImage} src={image[0].url} width={image[0].width} height={image[0].height}/>
                                    </div>
                                    <div>
                                        <h1 className={styles.mapList__cardHeadline}>{name}</h1>
                                        <p className={styles.mapList__cardDescription} title={description_short}>{shortDescription(description_short)}</p>
                                        <p className={styles.mapList__cardCityName}><img className={styles.mapList__cardIcon} src="/icon-pin.svg"></img>{cityName}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
                <MapPage/>
            </MapLayout>
        </>
  )
}