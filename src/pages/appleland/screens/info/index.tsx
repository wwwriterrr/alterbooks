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
        url: 'https://alterlit.net/magazin/product/strana_yablok',
    },
    {
        icon: img2,
        url: 'https://www.litres.ru/vitaliy-smyshlyaev/strana-yablok/',
    },
    {
        icon: img3,
        url: 'https://www.ozon.ru/product/strana-yablok-smyshlyaev-vitaliy-653875325/?asb=v8CVWILBycmSBwMOjYP%252BKly%252BBBG85ilb%252Fa2a48m%252Bls4%253D&asb2=Q3ejzEF_NYEg47ZY2EhOdBgKUvzjCBEHY_OPN8JFpmhdwlRRiuR69_U4uNd9Jm1a&keywords=%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0+%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA&sh=bQYKiPJokg',
    },
    {
        icon: img4,
        url: 'https://market.yandex.ru/product--smyshliaev-vitalii-strana-iablok/1452654965?text=%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0%20%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE&cpa=1&cpc=3pTFpz8_WztSEyzxgCrt4QNFgoM-4EaqfXDh8Lbyyrj5862Tl4FoxwohY72BzaHwmRpq-DMv_hu5AQy4x3UjQSOWD16Js6_1vsKVaxuPorr8NpXRzm3wF5vDmfLOh2fp8IHZIQUXNcbvbEcHPcbE5a2anVoGwm2gcY8EfBKAemr8XyHQpcmZWg%2C%2C&sku=101467312375&do-waremd5=wBZDUb5jenG1qzSxxNUt7g&nid=20598910',
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
