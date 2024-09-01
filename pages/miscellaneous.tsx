import React, {useEffect, useState} from "react";


const autoPlayTime: number = 5000;

const images = [
    '/yvonne.jpg',
    '/bjj.jpg',
    '/friends.jpg'
]

const Miscellaneous = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // 自动播放的useEffect钩子
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, autoPlayTime);

        return () => clearInterval(interval);
    }, [images.length, autoPlayTime]);

    // 切换到特定图片
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // 上一张图片
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // 下一张图片
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={'animate-fade-in'}>
            <div className="relative w-full max-w-2xl max-h-[600px] h-full perspective">
                <style>
                    {
                        `
                             .card {
                    position: absolute;
                    width: 60%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    margin: auto;
                    transition: transform 0.4s ease;
                    cursor: pointer;
                }

                    #item-1:checked ~ .relative #song-3,
                    #item-2:checked ~ .relative #song-1,
                    #item-3:checked ~ .relative #song-2 {
                    transform: translateX(-40%) scale(0.8);
                    opacity: 0.4;
                    z-index: 0;
                }

                    #item-1:checked ~ .relative #song-2,
                    #item-2:checked ~ .relative #song-3,
                    #item-3:checked ~ .relative #song-1 {
                    transform: translateX(40%) scale(0.8);
                    opacity: 0.4;
                    z-index: 0;
                }

                    #item-1:checked ~ .relative #song-1,
                    #item-2:checked ~ .relative #song-2,
                    #item-3:checked ~ .relative #song-3 {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                    z-index: 1;
                }
                        `
                    }
                </style>
                <input type="radio" name="slider" id="item-1" className={'hidden'} checked/>
                <input type="radio" name="slider" id="item-2" className={'hidden'}/>
                <input type="radio" name="slider" id="item-3" className={'hidden'}/>
                <div className="relative w-full h-full mb-5">
                    {
                        images.map((image, index) => (
                            <label className="card transition-transform duration-400 ease cursor-pointer" htmlFor={`item-` + index} id={`song-` + index}>
                                <img
                                    className={'inline-block w-full object-cover h-96 '}
                                    src={image}
                                    alt={'song'}
                                />
                            </label>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Miscellaneous;