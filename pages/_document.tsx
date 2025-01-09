// pages/_document.js
import {Head, Html, Main, NextScript} from 'next/document'

export default function MyDocument() {
    return (
        <Html>
            <Head>
                {/* Example: Inserting a custom script */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                <title>Yvonne Zhu</title>
                <meta name="keywords" content="Yvonne Zhu, YvonneZhu, yvonnezhu, Yvonne, huijun zhu, zhuhuijun, zhu huijun">
                <meta name="google-site-verification" content="_H3bIKp7Rjm2WGkl62u65-k_weLOpTxlmjcR5TqtrvE" />
                <meta name="google-site-verification" content="xklZOG1Ldoup7-bEP5_qZYSG6RnJFi93Eyu2T21lzn0" />
            `,
                    }}
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
