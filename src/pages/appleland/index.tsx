import { motion } from 'motion/react';
import styles from './styles.module.css';
import './index.css';
import { AppleFirstScreen } from './screens/first';
import { AppleAbout } from './screens/about';
import { AppleReviews } from './screens/reviews';
import { AppleAuthor } from './screens/author';

export const AppleBook = () => {
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
        </motion.div>
    )
}
