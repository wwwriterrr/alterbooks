import { Link } from 'react-router-dom';
import img1 from '../../../../assets/books/island/2.png';
import img2 from '../../../../assets/books/island/b1.png';
// import img3 from '../../../../assets/books/island/b2.png';
// import img4 from '../../../../assets/books/island/b3.png';
// import img5 from '../../../../assets/books/island/b4.png';
import styles from './styles.module.css';
import { motion } from 'motion/react';

const animDuration = .6;

export const IslandInfo = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <motion.img
                    className={styles.book}
                    src={img1}
                    alt="book image"
                    initial={{
                        opacity: 0,
                        x: -200,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: animDuration,
                            ease: 'easeOut',
                            delay: .1,
                        }
                    }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className={styles.info}
                    initial={{
                        opacity: 0,
                        x: 200,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: animDuration,
                            ease: 'easeOut',
                            delay: .1,
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>ИЗДАТЕЛЬСТВО:</div>
                        <div className={styles.info__value}>«Альтернативная литература»</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>АВТОР:</div>
                        <div className={styles.info__value}>Виталий Смышляев</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>ISBN:</div>
                        <div className={styles.info__value}>9785421900221</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>ФОРМАТ:</div>
                        <div className={styles.info__value}>60x90/16 мм</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>ПЕРЕПЛЁТ:</div>
                        <div className={styles.info__value}>твёрдый</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>СТРАНИЦ:</div>
                        <div className={styles.info__value}>368</div>
                    </div>
                    <div className={styles.info__row}>
                        <div className={styles.info__key}>ПРИОБРЕТАЙТЕ КНИГУ:</div>
                    </div>
                    <div className={styles.info__buy}>
                        <Link to={'https://alterlit.net/magazin/product/apple_island'} >
                            <img src={img2} alt="buy" />
                        </Link>
                        {/* <Link to={'#'} >
                            <img src={img3} alt="buy" />
                        </Link>
                        <Link to={'#'} >
                            <img src={img4} alt="buy" />
                        </Link>
                        <Link to={'#'} >
                            <img src={img5} alt="buy" />
                        </Link> */}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
