import { useState, useEffect } from 'react';
import Footer from "../components/Footer.component";
import Fade from 'react-reveal/Fade';
import Glimpse from '../components/Glimpse.component';


export default function Jagriti() {
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
            <div className="p-5 absolute top-0 left-0 overflow-hidden bg-violet-300" style={{ width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }}>
                    {/* hero heading  */}
                    <div>
                        <Fade top>
                            <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter text-violet-700">Jagriti.</h2>
                        </Fade>
                        <p className="ml-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            Jagriti aims to provide Tuition and Navodaya Entrance preparation to the underprivileged children's of the slums surrounding ISM. We provide them basic education and conduct various practice test at our FFI Centre. Jagriti focuses on providing education for preparation for IX, X Board Examination, providing a platform to reconnect them with the society, providing education for preparation for JNVST(Navodaya Exam).
                        </p>
                    </div>
                    {/* about Jagriti */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>About</h2>
                        <p className="mx-6 mt-5 text-lg leading-md" style={{ color: "#374063" }}>
                            In today’s competitive world, it is not the fittest who survives, but it is the one who is most adaptive to change. Life today has become so fast that we are dependent on machines for most of our work. Computers have penetrated our lives so deep that to achieve professional success in any field, crossing paths with computer education has become indispensable. In a country like India where most people are deprived of basic necessities for life, computer education for these underprivileged children is a distant dream. Keeping the current scenario in mind, Jagriti was proposed as a part of Fast Forward India to impart basic computer education free of cost to the underprivileged children in and around Dhanbad. Jagriti started its functioning in 2008 and since then has been actively involved in achieving its goals and fulfilling this cause.
                            <br />
                            We are trying to empower them with basic computer education needs so that they will be able to make their stand in this computer-oriented world.
                        </p>
                    </div>
                    {/* Vision */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Our Vision</h2>
                        <p className="mx-6 mt-5 text-lg leading-md" style={{ color: "#374063" }}>
                            This chapter of ffi was started with a vision to empower underprivilage students with computer education so that they can stand in this changing era of india, also computer education for those people who are diconncted from society and want to change themselves so that they can serve and live in society with selfrespect.
                        </p>
                    </div>
                    {/* Vision */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Working</h2>
                        <p className="mx-6 mt-5 text-lg leading-md" style={{ color: "#374063" }}>
                            Admissions for all courses under Jagriti start at the beginning of each academic session. Children are then divided into batches according to their age and on the extent of the computer knowledge they possess (if any). Both theory and practical classes are taken at the FFI centre regularly by Jagriti volunteers. The various courses under Jagriti are as follows: Aadhar: Under this project, very basic knowledge of computers is provided. The beginner’s course structure is designed keeping in mind that the students possess no prior knowledge of computers and is of 10 weeks duration including the final test.
                            <br /><br />
                            The following topics are taught under Aadhar:
                        </p>
                        <ol className='ml-10' style={{ color: "#374063" }}>
                            <li>Understanding the Hardware of the computer and their functions.</li>
                            <li>Basic operational understanding of the Windows Interface.</li>
                        </ol>
                    </div>
                    {/* school Campaign  */}
                    <div>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>School Campaign Centres</h2>
                        <Fade bottom>
                            <ul className="mx-5 bg-white rounded-lg border border-gray-200 w-100 text-gray-900 ">
                                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Middle School,Saraidhela.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Variye Buniyadi School,Jagjeevan Nagar.</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Abhoya Sundari Orphanage.</li>
                            </ul>
                        </Fade>
                        <iframe className='p-5 rounded-xl' title="Lahbani Dhaiya" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.966299666707!2d86.43899201489153!3d23.819797384555137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bb605aafbde7%3A0xa9cc3183c25d4188!2sLahbani%20Dhaiya%2C%20Chanchani%20Colony%2C%20Dhanbad%2C%20Jharkhand%20826004!5e0!3m2!1sen!2sin!4v1672060949369!5m2!1sen!2sin" height="450" style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <Glimpse color="bg-voilet-700" chapter="Jagriti" />
                    <Footer bgColor="bg-violet-300" className="absolute bottom-0 left-0 right-0" />
                </div>
            </div>
        </>
    );
}