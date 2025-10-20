import { useLocation } from "react-router-dom";
import { IslandBook } from "../island";
import { AppleBook } from "../appleland";
import { AnimatePresence } from "motion/react";

export const AppleRouter = () => {
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                {location.pathname === '/island/' ? (
                    <IslandBook key={'island_book'} />
                ) : location.pathname === '/appleland/' ? (
                    <AppleBook key={'apple_book'} />
                ) : (<>404</>)}
            </AnimatePresence>
        </>
    )
}
