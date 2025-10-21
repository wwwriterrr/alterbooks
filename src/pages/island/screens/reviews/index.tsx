import { type ReactElement } from 'react';
import styles from './styles.module.css';
import { motion } from 'motion/react';

type TReview = {
    name: string | ReactElement,
    review: string | ReactElement,
}

const reviews: TReview[] = [
    {
        name: 'Сергей Падалкин',
        review: (
            <>
                Офигеть. Ознакомительный фрагмент – отпад башки (или как там выражается восторг). И главное – читаешь и думаешь: всё ж на поверхности лежало, все мы подсознательно этого боялись! Такая прозрачность и простота...
            </>
        )
    },
    {
        name: 'Сергей Падалкин',
        review: (
            <>
                Офигеть. Ознакомительный фрагмент – отпад башки (или как там выражается восторг). И главное – читаешь и думаешь: всё ж на поверхности лежало, все мы подсознательно этого боялись! Такая прозрачность и простота...
            </>
        )
    },
    {
        name: 'Сергей Падалкин',
        review: (
            <>
                Офигеть. Ознакомительный фрагмент – отпад башки (или как там выражается восторг). И главное – читаешь и думаешь: всё ж на поверхности лежало, все мы подсознательно этого боялись! Такая прозрачность и простота...
            </>
        )
    },
]

export const IslandReviews = () => {
    return (
        <div id="reviews" className={styles.screen}>
            <div className={styles.wrap}>
                {reviews.map((item, i) => (
                    <motion.div 
                        className={styles.review} 
                        key={`review-${i}`}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                ease: 'easeOut',
                                delay: .2*i,
                            }
                        }}
                        viewport={{once: true}}
                    >
                        <h3 className={styles.review__name}>{item.name}</h3>
                        <div className={styles.review__content}>{item.review}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
