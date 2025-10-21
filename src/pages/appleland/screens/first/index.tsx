import img1 from '../../../../assets/books/appleland/0.png';
import img2 from '../../../../assets/books/appleland/1.png';
import { ChangePageButton } from '../../../../components/changePageButton';
import { Navigation } from '../../../../components/nav';
import styles from './styles.module.css';

export const AppleFirstScreen = () => {
    const navItems = [
        { label: (<>Знакомство<br />с книгой</>), url: '#first' },
        { label: 'Арты', url: '#arts' },
        { label: 'Отзывы', url: '#reviews' },
        { label: (<>Отправить<br />рецензию</>), url: '#send-review' },
        { label: 'Презентация', url: '#present' },
    ]

    return (
        <div id="first" className={styles.screen}>
            <Navigation
                items={navItems}
                className={styles.nav}
                color="#E9AA44"
                afterItems={<ChangePageButton />}
            />
            <div className={styles.wrap}>
                <img className={styles.cover} src={img2} alt="Book cover" />
                <div className={styles.name}>
                    <h1 className={styles.title}>Страна<br />яблок</h1>
                    <button className={styles.buy}>Купить</button>
                </div>
            </div>
            <div className={styles.backgr}>
                <img className={styles.backgr__image} src={img1} alt="Appleland background" />
            </div>
        </div>
    )
}
