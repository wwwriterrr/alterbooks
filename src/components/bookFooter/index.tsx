import {
    type ReactElement,
    type FC,
    type HTMLProps
} from 'react';
import styles from './styles.module.css';

type TProps = {
    cover: string,
    info: {
        key: string | ReactElement,
        value: string | ReactElement
    }[],
    buy?: {
        icon: string,
        url: string,
    }[]
} & HTMLProps<HTMLDivElement>

export const BookFooter: FC<TProps> = ({ cover, info, buy, className, ...props }) => {
    return (
        <div className={`book-footer ${styles.container} ${className ? className : ''}`} {...props}>
            <div className={`book-footer__wrap ${styles.wrap}`}>
                <img className={`book-footer__cover ${styles.cover}`} src={cover} alt="Book cover" />
                <div className={`book-footer__info ${styles.info}`}>
                    {info.map((row, i) => (
                        <div className={`book-footer__info__row ${styles.info__row}`} key={`info_row-${i}`}>
                            <div className={`book-footer__info__key ${styles.info__key}`}>{row.key}</div>
                            <div className={`book-footer__info__value ${styles.info__value}`}>{row.value}</div>
                        </div>
                    ))}
                    {buy?.length ? (
                        <>
                            <div className={`book-footer__info__row ${styles.info__row}`}>
                                <div className={`book-footer__info__key ${styles.info__key}`}>Приобретайте книгу:</div>
                            </div>
                            <div className={`book-footer__info__buy ${styles.info__buy}`}>
                                {buy.map((item, i) => (
                                    <a
                                        className={`book-footer__info__buy__link ${styles.info__buy__link}`}
                                        href={item.url} target="_blank"
                                        key={`b_f_buy-${i}`}
                                    >
                                        <img
                                            className={`book-footer__info__buy__icon ${styles.info__buy__icon}`}
                                            src={item.icon}
                                            alt="Buy magazine icon"
                                        />
                                    </a>
                                ))}
                            </div>
                        </>
                    ) : null
                    }
                </div>
            </div>
        </div>
    )
}
