import { type ReactElement, type FC } from 'react';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { 
    animateCloseModal, 
    getModalClass, 
    getModalContent, 
    getModalOpen, 
    getModalTitle 
} from '../../services/modal/slice';
import { motion, AnimatePresence } from 'motion/react';
import { CloseIcon } from '../../icons/close';

const Overlay = () => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(animateCloseModal(400));
    }

    return (
        <motion.div
            className={`modal__overlay ${styles.overlay}`}
            onClick={clickHandler}
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
                    ease: 'linear',
                }
            }}
        />
    )
}

const Modal = () => {
    const dispatch = useAppDispatch();

    const title = useAppSelector(getModalTitle);
    const content = useAppSelector(getModalContent);
    const modalClass = useAppSelector(getModalClass);

    const handleClose = () => {
        dispatch(animateCloseModal(400));
    }

    return (
        <div className={`modal ${styles.wrap} ${modalClass ? modalClass : ''}`}>
            <Overlay />
            <motion.div
                className={`modal__window ${styles.window}`}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .4,
                        delay: .1,
                        ease: 'easeOut',
                    }
                }}
                exit={{
                    opacity: 0,
                    y: -50,
                    transition: {
                        duration: .3,
                        delay: 0,
                        ease: 'linear',
                    }
                }}
            >
                <div className={`modal__head ${styles.head}`}>
                    <div className={`modal__title ${styles.title}`}>{title || 'Alterlit'}</div>
                    <button className={`modal__close ${styles.close}`} type="button" onClick={handleClose}>
                        <CloseIcon size={20} strokeWidth={4} />
                    </button>
                </div>
                <div className={`modal__content ${styles.content}`}>
                    {content}
                </div>
            </motion.div>
        </div>
    )
}

export const ModalHOC: FC<{ children?: ReactElement }> = ({ children }) => {
    const modalIsOpen = useAppSelector(getModalOpen);

    return (
        <>
            {children}
            <AnimatePresence>
                {modalIsOpen ? (
                    <Modal />
                ) : null}
            </AnimatePresence>
        </>
    )
}
