import { useLocation } from "react-router-dom";
import { IslandBook } from "../island";
import { AppleBook } from "../appleland";
import { AnimatePresence } from "motion/react";

export const AppleRouter = () => {
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                {/^\/island/.test(location.pathname) ? (
                    <IslandBook key={'island_book'} />
                ) : /^\/appleland/.test(location.pathname) ? (
                    <AppleBook key={'apple_book'} />
                ) : (<>Status 404</>)}
            </AnimatePresence>
        </>
    )
}
