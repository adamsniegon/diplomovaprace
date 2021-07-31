import {useState} from 'react';
import styles from '../styles/ReadMore.module.css';

export default function ReadMore({children}) {
    if (!Array.isArray(children) || (Array.isArray(children) && children.length !== 2)) {
        return (null);
    }
    
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(state => !state);
    }

    return(
        <>
            <div>
                {children[0]}
            </div>
            <button className={styles.readMore__button} onClick={toggleReadMore}><img className={`${styles.readMore__icon}` + (readMore ? ` ${styles.readMore__iconActive}` : "")} src="/icon-arrow-down.svg"></img>{!readMore ? "Číst dále" : "Zobrazit méně"}</button>
            {readMore && children[1]}
        </>
    );
}