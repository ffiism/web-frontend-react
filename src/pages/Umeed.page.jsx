import Navbar from "../components/Navbar.component"
import UmeedHero from "../components/UmeedHero.component";
import UmeedEvents from "../components/UmeedEvents.component";
import UmeedNav from "../components/UmeedNav.component";
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

export default function Landingsdjfbnsd() {
   

    return (
        <>
        <div className="bg-fixed bg-no-repeat bg-contain bg-[length:100vw_100vh]"
        style={{ backgroundImage: 'url("https://ik.imagekit.io/g9jzyzcnt/ummed2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673426961928")' }}
        >
                <UmeedNav/>
                <UmeedHero/>
                <UmeedEvents/>           
        </div>       

        </>
    );
}