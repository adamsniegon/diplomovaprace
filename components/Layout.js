import Navigation from './Navigation';

/**
 * Creates global layout with navigation
 * @param {*} param0 children components
 * @returns global layout with navigation
 */
export default function Layout({children}) {
    return(
        <div>
            <Navigation/>
            <main>{children}</main>
        </div>
    );
}