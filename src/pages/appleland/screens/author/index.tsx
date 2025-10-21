import img from '../../../../assets/books/appleland/3.png';
import styles from './styles.module.css';

const text = (<>
    Написав в России и о России две повести, киносценарий и множество рассказов, он неожиданно исчез. Объявился он также неожиданно, но уже в Индокитае. За последние три года распутана история Изумрудного Будды в Серебряной пагоде Пномпеня, опубликованы материалы о великом русском ориенталисте Викторе Голубеве. В планах стоит разгадать хотя бы одну тайну древнего Ангкора.
</>)

export const AppleAuthor = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <img className={styles.img} src={img} alt="Виталий Смышляев" />
                <div className={styles.content}>
                    <h3 className={styles.name}>Виталий<br />Смышляев</h3>
                    <div className={styles.text}>{text}</div>
                </div>
            </div>
        </div>
    )
}
