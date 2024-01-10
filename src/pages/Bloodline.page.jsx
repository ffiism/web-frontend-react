import { useState, useEffect } from 'react';
import Footer from "../components/Footer.component";
import Fade from 'react-reveal/Fade';
import Glimpse from '../components/Glimpse.component';

export default function Bloodline() {
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
            <div className="p-5 absolute top-0 left-0 overflow-hidden bg-red-300 " style={{ width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }}>
                    {/* hero heading */}
                    <div>
                        <Fade top>
                            <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter text-red-700">Bloodline.</h2>
                        </Fade>
                        <p className="mx-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            Bloodline aims to spread awareness among the people about blood donation and conducts blood donation camps regularly. Bloodline focuses on organising Blood Donation Camp, spreading Blood Donation Awareness, voluntary Blood Donation on daily basis and conducting Mega Blood Donation Camp on Republic day.
                        </p>
                        <p className="mx-6 mt-5 text-lg" style={{ color: "#374063" }}>
                            We collaborate with colleges, corporates, RWAs to organize innovative and engaging blood donation camps end to end.
                        </p>
                        <p className="mx-6 mt-5 text-lg" style={{ color: "#374063" }}>
                            Street plays, competitions, and sessions - targeted at inspiring people, especially the first timers, to come out and donate blood.
                        </p>
                    </div>
                    {/* about Bloodline */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>About</h2>
                        <p className="mx-6 mt-5 text-lg leading-md" style={{ color: "#374063" }}>
                            Bloodline was started in 2007 sighting the lack of awareness among people in this part of the country regarding the importance of blood donation. It was a major challenge since the situation was further hampered by the low literacy rate and the backward economy of this region. Even before man understood the true nature of blood and its functions, the importance of blood for the human body remained disputed. One simple reason for this was the basic understanding that excessive loss of blood can cause death. But unlike old times when a serious injury, AIDS or a pregnancy complication would mean certain death, the improvement in blood preservation technology has made it possible to transfuse blood from a healthy person to one in need even if a donor with the same blood group isn’t readily available. However, even today, the demand exceeds the available preserved blood mostly due to lack of voluntary donations owing to little awareness and misconceptions about safe blood donations. One of the most ambitious and unique projects by a student run NGO, “Bloodline” is a voluntary blood donation society under Fast Forward India. Bloodline caters to the needs of blood transfusion of people residing in Dhanbad and adjacent areas. Our aim is to spread awareness about voluntary blood donations and to encourage people towards doing it regularly. In India, the annual collection of blood is only 5.5-6 million units against the requirement of about 8.5 million units. It is sad that if only 3% of India's eligible population regularly donates their blood, there will be no shortage of blood and its components in blood banks. This would mean that a significant number of deaths could be avoided if people donate blood regularly and voluntarily so that safe blood is always available. But the main reason behind this sadistic situation is the unawareness, myths and misconceptions that are still obsessing the minds of Indian people even in the 21st Century.
                        </p>
                    </div>
                    {/* Vision */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Our Vision</h2>
                        <p className="mx-6 mt-5 text-lg leading-md" style={{ color: "#374063" }}>
                            No one shall die in Dhanbad for the want of Blood. This has been our motto since the inception of Bloodline. To achieve this, our current objective is to register at least 1,000 new donors in a year by means of donor motivation, promotion of the concept of Voluntary Blood Donation and by repeating Regular Voluntary Blood Donation campaigns.
                        </p>
                    </div>
                    {/* handling helpline */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Handling Helpline</h2>
                        <p className="mx-6 mt-5 text-lg" style={{ color: "#374063" }}>
                            Through helpline requests, we help address immediate blood requirements by patients.<br /> <a href='/#' className='text-red-500'>Fill this form</a> and we will find a donor.
                        </p>
                    </div>
                    <Glimpse color="bg-red-700" chapter="Bloodline" />
                    <Footer bgColor="bg-red-300" className="absolute bottom-0 left-0 right-0 " />
                </div>
            </div>
        </>
    );
}