import React, {useEffect} from "react";
import '../styles/globals.css';
import {AppProps} from "next/app";
import Navbar from "../components/Navbar";

const isDevelopEnv = process.env.NODE_ENV === 'development';
const localApi = 'http://localhost:5200';
const productionApi = 'https://www.yvonnehzhu.com';
const apiUrl = isDevelopEnv ? localApi : productionApi;


interface VisitState {
    userAgent: string
    platform: string
    language: string
    referrer: string
    path: string
    timeZone: string
}


async function postLogUserVisit(params: VisitState) {
    const res = await fetch(`${apiUrl}/api/visits`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    // console.log(res);
}


export function logUserVisit() {
    const {userAgent, platform, language} = navigator;
    const request: VisitState = {
        userAgent, platform, language,
        referrer: document.referrer,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        path: location.href
    };
    postLogUserVisit(request);
}

function App({Component, pageProps}: AppProps) {

    useEffect(() => {
        logUserVisit();
    }, [])

    return (
        <main className={'font-serif flex min-h-screen flex-col justify-between'}>
            <Navbar/>
            <main style={{height: 'calc(100vh - 100px)', overflowY: 'auto'}}
                  className={'container mt-12 mx-auto px-10 md:px-20 py-10'}>
                <Component {...pageProps}/>
            </main>
            <div
                className={'relative flex flex-col left-0 right-0 bottom-0 w-full items-center text-sm text-[#3d405b]'}>
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