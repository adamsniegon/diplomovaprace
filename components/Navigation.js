import Link from 'next/link';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../styles/Navigation.module.css';

/**
 * Navigation to browse between app pages
 * @returns navigation for the app
 */
export default function Navigation() {
    const ReactTooltip = dynamic(() => import("react-tooltip"), {
        ssr: false,
    });

    const {pathname} = useRouter();

    return (
        <>
            <ul className={styles.navigation}>
                <li className={`${styles.navigation__item} ${styles.navigation__itemLogo}`}>
                    <Link href={'/'}>
                        <a className={styles.navigation__link}>
                            <div className={styles.navigation__icon}><Image src={"/icon-logo.svg"} width="30px" height="30px"></Image></div>
                        </a>
                    </Link>
                </li>
                <li className={styles.navigation__item}>
                    <Link href={'/'}>
                        <a className={`${styles.navigation__link}` + ((!pathname.startsWith('/map') && !pathname.startsWith('/profile')) ? ` ${styles.navigation__linkActive}` : "")} data-tip="Domů">
                            <svg className={styles.navigation__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.504 17.315">
                                <g className={styles.navigation__iconGroup} fill="none" stroke="#8c8c8c" strokeWidth="1.109" paintOrder="stroke fill markers">
                                    <path className={styles.navigation__path} d="M3.093.555h4.565c.132 0 .239.106.239.238v2.931a.238.238 0 01-.239.239H.793a.238.238 0 01-.238-.239V3.05C.555 1.493 1.662.555 3.093.555zM.852 6.785H7.6c.132 0 .238.106.238.238v9.491a.238.238 0 01-.238.239H3.432c-1.909.01-2.818-.957-2.818-2.81v-6.92c0-.132.106-.238.238-.238zM15.639 16.76h-4.793a.238.238 0 01-.238-.238V13.59c0-.133.106-.239.238-.239h6.865c.132 0 .239.106.239.239v.78c0 .976-.782 2.39-2.311 2.39zM17.652 10.53h-6.747a.238.238 0 01-.238-.239V.801c0-.133.106-.239.238-.239h4.167c1.91-.01 2.819.957 2.819 2.81v6.92a.238.238 0 01-.239.238z"/>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </li>
                <li className={styles.navigation__item}>
                    <Link href={'/map'}>
                        <a className={`${styles.navigation__link}` + (pathname.startsWith('/map') ? ` ${styles.navigation__linkActive}` : "")} data-tip="Mapa">
                            <svg className={styles.navigation__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.938 17.29">
                                <g className={styles.navigation__iconGroup} transform="translate(-488.081 -25.282)" stroke="#8c8c8c" strokeWidth="1.109" strokeDashoffset="693.543" paintOrder="fill markers stroke">
                                    <path className={styles.navigation__path} d="M491.744 36.192h6.107c1.541 0 2.158.42 2.655 1.558l.627 1.44c.316.853 1.31 2.828-3.107 2.828h-6.377c-3.002 0-3.344-1.075-2.798-2.742l.65-1.492c.408-.629.802-1.542 2.243-1.592z" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path className={styles.navigation__pinPath} d="M498.519 29.344c0 1.937-3.508 9.608-3.508 9.608s-3.508-7.67-3.508-9.608a3.508 3.508 0 017.016 0z" fill="#fff" strokeLinejoin="round"/>
                                    <circle className={styles.navigation__circlePath} r="1.597" cy="29.396" cx="495.011" fill="none"/>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </li>
            </ul>
            <ReactTooltip className={styles.navigation__tooltip} place="right" effect="solid" type="dark"/>
        </>
    );
}