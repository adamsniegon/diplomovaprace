import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';
import styles from '../styles/Map.module.css';

/**
 * Main map page component to generate map with pins
 * @param {*} param0 list of places
 * @returns map with pins of places
 */
export default function Map({places = []}) {
    const [view, setView] = useState([49.848610, 18.512469]);
    const [zoom, setZoom] = useState(12);

    const shortDescription = (description) => description.length > 80 ? `${description.substring(0, 80)}...` : description;
    
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/Leaflet.css"/>
            </Head>
            <div className={styles.map__wrapper}>
                <MapContainer className={styles.map} center={view} zoom={zoom} zoomControl={false}>
                    <ZoomControl position="topright"/>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    {places.map(({id, name, description_short, url, image, city: {name: cityName}, geojson: {geometry: {coordinates}}}) => (
                        <Marker key={id} icon={new L.Icon({className: "map__pin", iconAnchor: [15, 50], iconSize: [30, 50], iconUrl: "/icon-pin.svg", popupAnchor: [0, -50]})} position={[coordinates[0], coordinates[1]]}>
                            <Popup>
                                <Link href={`/places/${url}`}>
                                    <a className={styles.map__link}>
                                        <Image className={styles.map__image} src={image[0].url} width={image[0].width} height={image[0].height}/>
                                        <h1 className={styles.map__name}>{name}</h1>
                                        <p className={styles.map__description}>{shortDescription(description_short)}</p>
                                        <div className={styles.map__badge}>
                                            <Badge text={cityName} icon="/icon-pin.svg"/>
                                        </div>
                                    </a>
                                </Link>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
}