import { motion } from 'motion/react';
import styles from './styles.module.css';
import './index.css';
import { AppleFirstScreen } from './screens/first';
import { AppleAbout } from './screens/about';
import { AppleReviews } from './screens/reviews';
import { AppleAuthor } from './screens/author';
import { AppleInfo } from './screens/info';
import { Navigation, TNavItem } from '../../components/nav';
import { Outlet, useLocation } from 'react-router-dom';
import { type ReactElement, type FC, useEffect } from 'react';
import { ChangePageButton } from '../../components/changePageButton';

export const ApplePageContainer: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <motion.div
            className={styles.page}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                }
            }}
        >
            {children}
        </motion.div>
    )
}


export const AppleIndex = () => {
    return (
        <>
            <AppleNavigation />
            <AppleFirstScreen />
            <AppleAbout />
            <AppleReviews />
            <AppleAuthor />
            <AppleInfo />
            <AppleBottomNavigation />
        </>
    )
}

const navItems: TNavItem[] = [
    { label: (<>Знакомство<br />с книгой</>), url: '/appleland/' },
    { label: 'Арты', url: '/appleland/arts/' },
    { 
        label: 'Отзывы', 
        url: '', 
        child: [
            {label: 'Отзывы читателей', url: '/appleland/reviews/'},
            {label: 'Критика', url: '/appleland/critique/'},
        ] 
    },
    { label: (<>Отправить<br />рецензию</>), url: '#send-review' },
    {
        label: 'Презентация',
        url: '#',
        onClick: () => {
            console.log('open modal');
        }
    },
]

const bottomNavItems: TNavItem[] = navItems.map(item => {
    // Если это пункт "Отзывы", добавляем childPosition: 'top'
    if (item.label === 'Отзывы') {
        return {
            ...item,
            childPosition: 'top'
        };
    }
    // Остальные пункты возвращаем без изменен��й
    return item;
});

export const AppleNavigation = () => {
    return (
        <Navigation
            items={navItems}
            className={styles.nav}
            color="#E9AA44"
            afterItems={<ChangePageButton />}
        />
    )
}

export const AppleBottomNavigation = () => {
    return (
        <Navigation
            items={bottomNavItems}
            className={styles.nav_bottom}
            color="#E9AA44"
            showLogo={false}
        />
    )
}

export const AppleBook = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.hash === '#send-review'){
            console.log('Open modal')
        }
    }, [location])

    return (
        <motion.div
            className={styles.page}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: .6,
                    ease: 'easeOut',
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: .3,
                    ease: 'easeOut',
                }
            }}
        >
            <Outlet />
        </motion.div>
    )
}
