import { type FC } from 'react';
import img1 from '../../../../assets/books/appleland/a1.jpg';
import img2 from '../../../../assets/books/appleland/a2.jpg';
import img3 from '../../../../assets/books/appleland/a3.jpg';
import img4 from '../../../../assets/books/appleland/a4.jpg';
import img5 from '../../../../assets/books/appleland/a5.jpg';
import img6 from '../../../../assets/books/appleland/a6.png';
import {motion} from 'motion/react';
import styles from './styles.module.css';

export const AppleArtsList: FC = () => {
    return (
        <div className={styles.arts}>
            {[img1, img2, img3, img4, img5, img6].map((item, i) => (
                <motion.img
                    className={styles.art}
                    src={item}
                    alt="Appleland art"
                    key={`art-${i}`}
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .6,
                            ease: 'easeOut',
                            delay: .2*i,
                        }
                    }}
                    exit={{
                        opacity: 0,
                        y: -50,
                        transition: {
                            duration: .3,
                            ease: 'easeOut',
                            delay: .1*i,
                        }
                    }}
                />
            ))}
        </div>
    )
}
