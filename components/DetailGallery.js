import Image from 'next/image';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';
import styles from '../styles/DetailGallery.module.css';

/**
 * Gallery with images for specific place and lightbox
 * @param {*} param0 array of images for specific places
 * @returns gallery with pictures of place with lightbox
 */
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