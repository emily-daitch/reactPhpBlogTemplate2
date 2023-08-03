import * as React from "react";
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";

import SinglePost from '../blogComponents/SinglePost';

const Resume = lazy(() => import(/* webpackChunkName: "resume" */ '../Pages/Resume'));
const Calendar = lazy(() => import(/* webpackChunkName: "calendar" */ '../Pages/Calendar'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ '../Pages/Contact'));
const Main = lazy(() => import(/* webpackChunkName: "home" */ '../Main'));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ '../blogComponents/NotFound'));
const NavBar = lazy(() => import(/* webpackChunkName: "navbar" */ '../blogComponents/NavBar'));

import { ThemeProvider } from "../blogComponents/ThemeContext";

export function App() {

    return (
        <ThemeProvider>
        <CssBaseline />

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/resume" element={<Resume />}/>
                    <Route path="/calendar" element={<Calendar />}/>
                    <Route path=":slug" element={<SinglePost />}/>
                    <Route path="/404" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}