import styles from './styles.module.css'

type TReview = {
    name: string | JSX.Element,
    review: string | JSX.Element,
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
        <div className={styles.screen}>
            <div className={styles.wrap}>
                {reviews.map((item, i) => (
                    <div className={styles.review} key={`review-${i}`}>
                        <h3 className={styles.review__name}>{item.name}</h3>
                        <div className={styles.review__content}>{item.review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
