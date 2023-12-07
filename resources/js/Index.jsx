import React from "react";
import ReactDOM from "react-dom/client";
import './app';
import Parallax from "./components/Parallax";

function Index() {
    return (
        <>
            <Parallax />
        </>
    );
}

export default Index;

if (document.getElementById("welcome")) {
    const index = ReactDOM.createRoot(document.getElementById("welcome"));

    index.render(
        <React.StrictMode>
            <Index />
        </React.StrictMode>
    );
}
