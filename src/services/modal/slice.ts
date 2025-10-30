import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

type TModalContent = string | ReactElement | null;

type TInitialState = {
    isOpen: boolean,
    title: TModalContent,
    content: TModalContent,
    className: string | null,
}

const initialState: TInitialState = {
    isOpen: false,
    title: null,
    content: null, 
    className: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalTitle: (state, action: PayloadAction<TModalContent>) => {
            state.title = action.payload;
        },
        setModalContent: (state, action: PayloadAction<TModalContent>) => {
            state.content = action.payload;
        },
        setModalClass: (state, action: PayloadAction<string | null>) => {
            state.className = action.payload;
        },
        setModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        openModal: (state, action: PayloadAction<{content: string | ReactElement, title?: string | ReactElement, className?: string}>) => {
            state.content = action.payload.content;
            if(action.payload.title){
                state.title = action.payload.title;
            }
            if(action.payload.className){
                state.className = action.payload.className;
            }
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.content = null;
            state.title = null;
            state.className = null;
        },
        animateCloseModal: (state, action: PayloadAction<number>) => {
            state.isOpen = false;
            setTimeout(() => {
                state.content = null;
                state.title = null;
                state.className = null;
            }, action.payload)
        },
    },
    selectors: {
        getModalTitle: state => state.title,
        getModalContent: state => state.content,
        getModalClass: state => state.className,
        getModalOpen: state => state.isOpen,
    }
});

export const {
    setModalClass,
    setModalContent,
    setModalTitle,
    setModalOpen,
    openModal,
    closeModal,
    animateCloseModal,
} = modalSlice.actions;

export const { 
    getModalClass,
    getModalContent,
    getModalTitle,
    getModalOpen,
} = modalSlice.selectors;

export type TModalInternalActions = ReturnType<typeof modalSlice.actions[keyof typeof modalSlice.actions]>;
