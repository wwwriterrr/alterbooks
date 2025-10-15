import { Navigation } from '../../components/nav';
import styles from './styles.module.css';
import './index.css';
import { KerosinePresentation } from './screens/presentation';
import { KerosineAbout } from './screens/about';
import { KerosineAuthor } from './screens/author';
import { KerosineReviews } from './screens/reviews';
import { KerosineBuy } from './screens/buy';

export const KerosineBook = () => {
    const nav = [
        {label: 'О книге', url: '#about'},
        {label: 'Авторы', url: '#authors'},
        {label: 'Отзывы', url: '#reviews'},
        {label: 'Где купить', url: '#buy'},
        {label: 'Презентация', url: '#preview'},
    ]

    return (
        <div className={styles.wrap}>
            <Navigation className={styles.nav_top} items={nav} />
            <KerosinePresentation />
            <KerosineAbout />
            <KerosineAuthor />
            <KerosineReviews />
            <KerosineBuy />
            <Navigation className={styles.nav_bottom} items={nav} />
        </div>
    )
}
