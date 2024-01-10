import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import { Bloodline, Disha, Escape, Jagriti } from "../data/Glimpse.data";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export default function Glimpse(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const bloodlineData = [...Bloodline]
    const dishaData = [...Disha]
    const escapeData = [...Escape]
    const jagritiData = [...Jagriti]
    const allData = shuffle([...Bloodline, ...Disha, ...Escape, ...Jagriti])

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const fetchSlidesToShow = () => {
        if (width > 1100)
            return 3;
        else if (width > 700)
            return 2;
        else
            return 1;
    }

    var settings = {
        dots: (props.chapter !== "All"),
        infinite: true,
        speed: 500,
        slidesToShow: fetchSlidesToShow(),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
    };

    return (
        <div>
            <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: props.color }} >Glimpse</h2>
            <Fade bottom>
                <Slider {...settings} className="m-2">
                    {props.chapter === "Bloodline" ? bloodlineData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>)
                        :
                        null}
                    {props.chapter === "Jagriti" ? jagritiData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    ) : null}
                    {props.chapter === "Disha" && dishaData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    )}
                    {props.chapter === "Escape" && escapeData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    )}
                    {props.chapter === "All" && allData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    )}
                </Slider>
            </Fade>
        </div>
    )
}