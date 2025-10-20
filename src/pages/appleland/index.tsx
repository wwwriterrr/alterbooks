import { motion } from 'motion/react';
import styles from './styles.module.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../../components/nav';

const ChangeSiteButton = () => {
    return (
        <Link to={'/island/'} >Change</Link>
    )
}

export const AppleBook = () => {
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
            <Navigation
                items={navItems}
                className={styles.nav}
                color="#E9AA44"
                afterItems={<ChangeSiteButton />}
            />
        </motion.div>
    )
}
