import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/applayout/layout";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/auth/signup";
import SignInPage from "./components/auth/signin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
