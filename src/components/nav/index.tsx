import { useState, type CSSProperties, type FC } from 'react'
import styles from './styles.module.css'
import { AlterlitLogo } from '../../icons/alterLogo'
import { Link } from 'react-router-dom'
import { BurgerIcon } from '../../icons/burgerMenu'

type TNavItem = {
    label: string | JSX.Element,
    url: string,
}

type TProps = {
    items: TNavItem[],
    style?: CSSProperties,
    className?: string,
    afterItems?: JSX.Element,
    color?: string,
}

export const Navigation: FC<TProps> = ({ items, style, className = '', afterItems, color='#000' }) => {
    const [mobOpen, setMobOpen] = useState<boolean>(false);

    const btnClickHandler = () => {
        setMobOpen(!mobOpen);
    }

    return (
        <div className={`${styles.wrap} ${className}`} style={style}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to={'https://alterlit.ru'}>
                        <AlterlitLogo width={180} height={132} fill={color} />
                    </Link>
                </div>
                <ul className={styles.items} style={{color}}>
                    {items.map((item, i) => (
                        <li className={styles['nav-item']} key={`nav_item-${i}`}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                {afterItems ? (<div className={styles.after}>{afterItems}</div>) : null}
                <button className={styles.menuBtn} onClick={btnClickHandler}>
                    <BurgerIcon size={40} fill="#000" active={mobOpen} />
                </button>
            </nav>
        </div>
    )
}
