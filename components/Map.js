import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import Head from 'next/head';
import styles from '../styles/MapPageComponent.module.css';

export default function Map() {
    const [view, setView] = useState([49.848610, 18.512469]);
    const [zoom, setZoom] = useState(14);
    
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
            </Head>
            <MapContainer className={styles.map} center={view} zoom={zoom} zoomControl={false}>
                <ZoomControl position="topright"/>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </>
    );
}