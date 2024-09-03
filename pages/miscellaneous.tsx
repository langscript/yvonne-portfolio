import React, {useEffect, useState} from "react";
import {Image} from "@nextui-org/image";
import dynamic from "next/dynamic";
import CustomCarousel from "../components/carousel/CustomCarousel";




const autoPlayTime: number = 5000;

const images = [
    '/yvonne.jpg',
    '/bjj.jpg',
    '/friends.jpg',
    '/people.jpg',
    '/students.jpg'
]

const slides = images.map((image, index) => ({
    key: index,
    content: (<Image src={image} alt={'index'} className={'inline-block w-full object-cover h-96'}/>)
}))

const Miscellaneous = () => {


    return (
        <div className={'animate-fade-in'}>
            <CustomCarousel
                cards={slides}
                height="500px"
                width="800px"
                margin="0 auto"
                offset={2}
                showArrows={false}
            />
        </div>
    )

}

export default Miscellaneous;