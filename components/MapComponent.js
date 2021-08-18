import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import Head from 'next/head';
import styles from '../styles/MapComponent.module.css';

/**
 * Map component used in place detail page
 * @param {*} param0 latitude and longitude of specific places
 * @returns map with place location pin
 */
export default function MapComponent({latitude, longitude}) {
    const [view, setView] = useState([latitude, longitude]);
    const [zoom, setZoom] = useState(14);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossOrigin=""/>
            </Head>
            <MapContainer className={styles.map} center={view} zoom={zoom} zoomControl={false}>
                <ZoomControl position="topright"/>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker icon={new L.Icon({className: "map__pin", iconAnchor: [15, 50], iconSize: [30, 50], iconUrl: "/icon-pin.svg"})} position={[latitude, longitude]}></Marker>
            </MapContainer>
        </>
    );
}