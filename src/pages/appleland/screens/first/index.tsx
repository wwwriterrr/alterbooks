import img2 from '../../../../assets/books/appleland/1.png';
import { motion } from 'motion/react';
import styles from './styles.module.css';

export const AppleFirstScreen = () => {
    return (
        <div id="first" className={styles.screen}>
            <div className={styles.wrap}>
                <motion.img
                    className={styles.cover}
                    src={img2}
                    alt="Book cover"
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                        }
                    }}
                    exit={{
                        opacity: 0,
                        x: -100,
                    }}
                />
                <motion.div
                    className={styles.name}
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                        }
                    }}
                    exit={{
                        opacity: 0,
                        x: 100,
                    }}
                >
                    <h1 className={styles.title}>Страна<br />яблок</h1>
                    <button className={styles.buy}>Купить</button>
                </motion.div>
            </div>
        </div>
    )
}
