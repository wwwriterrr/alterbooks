import img1 from '../../../../assets/books/island/1.png';
import img2 from '../../../../assets/books/island/3.png';
import img3 from '../../../../assets/books/island/4.png';
import styles from './styles.module.css';

export const IslandFirstScreen = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <img className={styles.book} src={img1} alt="Book image" />
                <div className={styles.right}>
                    <img className={styles.island} src={img2} alt="остров" />
                    <img className={styles.apples} src={img3} alt="яблок" />
                </div>
            </div>
        </div>
    )
}
