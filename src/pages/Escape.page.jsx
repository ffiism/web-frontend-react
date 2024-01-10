import { useState, useEffect } from 'react';
import Footer from "../components/Footer.component";
import Fade from 'react-reveal/Fade';
import Glimpse from '../components/Glimpse.component';

export default function Escape() {
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
            <div className="p-5 absolute top-0 left-0 overflow-hidden bg-sky-300 " style={{ width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }}>
                    <Fade top>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter text-sky-700">Escape.</h2>
                        <p className="ml-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            The importance of English in the current generation is unparalleled. While it is indispensable in the urban scenario, English seems to be steadily spreading its roots into the rural areas as well. For a leading developing nation, it is important that the generations to come are well equipped with knowledge of the language, and are capable of facing the everyday challenges of modern society.
                            <br />
                            Fast Forward India aims at strengthening the roots of our nation. ESCAPE is an extension of the same. ESCAPE (English Speaking Course And Personality Enhancement), aims at spreading not just knowledge of the language but also communication skills and overall personality enhancement to those with limited resources.
                            <br />
                            <br />
                            It aims at providing a platform for building confidence, encouraging creativity and developing skills which help them in various real world situations.
                        </p>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Establishment</h2>
                        <p className="ml-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            Over the years the number of students have considerably increased. The number of volunteers are also increasing steadily, along with their dedication towards the students.
                            ESCAPE also organized “Pratibha” and “Dream India”, the drama and dance competitions respectively.
                            <br />
                            <br />
                            A free library under FFI is also being setup with active volunteering from ESCAPE along with an “ESCAPE Documentary” to showcase the importance of English and personality enhancement, and to demonstrate the working and progress of ESCAPE.
                            <br />
                            “Aayam”, a first of its kind “Hinglish Magazine” which is also being worked upon, comprising of all the latest and upcoming events, weekly articles and updates.
                        </p>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Working</h2>
                        <p className="ml-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            There are FFI centers near IIT(ISM) campus where ESCAPE classes are conducted every week.

                            Everyday a batch of volunteers are appointed to the center to teach the children for 1 hour per volunteer. Monday to Friday classes are scheduled from 6:00-8:00pm, so a total of two volunteers are appointed everyday.

                            Every volunteer devotes his/her one hour for the noble cause.

                            ESCAPE conduct tests regularly to check their improvement.

                            On Saturdays and Sundays we conduct classes for the the Abhoya Sundari Indrdhanush Orphanage students (60 students) near Hirapur area. To enhance their personality, we show them videos, play interactive games and try to increase their communication skills.
                        </p>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Achievements</h2>
                        <Fade bottom>
                            <ul className="mx-5 bg-white rounded-lg border border-gray-200 w-100 text-gray-900 ">
                                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">164 students have been imparted computer education in the previous 6 batches successfully at our center.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Among 29 inmates from KARAGAR JAGRITI CHAPTER, 14 inmates have been retracted on righteous path and now they are earning honestly.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">"Dwanda" a computer quiz, for the slum students has been organized at annual basis.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">"Tulika" a painting competition is an annually organized event.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Our student Rajni got 1st rank in interview for Biotech. course in P.K. Roy memorial College.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">A student Sachin of our batch has got the Job as computer operator in the ISM, Emrald Hostel.</li>
                            </ul>
                        </Fade>

                        <Glimpse color="bg-sky-700" chapter="Escape" />
                    </Fade>
                    <Footer bgColor="bg-sky-300" className="absolute bottom-0 left-0 right-0 " />
                </div>
            </div>
        </>
    );
}