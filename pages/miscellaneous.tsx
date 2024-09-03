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
    content: (<Image src={image} alt={'index'} className={'inline-block w-[50vw] object-cover h-96'}/>)
}))

const Miscellaneous = () => {


    return (
        <div className={'animate-fade-in ml-[15vw] md:mx-auto md:my-0 w-[70vw] md:w-[40vw]'}>
            <CustomCarousel
                cards={slides}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={2}
                showArrows={false}
            />
        </div>
    )

}

export default Miscellaneous;