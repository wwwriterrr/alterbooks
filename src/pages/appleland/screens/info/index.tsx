import { BookFooter } from '../../../../components/bookFooter';
import img from '../../../../assets/books/appleland/4.png';
import img1 from '../../../../assets/books/appleland/b1.png';
import img2 from '../../../../assets/books/appleland/b2.png';
import img3 from '../../../../assets/books/appleland/b3.png';
import img4 from '../../../../assets/books/appleland/b4.png';
import styles from './styles.module.css';

const info = [
    {
        key: 'Автор:',
        value: 'Виталий Смышляев'
    },
    {
        key: 'Издательство:',
        value: '«Альтернативная литература»',
    },
    {
        key: 'ISBN:',
        value: '978-5-4219-0012-2',
    },
]

const buy = [
    {
        icon: img1,
        url: '#',
    },
    {
        icon: img2,
        url: '#',
    },
    {
        icon: img3,
        url: '#',
    },
    {
        icon: img4,
        url: '#',
    },
]

export const AppleInfo = () => {
    return (
        <div id="info" className={styles.screen}>
            <BookFooter
                cover={img}
                info={info}
                buy={buy}
                className={styles.footer}
            />
        </div>
    )
}
