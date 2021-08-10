import {getPlaceIds, getPlace} from "../../lib/places";
import DetailLayout from "../../components/DetailLayout";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ReadMore from "../../components/ReadMore";
import BackButton from "../../components/BackButton";
import Badge from "../../components/Badge";
import DetailGallery from "../../components/DetailGallery";
import Tag from "../../components/Tag";
import styles from '../../styles/Place.module.css';

/**
 * Get data about specific page
 * @param {*} param0 slug of URL for places
 * @returns object with specific page data
 */
export async function getStaticProps({params}) {
    const {place} = await getPlace(params.id);
    return {
        props: {
            place
        }
    }
}

/**
 * Get paths for places detail pages
 */
export async function getStaticPaths() {
    const paths = await getPlaceIds();
    return {
        paths,
        fallback: false
    }
}

/**
 * 
 * @param {*} param0 specific place properties
 * @returns Specific place detail page
 */
export default function Place({place: {name, description_short, description_long, image, city: {name: cityName}, geojson: {geometry: {coordinates}}, tags}}) {
    /**
     * Dynamically import MapComponent to show place location
     */
    const MapComponent = dynamic(() => import('../../components/MapComponent'), {
        ssr: false
    });

    return (
        <>
            <Head>
                <title>{name} | InMapa - Interaktivní turistická mapa Karvinska</title>
                <meta name="description" content="Interaktivní turistická mapa Karvinska"/>
                <meta name="keywords" content="InMapa, mapa, turistická mapa, místa, zajímavá místa, Karvinsko, Karviná, Orlová, Havířov, Bohumín, Stonava, Dětmarovice, Doubrava"/>
            </Head>
            <DetailLayout>
                <div className={styles.place__left}>
                    <BackButton/>
                    <div className={styles.place__badgeList}>
                        <Badge text={cityName} icon="/icon-pin.svg"/>
                        <Badge text={`${coordinates[0]}, ${coordinates[1]}`} icon="/icon-location.svg"/>
                    </div>
                    <div className={styles.place__tagList}>
                        {tags.map(({id, name}) => <Tag key={id} name={name}/>)}
                    </div>
                    <h1 className={styles.place__headline}>{name}</h1>
                    <ReadMore>
                        <p className={styles.place__descriptionShort}>{description_short}</p>
                        <p className={styles.place__descriptionLong}>{description_long}</p>
                    </ReadMore>
                    <div className={styles.place__gallery}>
                        <DetailGallery images={image}/>
                    </div>
                </div>
                <div className={styles.place__right}>
                    <MapComponent latitude={coordinates[0]} longitude={coordinates[1]}/>
                </div>
            </DetailLayout>
        </>
    )
}