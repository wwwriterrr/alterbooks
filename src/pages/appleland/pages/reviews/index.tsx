import { type FC } from 'react';
// import styles from './styles.module.css';
import { AppleBottomNavigation, AppleNavigation } from '../..';
import { AppleReviewsList } from '../../screens/pageReviews';

export const AppleReviewsPage: FC = () => {
    return (
        <>
            <AppleNavigation />
            <AppleReviewsList />
            <AppleBottomNavigation />
        </>
    )
}
