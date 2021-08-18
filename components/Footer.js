import styles from '../styles/Footer.module.css';

/**
 * Creates global layout with navigation
 * @param {*} param0 children components
 * @returns global layout with navigation
 */
export default function Footer() {
    return(
        <div className={styles.footer}>
            <p className={styles.footer__text}>Tato aplikace vzikla v roce 2021 jako diplomová práce a součást projektu Interaktivní turistická mapa Karvinska na Obchodně podnikatelské fakultě v Karviné. Většina dat použitých v této aplikaci pochází z online katalogu Národního památkového ústavu, pro rozšíření popisu některých místo byly použity jiné internetové zdroje.</p>
        </div>
    );
}