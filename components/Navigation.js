import {useEffect} from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import dynamic from "next/dynamic";

export default function Navigation() {
    const ReactTooltip = dynamic(() => import("react-tooltip"), {
        ssr: false,
    });

    const {pathname} = useRouter();

    return (
        <>
            <ul className="navigation">
                <li className="navigation__item navigation__itemLogo">
                    <Link href={'/'}>
                        <a className="navigation__link">
                            <img className="navigation__icon" src="/icon-logo.svg"></img>
                        </a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href={'/'}>
                        <a className={"navigation__link" + ((!pathname.startsWith('/map') && !pathname.startsWith('/profile')) ? " navigation__link--active" : "")} data-tip="Domů" data-background-color="#e7e7e7" data-text-color="#000000">
                            <svg className="navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.504 17.315">
                                <g className="navigation__iconGroup" fill="none" stroke="#8c8c8c" strokeWidth="1.109" paintOrder="stroke fill markers">
                                    <path className="navigation__path" d="M3.093.555h4.565c.132 0 .239.106.239.238v2.931a.238.238 0 01-.239.239H.793a.238.238 0 01-.238-.239V3.05C.555 1.493 1.662.555 3.093.555zM.852 6.785H7.6c.132 0 .238.106.238.238v9.491a.238.238 0 01-.238.239H3.432c-1.909.01-2.818-.957-2.818-2.81v-6.92c0-.132.106-.238.238-.238zM15.639 16.76h-4.793a.238.238 0 01-.238-.238V13.59c0-.133.106-.239.238-.239h6.865c.132 0 .239.106.239.239v.78c0 .976-.782 2.39-2.311 2.39zM17.652 10.53h-6.747a.238.238 0 01-.238-.239V.801c0-.133.106-.239.238-.239h4.167c1.91-.01 2.819.957 2.819 2.81v6.92a.238.238 0 01-.239.238z"/>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href={'/map'}>
                        <a className={"navigation__link" + (pathname.startsWith('/map') ? " navigation__link--active": "")} data-tip="Mapa" data-background-color="#e7e7e7" data-text-color="#000000">
                            <svg className="navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.938 17.29">
                                <g className="navigation__iconGroup" transform="translate(-488.081 -25.282)" stroke="#8c8c8c" strokeWidth="1.109" strokeDashoffset="693.543" paintOrder="fill markers stroke">
                                    <path className="navigation__path" d="M491.744 36.192h6.107c1.541 0 2.158.42 2.655 1.558l.627 1.44c.316.853 1.31 2.828-3.107 2.828h-6.377c-3.002 0-3.344-1.075-2.798-2.742l.65-1.492c.408-.629.802-1.542 2.243-1.592z" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path className="navigation__pinPath" d="M498.519 29.344c0 1.937-3.508 9.608-3.508 9.608s-3.508-7.67-3.508-9.608a3.508 3.508 0 017.016 0z" fill="#fff" strokeLinejoin="round"/>
                                    <circle className="navigation__circlePath" r="1.597" cy="29.396" cx="495.011" fill="none"/>
                                </g>
                            </svg>
                        </a>
                    </Link>
                </li>
            </ul>
            <ReactTooltip place="right" effect="solid" className="navigation__tooltip"/>
            <style jsx>{`
            .navigation{
                display: flex;
                flex-direction: column;
                list-style: none;
                box-shadow: 0px 0px 5px 0px #cccccc;
                width: 80px;
                border-radius: 10px;
                margin: 10px 0px 10px 10px;
            }

            @media only screen and (max-width: 1024px) {
                .navigation{
                    width: auto;
                    flex-direction: row;
                    position: fixed;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    margin: 0px;
                    justify-content: space-around;
                }
            }
            
            .navigation__item{
                display: flex;
                position: relative;
            }

            .navigation__item:first-of-type::after{
                content: '';
                width: 50px;
                height: 1px;
                background: #e0e0e0;
                bottom: 0px;
                left: 0px;
                right: 0px;
                margin: auto;
                position: absolute;
            }

            @media only screen and (max-width: 1024px) {
                .navigation__itemLogo{
                    display: none;
                }
            }

            .navigation__link{
                padding: 20px 0px;
                flex: 1;
                display: flex;
            }

            @media only screen and (max-width: 1024px) {
                .navigation__link{
                    padding: 20px;
                }
            }

            @media only screen and (max-width: 1024px) {
                .navigation__tooltip{
                    display: none;
                }
            }
            
            .navigation__icon{
                height: 25px;
                margin: auto;
            }
            
            .navigation__link:hover .navigation__path, .navigation__link--active .navigation__path{
                stroke: #ff4663;
                fill: #ff4663;
            }
            
            .navigation__link:hover .navigation__circlePath, .navigation__link--active .navigation__circlePath{
                stroke: #ff4663;
                fill: #ffffff;
            }
            
            .navigation__link:hover .navigation__pinPath, .navigation__link--active .navigation__pinPath{
                stroke: #ffffff;
                fill: #ff4663;
            }
        `}</style>
        </>
    );
}