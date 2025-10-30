import { ChangeEventHandler, FocusEventHandler, useActionState, useEffect, useState, useTransition, type FC } from 'react';
import TextField from '@mui/material/TextField';
import styles from './ReviewModal.module.css';

type TFormState = {
    error: null | string,
}

const initialState: TFormState = { error: null }

const allowedMailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'yandex.ru', 'ya.ru', 'mail.com', 'mail.ru'];

const emailRegex: RegExp = new RegExp(`^[^\\s@]+@(${allowedMailDomains.join('|')})$`);

const emailValidate = (email: string) => {
    if (emailRegex.test(email)) return true;
    else return false;
}

export const AppleReviewModal: FC = () => {
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailPending, startTransition] = useTransition();

    const submitHandler = async (prevState: TFormState, formData: FormData) => {
        console.log(formData.get('name'));

        // prevState.error = null;

        return { error: null }
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
        </div>
    )
}
