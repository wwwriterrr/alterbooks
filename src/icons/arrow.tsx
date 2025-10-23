import { type FC } from 'react';
import { type IIconProps } from '../core/type';

export const ArrowIcon: FC<IIconProps & {direction?: 'up' | 'left' | 'right' | 'down'}> = ({size=16, fill='#000', direction='up'}) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 
                direction === 'up' ? 'rotate(180deg)' 
                : direction === 'left' ? 'rotate(90deg)' 
                : direction === 'right' ? 'rotate(-90deg)' 
                : 'rotate(0deg)'
            }}
        >
            <path 
                d="M4 6L8 10L12 6" 
                stroke={fill} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}
