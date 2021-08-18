import {useState} from 'react';
import Image from 'next/image';
import styles from '../styles/ReadMore.module.css';

/**
 * Adds functionality to show long description about specific place
 * @param {*} param0 children with texts to render in place detail page
 * @returns component with short and long description
 */
export default function ReadMore({children}) {
    const [readMore, setReadMore] = useState(false);
    
    if (!Array.isArray(children) || (Array.isArray(children) && children.length !== 2)) {
        return (null);
    }
    
    const toggleReadMore = () => {
        setReadMore(state => !state);
    }

    return(
        <>
            <div>
                {children[0]}
            </div>
            <button className={styles.readMore__button} onClick={toggleReadMore}><div className={`${styles.readMore__icon}` + (readMore ? ` ${styles.readMore__iconActive}` : "")}><Image src={'/icon-arrow-down.svg'} width="20px" height="8px"></Image></div>{!readMore ? "Číst dále" : "Zobrazit méně"}</button>
            {readMore && children[1]}
        </>
    );
}