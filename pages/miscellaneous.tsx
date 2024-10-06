import React from "react";
import {Image} from "@nextui-org/image";
import CustomCarousel from "../components/carousel/CustomCarousel";


const autoPlayTime: number = 5000;

const images = [
    '/coach.jpg',
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
        <div className={'flex flex-col gap-4 w-full md:w-fit'}>
            <p className={'font-bold text-xl'}>Hobbies</p>
            <div className={'text-lg'}>• Brazilian Jiu-jitsu</div>
            <div className={'flex flex-col md:flex-row justify-between gap-2 md:gap-24 md:items-center w-full'}>
                <span className={'italic'}>"Jiu-jitsu is personal efficiency to protect the weaker, which anyone can do. It is the force of
                        leverage against brute force."</span>
                <span className={'self-end md:self-center'}>- Helio Gracie</span>
            </div>
            <div className={'flex flex-col md:flex-row justify-between gap-2 md:gap-24 md:items-center w-full'}>
                <span className={'italic'}>“A strong body is a good asset. A strong mind is a very good asset.”</span>
                <span className={'self-end md:self-center'}>- Rickson Gracie</span>
            </div>

            <div className={'animate-fade-in ml-[15vw] md:mx-auto md:my-0 w-[70vw] md:w-[40vw]'}>
                <CustomCarousel
                    cards={slides}
                    height="400px"
                    width="100%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                />
            </div>
            <div className={'text-lg'}>• Pilates</div>
            <div className={'flex flex-col md:flex-row justify-between gap-2 md:gap-24 md:items-center w-full'}>
                <span className={'italic'}>“Pilates is complete coordination of body, mind and spirit.”</span>
                <span className={'self-end md:self-center'}>- Joseph Pilates</span>
            </div>
        </div>
    )

}

export default Miscellaneous;