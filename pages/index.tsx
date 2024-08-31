import React from "react";
import {GetStaticProps} from "next";

type AboutProps = {
    data: string;
};

// export const getStaticProps: GetStaticProps<AboutProps> = async () => {
//     // 模拟数据获取
//     const data = 'This is the fetched data';
//
//     return {
//         props: {
//             data,
//         },
//     };
// };


const About = () => {

    return (
        <div>
            <h1>About me</h1>
        </div>
    )
}

export default About;