import Image from 'next/image';
import styles from '../styles/DetailGallery.module.css';

export default function DetailGallery({images}) {
    return (
        <div className={styles.detailGallery}>
            {images.map(image => (
                <Image className={styles.detailGallery__image} src={image.url} width={image.width} height={image.height}/>
            ))}
        </div>
    )
}