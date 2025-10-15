import { useState, type CSSProperties, type FC } from 'react'
import styles from './styles.module.css'
import { AlterlitLogo } from '../../icons/alterLogo'
import { Link } from 'react-router-dom'
import { BurgerIcon } from '../../icons/burgerMenu'

type TNavItem = {
    label: string,
    url: string,
}

type TProps = {
    items: TNavItem[],
    style?: CSSProperties,
    className?: string,
}

export const Navigation: FC<TProps> = ({ items, style, className = '' }) => {
    const [mobOpen, setMobOpen] = useState<boolean>(false);

    const btnClickHandler = () => {
        setMobOpen(!mobOpen);
    }

    return (
        <div className={`${styles.wrap} ${className}`} style={style}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to={'https://alterlit.ru'}>
                        <AlterlitLogo width={180} height={132} fill="#000" />
                    </Link>
                </div>
                <ul className={styles.items}>
                    {items.map((item, i) => (
                        <li className={styles['nav-item']} key={`nav_item-${i}`}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <button className={styles.menuBtn} onClick={btnClickHandler}>
                    <BurgerIcon size={40} fill="#000" active={mobOpen} />
                </button>
            </nav>
        </div>
    )
}
