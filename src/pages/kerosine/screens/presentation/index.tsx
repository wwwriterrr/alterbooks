import styles from './styles.module.css';
import img1 from '../../../../assets/books/kerosine/1.png';
import img2 from '../../../../assets/books/kerosine/3.png';
import img3 from '../../../../assets/books/kerosine/10.png';

export const KerosinePresentation = () => {
    return (
        <div className={styles.wrap}>
            <img className={styles['image-1']} src={img1} alt="Kerosine Book image" />
            <img className={styles['image-2']} src={img2} alt="Title of the book" />
            <img className={styles['image-3']} src={img3} alt="Beetle zzz" />
        </div>
    )
}
