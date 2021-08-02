import Image from 'next/image';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';
import styles from '../styles/DetailGallery.module.css';

export default function DetailGallery({images}) {
    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className={styles.detailGallery}>
                    {images.map(image => (
                        <Image className={styles.detailGallery__image} key={image.id} src={image.url} width={image.width} height={image.height}/>
                    ))}
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}