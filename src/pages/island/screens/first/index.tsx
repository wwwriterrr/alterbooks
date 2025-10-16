import img1 from '../../../../assets/books/island/1.png';
import img2 from '../../../../assets/books/island/3.png';
import img3 from '../../../../assets/books/island/4.png';
import styles from './styles.module.css';
import { motion } from 'motion/react';

export const IslandFirstScreen = () => {
    return (
        <div id="first" className={styles.screen}>
            <div className={styles.wrap}>
                <motion.img
                    className={styles.book}
                    src={img1}
                    alt="Book image"
                    initial={{
                        opacity: 0,
                        x: -200,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                            delay: .3,
                        }
                    }}
                    viewport={{ once: true }}
                />
                <div className={styles.right}>
                    <motion.img
                        className={styles.island}
                        src={img2}
                        alt="остров"
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                                ease: 'easeOut',
                                delay: .3,
                            }
                        }}
                        viewport={{ once: true }}
                    />
                    <motion.img
                        className={styles.apples}
                        src={img3}
                        alt="яблок"
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .6,
                                ease: 'easeOut',
                                delay: .5,
                            }
                        }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </div>
    )
}
