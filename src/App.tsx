import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { type FC } from "react";
import { KerosineBook } from "./pages/kerosine";
import { IslandBook } from "./pages/island";
import { AppleBook, AppleIndex } from "./pages/appleland";
import { AnimatePresence } from "motion/react";
import { AppleArtsPage } from "./pages/appleland/pages/arts";
import { AppleReviewsPage } from "./pages/appleland/pages/reviews";
import { AppleCritiquePage } from "./pages/appleland/pages/critique";
import { Provider } from 'react-redux';
import { store } from "./services/store";
import { ModalHOC } from "./HOC/modal";
import { AppleMeetingPage } from "./pages/appleland/pages/meeting";

const getAnimationKey = (pathname: string): string => {
    // Для всех роутов appleland возвращаем один ключ
    if (pathname.startsWith('/appleland')) {
        return '/appleland';
    }
    
    // Для остальных роутов используем полный путь
    return pathname;
};

const AnimatedRoutes: FC = () => {
    const location = useLocation();
    const animationKey = getAnimationKey(location.pathname);
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={animationKey}>
                <Route path="/" element={<Navigate to={"/island/"} />} />
                <Route path="kerosine" element={<KerosineBook />} />
                <Route path="island" element={<IslandBook />} />
                <Route path="appleland" element={<AppleBook />} >
                    <Route path="" element={<AppleIndex />} />
                    <Route path="arts" element={<AppleArtsPage />} />
                    <Route path="reviews" element={<AppleReviewsPage />} />
                    <Route path="critique" element={<AppleCritiquePage />} />
                    <Route path="meeting" element={<AppleMeetingPage />} />
                </Route>
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </AnimatePresence>
    );
};

export const App: FC = () => {
    return (
        <div id="app" className="App">
            <Provider store={store}>
                <ModalHOC />
                <BrowserRouter>
                    <AnimatedRoutes />
                </BrowserRouter>
            </Provider>
        </div>
    );
};
