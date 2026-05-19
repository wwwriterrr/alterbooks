import { ReactElement, type FC } from 'react';
import img1 from '../../../../assets/books/appleland/a2.jpg';
import { motion } from 'motion/react';
import styles from './styles.module.css';
import { ArrowIcon } from '../../../../icons/arrow';

type TCritique = {
    author: string | ReactElement,
    content: string | ReactElement,
    url: string,
}

const critique: TCritique[] = [
    {
        author: 'Владимир Третьяк',
        content: (<>
            «Вид сбоку на Страну Яблок»
        </>),
        url: '#',
    },
    {
        author: 'Иван Голубничий',
        content: (<>
            «Враг, который внутри»
        </>),
        url: '#',
    },
    {
        author: 'Евгений Гешин',
        content: (<>
            «Коммент к креативу Базуки  "Страна Яблок"»
        </>),
        url: '#',
    },
    {
        author: 'ПТУ-2006',
        content: (<>
            «Страна яблок»
        </>),
        url: '#',
    },
    {
        author: 'Лев Рыжков',
        content: (<>
            «Страна яблок»
        </>),
        url: '#',
    },
    {
        author: 'Толич',
        content: (<>
            «Эпоха – крах трансгуманизма и либерализма»
        </>),
        url: '#',
    },
]

export const AppleCritiqueScreen: FC = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                {critique.map((item, i) => (
                    <motion.a
                        href={item.url}
                        target="_blank"
                        className={styles.item}
                        key={`critique-${i}`}
                        initial={{
                            opacity: 0,
                            x: [0, 2, 5].includes(i) ? -100 : 100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .4,
                                ease: 'easeOut',
                                delay: .1 * i,
                            }
                        }}
                    >
                        <h2 className={styles.item__author}>{item.author}</h2>
                        <h3 className={styles.item__title}>{item.content}</h3>
                        <i className={styles.item__icon}>
                            <ArrowIcon size={30} fill="#FFB43B" direction="right" />
                        </i>
                    </motion.a>
                ))}
                <motion.img
                    className={styles.image}
                    src={img1}
                    alt="Appleland art image"
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: .4,
                            ease: 'easeOut',
                            delay: .6,
                        }
                    }}
                />
            </div>
        </div>
    )
}
