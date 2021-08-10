import Head from 'next/head';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Dynamically import map for Map page
 */
const PageMap = dynamic(() => import('../components/Map'), {
    ssr: false
});

/**
 * Base Map page component
 * @returns Map page
 */
export default function Map() {
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);

    if (error) return <div>failed to load</div>

    return (
        <>
            <Head>
                <title>Mapa | InMapa - Interaktivní turistická mapa Karvinska</title>
                <meta name="description" content="Interaktivní turistická mapa Karvinska"/>
                <meta name="keywords" content="InMapa, mapa, turistická mapa, místa, zajímavá místa, Karvinsko, Karviná, Orlová, Havířov, Bohumín, Stonava, Dětmarovice, Doubrava"/>
            </Head>
            <PageMap places={places}/>
        </>
  )
}