import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";

function App({Component, pageProps}: AppProps) {

    return (
        <main className={'font-serif flex min-h-screen flex-col justify-between'}>
            <Navbar/>
            <main style={{height: 'calc(100vh - 100px)', overflowY: 'auto'}} className={'container mt-12 mx-auto px-10 md:px-20 py-10'}>
                <Component {...pageProps}/>
            </main>
            <div className={'relative flex flex-col left-0 right-0 bottom-0 w-full items-center text-sm text-[#3d405b]'}>
                <div>
                    &copy; {new Date().getFullYear()} Yvonne Zhu.
                </div>
                <div>
                    Last updated September 9, 2024
                </div>
            </div>
        </main>
    )
}

export default App;