import { createAsyncThunk } from '@reduxjs/toolkit';

export const AppleSendReview = createAsyncThunk(
    'apple/sendReview',
    async ({data}: {data: FormData}, {rejectWithValue}) => {
        try{
            const response = await fetch(`https://alterlit.ru/api/v1/apple/review/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'application/json',
                },
                body: data,
            })

            if(!response.ok){
                return rejectWithValue(`Error with send review. Code: ${response.status}`);
            }

            return;
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
