import React, {useEffect, useState} from "react";

const autoPlayTime: number = 5000;

const images = [
    '/yvonne.jpg',
    '/bjj.jpg',
    '/yvonne.jpg'
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
            <div className="relative w-full max-w-lg mx-auto">
                <div className="overflow-hidden rounded-lg relative">
                    <div
                        className="whitespace-nowrap transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index}`}
                                className="inline-block w-full object-cover h-96"
                            />
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-500"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-500"
                    >
                        &gt;
                    </button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`mx-1 w-3 h-3 rounded-full ${
                                    currentIndex === index ? 'bg-blue-500' : 'bg-gary-100'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miscellaneous;