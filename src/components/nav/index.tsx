import { type CSSProperties, type FC } from 'react'
import styles from './styles.module.css'

type TNavItem = {
    label: string,
    url: string,
}

type TProps = {
    items: TNavItem[],
    style?: CSSProperties,
    className?: string,
}

export const Navigation: FC<TProps> = ({items, style, className}) => {
    return (
        <div className={`${styles.wrap} ${className ? className : ''}`} style={style}>
            <nav className={styles.nav}>
                <div className={styles.logo}>

                </div>
                <ul className={styles.items}>
                    {items.map((item, i) => (
                        <li className={styles['nav-item']} key={`nav_item-${i}`}>
                            <a href={item.url}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
