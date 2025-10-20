import { useActionState } from 'react';

type TForm = {
    name: string,
    password: string,
}

const handler = async (prevState: unknown, formData: FormData) => {
    try{
        console.log('handle', prevState, formData);

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return { success: true, message: 'Ok!' };
    } catch (err) {
        return { success: false, message: err };
    }
}

export const IslandTestScreen = () => {
    const initialState: TForm = {
        name: '',
        password: '',
    }

    const [currentState, actionFunction, isPending] = useActionState(handler, initialState);

    console.log(currentState);

    return (
        <form action={actionFunction}>
            <input name="name" />
            <input name="password" />
            <button type="submit" disabled={isPending}>{isPending ? 'Pending...' : 'Send'}</button>
        </form>
    )
}
