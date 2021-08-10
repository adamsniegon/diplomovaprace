import {useState, useEffect, useRef} from 'react';
import Tag from './Tag';
import styles from '../styles/Filter.module.css';

/**
 * Filter places by selected tags
 * @param {*} param0 filter, setFilter and tags to show in popup menu
 * @returns Filter component
 */
export default function Filter({filter, setFilter, tags}) {
    const [isOpen, setIsOpen] = useState(false);
    const filterMenu = useRef();

    /**
     * Add event listener to be able close popup menu with click outside
     */
    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        }
    }, [filterMenu]);

    /**
     * Check if user clicked on the popup menu
     * @param {*} e event
     */
    const clickOutside = (e) => {
        if (filterMenu.current && !filterMenu.current.contains(e.target)) {
            setIsOpen(state => false);
        }
    }

    /**
     * Toggle isOpen state to open or close popup menu
     */
    const toggleMenu = () => {
        setIsOpen(state => !state);
    }

    /**
     * Add or remove selected tag from state
     * @param {*} e event
     */
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
                {tags.map(({id, name}) => (
                    <div key={id} data-id={id} data-filter={false} className={styles.filter__tag} onClick={toggleTag}>
                        <Tag name={name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}