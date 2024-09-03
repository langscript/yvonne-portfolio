import React, {ReactElement, useEffect, useState} from "react";
import { config } from "react-spring";
// import Carousel from "react-spring-3d-carousel";
import dynamic from "next/dynamic";
import ignore from "ignore";

//@ts-ignore;
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
    ssr: false,
});

interface CarouselCardProps {
    key: any
    content: ReactElement
}

interface CarouselProps {
    cards: CarouselCardProps
}

const CustomCarousel = (props: any) => {

    const table = props.cards?.map((element: any, index: number) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState<number>();
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
                goToSlideDelay={0}
            />
        </div>
    );

}

export default CustomCarousel;