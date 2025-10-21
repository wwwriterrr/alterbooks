import styles from './styles.module.css';
import './index.css';
import fav from '../../assets/books/island/fav.ico';
import logo from '../../assets/books/island/logo.svg';
import { Navigation } from '../../components/nav';
import { IslandFirstScreen } from './screens/first';
import { IslandAbout } from './screens/about';
import { IslandReviews } from './screens/reviews';
import { IslandInfo } from './screens/info';
import { motion } from 'motion/react';
import { ChangePageButton } from '../../components/changePageButton';

const IslandMeta = () => {
    return (
        <>
            <title>«Остров Яблок» Виталий Смышляев</title>
            <link rel="icon" type="image/svg+xml" href={logo} />
            <link type="image/x-icon" rel="shortcut icon" href={fav} />
        </>
    )
}

export const IslandBook = () => {
    const navItems = [
        { label: 'Главная', url: '#first' },
        { label: (<>Знакомство<br />с книгой</>), url: '#about' },
        { label: 'Отзывы', url: '#reviews' },
        { label: 'Презентация', url: '' },
    ]

    return (
        <motion.div 
            className={styles.page}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                }
            }}
        >
            <IslandMeta />
            <Navigation
                items={navItems}
                className={styles.nav}
                color="#E9AA44"
                afterItems={<ChangePageButton />}
            />
            <IslandFirstScreen />
            <IslandAbout />
            <IslandReviews />
            <IslandInfo />
        </motion.div>
    )
}
