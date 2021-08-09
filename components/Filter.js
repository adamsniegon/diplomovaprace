import {useState, useEffect, useRef} from 'react';
import Tag from './Tag';
import styles from '../styles/Filter.module.css';

export default function Filter({filter, setFilter, tags}) {
    const [isOpen, setIsOpen] = useState(false);
    const filterMenu = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        }
    }, [filterMenu]);

    const clickOutside = (e) => {
        if (filterMenu.current && !filterMenu.current.contains(e.target)) {
            setIsOpen(state => false);
        }
    }

    const toggleMenu = () => {
        setIsOpen(state => !state);
    }

    const toggleTag = (e) => {
        if (e.currentTarget.dataset.filter === "false") {
            const id = e.currentTarget.dataset.id;
            setFilter(state => [...state, id]);
            e.currentTarget.dataset.filter = "true";
            e.currentTarget.classList.add(styles.filter__tagActive);
        } else {
            const id = e.currentTarget.dataset.id;
            setFilter(state => state.filter(tag => tag !== id))
            e.currentTarget.dataset.filter = "false";
            e.currentTarget.classList.remove(styles.filter__tagActive);
        }
    }

    return (
        <div className={styles.filter} ref={filterMenu}>
            <div className={styles.filter__button} onClick={toggleMenu}>
                <p className={styles.filter__buttonText}>Filtr</p>
                <img className={styles.filter__buttonIcon} src="/icon-filter.svg"></img>
            </div>
            <div className={`${styles.filter__menu}` + (isOpen ? ` ${styles.filter__menuActive}` : "")}>
                {tags.map(tag => (
                    <div data-id={tag.id} data-filter={false} className={styles.filter__tag} onClick={toggleTag}>
                        <Tag name={tag.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}