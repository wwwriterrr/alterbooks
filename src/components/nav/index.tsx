import { useState, type CSSProperties, type FC } from 'react'
import styles from './styles.module.css'
import { AlterlitLogo } from '../../icons/alterLogo'
import { Link } from 'react-router-dom'
import { BurgerIcon } from '../../icons/burgerMenu'
import { motion, AnimatePresence } from 'motion/react'

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

export const Navigation: FC<TProps> = ({ items, style, className = '', afterItems, color = '#000' }) => {
    const [mobOpen, setMobOpen] = useState<boolean>(false);

    const btnClickHandler = () => {
        setMobOpen(!mobOpen);
    }

    const overlayClickHandler = () => {
        setMobOpen(false);
    }

    return (
        <div className={`${styles.wrap} ${className}`} style={style}>
            <nav className={`${styles.nav} ${mobOpen ? styles.mob : ''}`}>
                <div className={styles.logo}>
                    <Link to={'https://alterlit.ru'}>
                        <AlterlitLogo width={180} height={132} fill={color} />
                    </Link>
                </div>
                <ul className={styles.items} style={{ color }}>
                    {items.map((item, i) => (
                        <li className={styles['nav-item']} key={`nav_item-${i}`}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                {afterItems ? (<div className={styles.after}>{afterItems}</div>) : null}
                <AnimatePresence>
                    <button
                        className={styles.menuBtn}
                        onClick={btnClickHandler}
                    >
                        <BurgerIcon size={70} fill={color} active={mobOpen} />
                    </button>
                </AnimatePresence>
                <AnimatePresence>
                    {mobOpen ? (
                        <div
                            className={styles.nav_mob}
                        >
                            <motion.div
                                className={styles.nav_mob__overlay}
                                onClick={overlayClickHandler}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: .6,
                                        ease: 'easeOut',
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: .3,
                                        ease: 'easeIn',
                                    }
                                }}
                            />
                            <div className={styles.nav_mob__items} style={{ color }}>
                                {items.map((item, i) => (
                                    <motion.div
                                        className={styles.nav_mob__item}
                                        key={`nav_mob_item-${i}`}
                                        initial={{
                                            opacity: 0,
                                            x: -200,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: .1,
                                                delay: .1 * i,
                                                ease: 'easeOut',
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -200,
                                            transition: {
                                                duration: .2,
                                                ease: 'easeIn',
                                            }
                                        }}
                                    >
                                        <Link
                                            to={item.url}
                                            onClick={overlayClickHandler}
                                        >{item.label}</Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </AnimatePresence>
            </nav>
        </div>
    )
}
