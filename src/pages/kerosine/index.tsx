import { Navigation } from '../../components/nav';
import styles from './styles.module.css';
import './index.css';
import { KerosinePresentation } from './screens/presentation';

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
            <Navigation items={nav} />
            <KerosinePresentation />
        </div>
    )
}
