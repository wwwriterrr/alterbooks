
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { type FC } from "react";
import { KerosineBook } from "./pages/kerosine";
import { IslandBook } from "./pages/island";

export const App: FC = () => {
    return (
        <div id="app" className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={"/island/"} />} />
                    <Route path="/kerosine/" element={<KerosineBook />} />
                    <Route path="/island/" element={<IslandBook />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

