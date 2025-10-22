import { motion } from 'motion/react';
import styles from './styles.module.css';
import './index.css';
import { AppleFirstScreen } from './screens/first';
import { AppleAbout } from './screens/about';
import { AppleReviews } from './screens/reviews';
import { AppleAuthor } from './screens/author';
import { AppleInfo } from './screens/info';
import { Navigation } from '../../components/nav';
import { useSearchParams } from 'react-router-dom';

const AppleIndex = () => {
    const navItems = [
        { label: (<>Знакомство<br />с книгой</>), url: '#first' },
        { label: 'Арты', url: '#info' },
        { label: 'Отзывы', url: '#reviews' },
        { label: (<>Отправить<br />рецензию</>), url: '#send-review' },
        { label: 'Презентация', url: '#present' },
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
            <AppleFirstScreen />
            <AppleAbout />
            <AppleReviews />
            <AppleAuthor />
            <AppleInfo />
            <Navigation
                items={navItems}
                className={styles.nav_bottom}
                color="#E9AA44"
                showLogo={false}
            />
        </motion.div>
    )
}

const AppleRouter = () => {
    const [search, setSearchPrams] = useSearchParams();

    console.log(setSearchPrams);

    const page = search.get('page');

    return (
        <>
            {!page ? (<AppleIndex />) : null}
        </>
    )
}

export const AppleBook = () => {
    return (
        <AppleRouter />
    )
}
