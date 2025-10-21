import { type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import styles from './styles.module.css';
import { AppleIcon } from '../../icons/apple';

export const ChangePageButton: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        if (location.pathname === '/island/') {
            navigate('/appleland/');
        } else {
            navigate('/island/');
        }
    }

    return (
        <div
            className={styles.wrap}
        >
            <button
                className={styles.btn}
                onClick={clickHandler}
            >
                {location.pathname === '/island/' ? (
                    <motion.i
                        className={styles.icon}
                        layoutId="changeIcon"
                    >
                        <AppleIcon fill="#E9AA44" />
                    </motion.i>
                ) : null}
            </button>
            <button
                className={styles.btn}
                onClick={clickHandler}
            >
                {location.pathname === '/appleland/' ? (
                    <motion.i
                        className={styles.icon}
                        layoutId="changeIcon"
                    >
                        <AppleIcon fill="#E9AA44" />
                    </motion.i>
                ) : null}
            </button>
        </div>
    )
}
