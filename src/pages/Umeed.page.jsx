import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { umeedImages } from "../data/Glimpse.data";

const items = [
    {
        id: "0",
        title: "CHITRAHAR",
        description: "Chitrahar gives your inner artist the opportunity to showcase your brilliance and compete against other young artists in Dhanbad. So take out your pen and paper and show the magic of your mind.",

    },
    {
        id: "1",
        title: "NRITYANGAN",
        description: "The Nrityangan is a platform for you to showcase your talent and passion for dance. Showcase your moves and expressions on the dance floor. It's an experiance to let your passion for dance shine through."
    },
    {
        id: "2",
        title: "EINSTEIN PLAYGROUND",
        description: "Einstein playground is the place where all the geniuses and innovators meet and demonstrate their scientific models and projects that could one day shape up the future. Just a small step by you might be a giant step for humanity."
    },
    {
        id: "3",
        title: "RESOLVED",
        description: "Resolved is the platform where young minds battle each other in a series of arguments and counter- arguments.The one who successfully gets their opinions across truly knows the art of debates."
    },
    {
        id: "4",
        title: "MASTERMIND",
        description: "Mastermind is the unique platform where everyone tests their knowledge and grows their curious minds.A good quizzer is someone who is knowledgeable, quick- witted, and able to think on their feet."
    },
    {
        id: "5",
        title: "DHWANI",
        description: "Dhwani lets you exhibit the melody of your voice and your passion for music.So, take out your inner musician and let your surroundings drown in the wave of melodies.After all, wherever words fail, music always speaks"
    },
    {
        id: "6",
        title: "SHAY-AUR-MAAT",
        description: "Shay-aur-maat presents this opportunity for the small grandmasters to expand their minds and showcase their witty tactics to win the ultimate complex game."
    },
]

export default function Umeed() {
    const [width, setWidth] = useState(window.innerWidth);
    const allData = umeedImages;

    const settings = {
        centerMode: true,
        autoplay: true,
        adaptiveHeight: false,
        infinite: true,
        autoplaySpeed: 1000,
    }

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

    var imageSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: fetchSlidesToShow(),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
    };

    return (
        <>
            {/* content block  */}
            <div className="">
                <Fade top>
                    <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#374063" }}>Umeed</h2>
                </Fade>
                <p className="mx-6 text-lg text-justify" style={{ color: "#374063" }}>UMEED is an annual celebration that embodies the very essence of hope. Each year, the spirit of Umeed blossoms anew within the vibrant tapestry of IIT(ISM) Dhanbad. This hallmark event transcends the realm of a mere college festival. It becomes a crucible where aspirations are ignited, talents showcased, and dreams take flight.
Umeed 2023 witnessed record-breaking participation of over 1000+ students from more than 50 schools across the region of Dhanbad and 7 NGOs. 
Umeed's true essence lies in its spirit of inclusivity and empowerment. It extends a welcoming hand to underprivileged students from across the region, providing them a platform to shine. 
</p>
            </div>
            {/* events */}
            <Slider {...settings}>
                {items.map((item) =>
                    <div key={item.id} className="h-100">
                        <div className='m-2 p-2 py-10 text-center rounded-lg' style={{ backgroundColor: "#c1c8e4" }}>
                            <div className='container' >
                                <h2 className='text-5xl text-white pt-10 font-semibold' style={{ color: "#374063" }}>{item.title}</h2>
                                <p className='m-4'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
            {/* image slider */}
            <Fade bottom>
                <Slider {...imageSliderSettings} className="m-2">
                    {allData.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    )}
                </Slider>
            </Fade>
        </>
    );
}