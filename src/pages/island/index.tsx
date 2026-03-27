import styles from './styles.module.css';
import './index.css';
import fav from '../../assets/books/island/fav.ico';
import logo from '../../assets/books/island/logo.svg';
import { Navigation } from '../../components/nav';
import { IslandFirstScreen } from './screens/first';
import { IslandAbout } from './screens/about';
// import { IslandReviews } from './screens/reviews';
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
        {
            label: 'Главная', url: '#first', onClick: () => {
                document.getElementById('first')?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        {
            label: (<>Знакомство<br />с книгой</>), url: '#about', onClick: () => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        {
            label: 'Отзывы', url: '#reviews', onClick: () => {
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        { 
            label: 'Презентация',
            url: '#',
            onClick: () => {
                console.log('open presentation');
                window.open('https://alterlit.ru/media/post_files/cb527acb5d4243aa91b561a2a2db6bd5.pdf', '_blank');
            }
        },
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
                    duration: .3,
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
            {/* <IslandReviews /> */}
            <IslandInfo />
        </motion.div>
    )
}
