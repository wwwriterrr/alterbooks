import img1 from '../../../../assets/books/kerosine/6.jpg';
import img2 from '../../../../assets/books/kerosine/7.jpg';
import img3 from '../../../../assets/books/kerosine/8.jpg';
import img4 from '../../../../assets/books/kerosine/9.jpg';
import img5 from '../../../../assets/books/kerosine/5.jpg';
import styles from './styles.module.css';

export const KerosineAuthor = () => {
    const content = (
        <>
            Макс Акиньшин — живёт и работает в России. Автор двух романов и нескольких циклов рассказов. Все его произведения наполнены грустной иронией и сарказмом. Типажи героев легко узнаваемы, ведь они взяты из жизни, из реальности, которая нас окружает. Пусть это даже сварливый алкоголик-дракон, начальник отдела расследований гарифуна Мобалеку или мёртвый закрочимский десятник пан Вуху. Они злятся, грустят, пытаются решить проблемы, радуются и любят. С такими людьми мы сталкиваемся на улице, дома, на работе.
            <br />
            <br />
            Автор легко смешивает жанры: сказка, фэнтези, реализм, любовный роман, детектив или приключения. Определить к чему относится то или иное его произведение трудно. Каждый читатель выбирает то, что ему придётся по вкусу.
        </>
    )

    return (
        <div id="authors" className={styles.screen}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Об авторе</h2>
                    <div className={styles.content}>{content}</div>
                </div>
            </div>
            <div className={styles.images}>
                <img className={styles['image-1']} src={img1} alt="Image from book" />
                <img className={styles['image-2']} src={img2} alt="Image from book" />
                <img className={styles['image-3']} src={img3} alt="Image from book" />
                <img className={styles['image-4']} src={img4} alt="Image from book" />
                <img className={styles['image-5']} src={img5} alt="Image from book" />
            </div>
        </div>
    )
}