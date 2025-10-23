import { type FC } from 'react';
import { AppleBottomNavigation, AppleNavigation } from '../..';
import { AppleCritiqueScreen } from '../../screens/critique';

export const AppleCritiquePage: FC = () => {
    return (
        <>
            <AppleNavigation />
            <AppleCritiqueScreen />
            <AppleBottomNavigation />
        </>
    )
}
