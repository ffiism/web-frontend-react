import { useState, useEffect } from 'react';
import Footer from "../components/Footer.component";
import Fade from 'react-reveal/Fade';
import Glimpse from '../components/Glimpse.component';


export default function Disha() {
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
            <div className="p-5 absolute top-0 left-0 overflow-hidden bg-orange-300 " style={{ width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }}>
                    <Fade top>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter text-orange-700">Disha.</h2>
                        <p className="ml-6 mt-10 text-lg" style={{ color: "#374063" }}>
                            Concerning the alarming droupout rates after 10th standard in Dhanbad , DISHA chapter started with the motto of spreading knowledge and awareness amongst students of 10th and 12th standard regarding higher studies and various career options.
                        </p>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Working</h2>
                        <p className="ml-6 mt-5 text-lg" style={{ color: "#374063" }}>
                            Visiting various government aided and small private schools for career conselling for 10th and 12th standard students.
                            <br />
                            Conducting online career conselling via the Facebook Page "Disha Career Conselling Forum".
                            <br />
                            Working on various videos related to career conselling
                            <br />
                            Currently, we consel about 25+ career options as well as about olympiads and entrance exams like KVPY.
                            <br />
                            Provided career conselling sessions to about 500+ students till date.
                        </p>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-2 mx-4 text-2xl md:text-4xl font-bold tracking-tighter" style={{ color: "#374063" }}>Schools Covered</h2>
                        <Fade bottom>
                            <ul className="mx-5 bg-white rounded-lg border border-gray-200 w-100 text-gray-900 ">
                                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Kids Garden,Hirapur</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Balika Shiksha Sansthan,City Center</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Symbiosis Public School,Barwadda</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Koylanchal Public School</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Abhoya Sundari,Hirapur</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Higher Education,Vistipara</li>
                                <li className='px-6 py-2 border-b border-gray-200 w-full'>Kendriya Vidhyalaya-2,Jagjeevan Nagar</li>
                                <li className='px-6 py-2 border-b border-gray-200 w-full'>Zila School,City Center</li>
                            </ul>
                        </Fade>
                    </Fade>
                    <Glimpse color="bg-orange-700" chapter="Disha" />
                    <Footer bgColor="bg-orange-300" className="absolute bottom-0 left-0 right-0 " />
                </div>
            </div>
        </>
    );
}