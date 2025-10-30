import { type FC } from 'react';
import { IIconProps } from '../core/type';

export const CloseIcon: FC<IIconProps> = ({size=24, fill='#000', strokeWidth=2}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
)
