import { type FC } from "react";
import { type IIconProps } from "../core/type";

interface IProps extends IIconProps {
    active?: boolean;
}

export const BurgerIcon: FC<IProps> = ({ size = 40, fill = '#000', active, strokeWidth=6 }) => (
    <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    style={{
        transform: active ? 'rotate(-45deg)' : 'rotate(0deg)',
        transition: "transform 400ms",
    }}
    >
        <g fill="transparent" strokeLinecap="round" strokeWidth={strokeWidth} stroke={fill}>
            <path
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                strokeDasharray="40 139"
                strokeDashoffset={active ? -98 : 0}
                style={{
                    transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
                }}
            />
            <path
                d="m 30,50 h 40"
            />
            <path
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                strokeDasharray="40 180"
                strokeDashoffset={active ? -138 : 0}
                style={{
                    transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
                }}
            />
        </g>
    </svg>
) 
