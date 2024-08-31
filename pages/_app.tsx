import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";

function App({Component, pageProps} : AppProps){

    return (
        <main className={'flex min-h-screen flex-col bg-[#f4f1de]'}>
            <Navbar/>
            <main className={'container mt-24 mx-auto px-12 py-4'}>
                <Component {...pageProps}/>
            </main>
        </main>
    )
}

export default App;