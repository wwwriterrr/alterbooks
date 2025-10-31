import { type FC } from 'react';
import { type IIconProps } from '../core/type';

export const SuccessAnimation: FC<IIconProps & {size?: number}> = ({
    size = 100,
    fill = '#28a745',
}) => {
    const circleRadius = size / 2 - 10; // Учитываем отступ
    const circumference = 2 * Math.PI * circleRadius;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={circleRadius}
                fill="none"
                stroke={fill}
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                style={{
                    animation: 'circle-animation 0.6s ease forwards',
                }}
            />
            <path
                d="M30 50 L45 65 L70 35"
                fill="none"
                stroke={fill}
                strokeWidth="5"
                strokeDasharray="60"
                strokeDashoffset="60"
                style={{
                    animation: 'check-animation 0.6s ease forwards 0.6s',
                }}
            />
            <style>
                {`
                    @keyframes circle-animation {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                    @keyframes check-animation {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
            </style>
        </svg>
    );
};
