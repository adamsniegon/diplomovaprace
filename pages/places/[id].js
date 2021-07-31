import {getPlaceIds, getPlace} from "../../lib/places";
import DetailLayout from "../../components/DetailLayout";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ReadMore from "../../components/ReadMore";
import styles from '../../styles/Place.module.css';

export async function getStaticProps({params}) {
    const {place} = await getPlace(params.id);
    return {
        props: {
            place
        }
    }
}

export async function getStaticPaths() {
    const paths = await getPlaceIds();
    return {
        paths,
        fallback: false
    }
}

export default function Place({place: {name, description_short, description_long, image}}) {
    const Map = dynamic(() => import('../../components/Map'), {
        ssr: false
    });

    return (
        <DetailLayout>
            <div className={styles.place__left}>
                <ReadMore>
                    <p className={styles.place__descriptionShort}>{description_short}</p>
                    <p className={styles.place__descriptionLong}>{description_long}</p>
                </ReadMore>
                {image.map(item => (
                    <Image src={item.url} width={`${item.width}`} height={`${item.height}`}/>
                ))}
            </div>
            <div>
                <Map/>
            </div>
        </DetailLayout>
    )
}