import Head from 'next/head';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

const PageMap = dynamic(() => import('../components/Map'), {
    ssr: false
});

export default function Map() {
    const {data: places, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_API}/places`);

    if (error) return <div>failed to load</div>

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageMap places={places}/>
        </>
  )
}