import { combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { modalSlice, TModalInternalActions } from './modal/slice';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const rootReducer = combineReducers({
    [modalSlice.reducerPath]: modalSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

type TApplicationActions = TModalInternalActions

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
