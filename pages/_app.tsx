import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";

function App({Component, pageProps} : AppProps){

    return (
        <main className={'font-serif flex min-h-screen flex-col'}>
            <Navbar/>
            <main className={'container mt-24 mx-auto px-10 md:px-20 py-10'}>
                <Component {...pageProps}/>
            </main>
        </main>
    )
}

export default App;