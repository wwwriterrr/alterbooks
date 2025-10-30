import {
    useState,
    type ReactElement,
    type CSSProperties,
    type FC,
    useRef,
} from 'react'
import styles from './styles.module.css'
import { AlterlitLogo } from '../../icons/alterLogo'
import {
    Link,
} from 'react-router-dom'
import { BurgerIcon } from '../../icons/burgerMenu'
import { motion, AnimatePresence } from 'motion/react'
import { useOutsideClick } from '../../core/hooks'
import { ArrowIcon } from '../../icons/arrow'

export type TNavItem = {
    label: string | ReactElement,
    url: string,
    onClick?: () => void,
    child?: TNavItem[],
    childPosition?: 'top' | 'bottom',
}

type TProps = {
    items: TNavItem[],
    style?: CSSProperties,
    className?: string,
    afterItems?: ReactElement,
    color?: string,
    showLogo?: boolean,
}

const NavItem: FC<{ item: TNavItem, color: string }> = ({ item, color }) => {
    const [showChild, setShowChild] = useState<boolean>(false);

    const ref = useRef<HTMLLIElement>(null);

    const clickHandler = () => {
        setShowChild(!showChild);
    }

    const outsideHandler = () => {
        setShowChild(false)
    };

    useOutsideClick(ref, outsideHandler);

    return (
        <li ref={ref} className={styles['nav-item']}>
            {item.child?.length ? (
                <>
                    <button
                        onClick={clickHandler}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                        }}
                    >
                        {item.label}
                        {item.childPosition !== 'top' ? (
                            <ArrowIcon direction={showChild ? 'up' : 'down'} fill={color} />
                        ) : null}
                    </button>
                    <AnimatePresence>
                        {showChild ? (
                            <motion.ul
                                className={styles.child}
                                style={{
                                    top: item.childPosition === 'top' ? 'auto' : '100%',
                                    bottom: item.childPosition === 'top' ? '100%' : 'auto',
                                }}
                                initial={{
                                    opacity: 0,
                                    y: item.childPosition === 'top' ? -50 : 50,
                                    x: '-50%',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: item.childPosition === 'top' ? -10 : 10,
                                    x: '-50%',
                                    transition: {
                                        duration: .3,
                                        ease: 'easeOut',
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    y: item.childPosition === 'top' ? -50 : 50,
                                    x: '-50%',
                                    transition: {
                                        duration: .1,
                                        ease: 'linear',
                                    }
                                }}
                            >
                                {item.child.map((childItem, i) => (
                                    <NavItem item={childItem} key={`nav_item_child-${i}`} color={color} />
                                ))}
                            </motion.ul>
                        ) : null}
                    </AnimatePresence>
                </>
            ) : (
                <>
                    {item.onClick ? (
                        <button type="button" onClick={item.onClick}>
                            {item.label}
                        </button>
                    ) : (
                        <Link
                            to={item.url}
                        >{item.label}</Link>
                    )}
                </>
            )}
        </li>
    )
}

export const Navigation: FC<TProps> = ({
    items,
    style,
    className = '',
    afterItems,
    showLogo = true,
    color = '#000',
}) => {
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
                {showLogo ? (
                    <div className={styles.logo}>
                        <Link to={'https://alterlit.ru'}>
                            <AlterlitLogo width={180} height={132} fill={color} />
                        </Link>
                    </div>
                ) : null}
                <ul className={styles.items} style={{ color }}>
                    {items.map((item, i) => (
                        <NavItem item={item} color={color} key={`nav_item-${i}`} />
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
                                        {item.onClick ? (
                                            <button type="button" onClick={item.onClick}>
                                                {item.label}
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.url}
                                            >{item.label}</Link>
                                        )}
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
