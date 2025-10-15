import img1 from '../../../../assets/books/kerosine/1_1.png';
import img2 from '../../../../assets/books/kerosine/b1.png';
import img3 from '../../../../assets/books/kerosine/b2.png';
import img4 from '../../../../assets/books/kerosine/b3.png';
import img5 from '../../../../assets/books/kerosine/b4.png';
import styles from './styles.module.css';

export const KerosineBuy = () => {
    return (
        <div id="buy" className={styles.screen}>
            <div className={styles.wrap}>
                <img className={styles.image} src={img1} alt="Book image" />
                <div className={styles.right}>
                    <ul className={styles.info}>
                        <li className={styles.info__row}>
                            <div className={styles.info__title}>АВТОР:</div>
                            <div className={styles.info__value}>Макс Акиньшин</div>
                        </li>
                        <li className={styles.info__row}>
                            <div className={styles.info__title}>ИЗДАТЕЛЬСТВО:</div>
                            <div className={styles.info__value}>«Альтернативная литература»</div>
                        </li>
                        <li className={styles.info__row}>
                            <div className={styles.info__title}>ISBN:</div>
                            <div className={styles.info__value}>9785421900207</div>
                        </li>
                        <li className={styles.info__row}>
                            <div className={styles.info__title}>ПРИОБРЕТАЙТЕ КНИГУ:</div>
                        </li>
                        <li className={styles.buy__list}>
                            <a href="#">
                                <img src={img2} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={img3} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={img4} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={img5} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
