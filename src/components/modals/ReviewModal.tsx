import { 
    type ChangeEventHandler, 
    type FocusEventHandler,
    type FC, 
    useActionState, 
    useEffect, 
    useState, 
    useTransition, 
} from 'react';
import TextField from '@mui/material/TextField';
import styles from './ReviewModal.module.css';
import { useAppDispatch } from '../../services/store';
import { AppleSendReview } from '../../services/apple/actions';
// import { animateCloseModal } from '../../services/modal/slice';
import { SuccessAnimation } from '../../icons/success';

type TFormState = {
    error: null | string,
    success: boolean,
    name?: string,
    email?: string,
    title?: string,
    content?: string,
}

const initialState: TFormState = { error: null, success: false }

const allowedMailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'yandex.ru', 'ya.ru', 'mail.com', 'mail.ru'];

const emailRegex: RegExp = new RegExp(`^[^\\s@]+@(${allowedMailDomains.join('|')})$`);

const emailValidate = (email: string) => {
    if (emailRegex.test(email)) return true;
    else return false;
}

export const AppleReviewModal: FC = () => {
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailPending, startTransition] = useTransition();

    const dispatch = useAppDispatch();

    const submitHandler = async (prevState: TFormState, formData: FormData) => {
        console.log(prevState);

        const name = formData.get('name');
        const email = formData.get('email');
        const title = formData.get('title');
        const content = formData.get('content');

        if(!name || !email || !title || !content){
            return {
                error: 'Заполните обязательные поля!', 
                success: false,
                name,
                email,
                title,
                content,
            } as TFormState;
        }

        if(!emailValidate(email.toString())){
            setEmailError(true);
            return {
                error: 'Неверный формат email!', 
                success: false,
                name,
                email,
                title,
                content,
            } as TFormState;
        }

        // prevState.error = null;
        try {
            await dispatch(AppleSendReview({data: formData})).unwrap();
            // await dispatch(animateCloseModal(400));
            return { error: null, success: true } as TFormState;
        } catch (err) {
            console.error(err);
            return { 
                error: 'Error with send review', 
                success: false,
                name,
                email,
                title,
                content,
            } as TFormState;
        }
    }

    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = () => {
        startTransition(() => {
            setEmailError(false);
        })
    }

    const handleEmailFocus: FocusEventHandler<HTMLInputElement> = () => {
        startTransition(() => {
            setEmailError(false);
        })
    }

    const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        startTransition(() => {
            const email = e.target.value;
            if (emailValidate(email) || email === '') {
                setEmailError(false)
            } else {
                setEmailError(true);
            }
        })
    }

    const [state, submitAction, isPending] = useActionState(submitHandler, initialState);

    useEffect(() => {
        console.log(emailPending);
    }, [])

    return (
        <div className={styles.wrap}>
            {state.success ? (
                <div className={styles.success}>
                    <SuccessAnimation fill="#E9AA44" />
                    <div className={styles.success__text}>Рецензия успешно отправлена!</div>
                </div>
            ) : (
                <>
                    <form className={styles.form} action={submitAction}>
                        {state.error ? (
                            <div className={`${styles.row} ${styles.row_error}`}>
                                {state.error}
                            </div>
                        ) : null}
                        <div className={styles.row}>
                            <TextField
                                id="user-name"
                                label="Ваше имя"
                                variant="filled"
                                name="name"
                                fullWidth
                                required
                                disabled={isPending}
                                value={state.name}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="filled"
                                name="email"
                                fullWidth
                                required
                                disabled={isPending}
                                error={emailError}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                                onFocus={handleEmailFocus}
                                helperText={emailError ? 'Некорректно указан email' : undefined}
                                value={state.email}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextField
                                id="title"
                                label="Заголовок рецензии"
                                variant="filled"
                                name="title"
                                fullWidth
                                required
                                disabled={isPending}
                                value={state.title}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextField
                                id="review-content"
                                label="Текст рецензии"
                                variant="filled"
                                name="content"
                                fullWidth
                                multiline
                                rows={5}
                                required
                                disabled={isPending}
                                value={state.content}
                            />
                        </div>
                        <div className={styles.row}>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={isPending || emailError}
                            >{isPending ? (<>Отправка...</>) : <>Отправить</>}</button>
                        </div>
                    </form>
                </>)}
        </div>
    )
}
