import Head from 'next/head';
import PlaceList from '../components/PlaceList';
import styles from '../styles/Home.module.css';

/**
 * App homepage
 * @returns Homepage
 */
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Domů | InMapa - Interaktivní turistická mapa Karvinska</title>
        <meta name="description" content="Interaktivní turistická mapa Karvinska"/>
        <meta name="keywords" content="InMapa, mapa, turistická mapa, místa, zajímavá místa, Karvinsko, Karviná, Orlová, Havířov, Bohumín, Stonava, Dětmarovice, Doubrava"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <PlaceList/>
    </div>
  )
}