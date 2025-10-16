import styles from './styles.module.css';
import './index.css';
import { Navigation } from '../../components/nav';
import { IslandFirstScreen } from './screens/first';
import { IslandAbout } from './screens/about';
import { IslandReviews } from './screens/reviews';
import { IslandInfo } from './screens/info';

export const IslandBook = () => {
    const navItems = [
        { label: 'Главная', url: '#first' },
        { label: (<>Знакомство<br />с книгой</>), url: '#about' },
        { label: 'Отзывы', url: '#reviews' },
        { label: 'Презентация', url: '' },
    ]

    return (
        <div className={styles.page}>
            <Navigation
                items={navItems}
                className={styles.nav}
                color="#E9AA44"
            />
            <IslandFirstScreen />
            <IslandAbout />
            <IslandReviews />
            <IslandInfo />
        </div>
    )
}
