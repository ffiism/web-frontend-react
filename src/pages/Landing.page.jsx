import Navbar from "../components/Navbar.component"
import { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import Hero from "../components/Hero.component";
import SvgConvexUp from "../components/SvgConvexUp";
import SvgConvexDown from "../components/SvgConvexDown";
import AboutUs from "../components/AboutUs.component";
import Initiatives from "../components/Initiatives.component";
import Footer from "../components/Footer.component";
import Fade from 'react-reveal/Fade';
import Timeline from "../components/Timeline.component";
import Glimpse from "../components/Glimpse.component";

export default function Landing() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="p-5 absolute top-0 left-0 overflow-hidden" style={{ background: "#c1c8e4", width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }} id="app-wrapper">
                    <Navbar />
                    <Hero />
                    <SvgConvexUp />
                    <Element name="aboutus">
                        <AboutUs />
                    </Element>
                    <SvgConvexDown />
                    <Element name="intitiatives">
                        <Fade bottom>
                            <Initiatives />
                        </Fade>
                    </Element>
                    <Element name="timeline">
                        <Timeline />
                    </Element>
                    <Element name="gallery" >
                        <Fade bottom>
                            <Glimpse chapter="All" color="#374063" />
                        </Fade>
                    </Element>
                    <Footer bgColor="#c1c8e4" />
                </div>
            </div>

        </>
    );
}