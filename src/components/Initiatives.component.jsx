import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const items = [
    {
        id: "0",
        title: "Bloodline",
        description: "Bloodline aims to spread awareness among the people about blood donation and conducts blood donation camps regularly. Bloodline focuses on organising Blood Donation Camp, spreading Blood Donation Awareness, voluntary Blood Donation on daily basis and conducting Mega Blood Donation Camp on Republic day.",

    },
    {
        id: "1",
        title: "Jagriti",
        description: "Jagriti aims to provide Tuition and Navodaya Entrance preparation to the underprivileged children's of the slums surrounding ISM. We provide them basic education and conduct various practice test at our FFI Centre. Jagriti focuses on providing education for preparation for IX, X Board Examination, providing a platform to reconnect them with the society, providing education for preparation for JNVST(Navodaya Exam)."
    },
    {
        id: "2",
        title: "Escape",
        description: "Escape aims to improve English speaking, Basic Computer Education and writing ability of the students from the underprivileged section of the society. Escape focus on providing English Speaking Course and Personality Enhancement, conducting English classes and special personality development session and providing Basic Computer Education to Centre Students."
    },
    {
        id: "3",
        title: "Disha",
        description: "The Prior Purpose of Disha is to provide Counselling to students of different schools of Dhanbad, so that they can get the right decision which will help them to make their future bright. Disha focuses on conducting career counselling sessions at various schools of Dhanbad, introducing future scopes in different fields at Dhanbad."
    },
]



export default function Initiatives() {

    const settings = {
        centerMode: true,
        autoplay: true,
        adaptiveHeight: false,
    }

    return (
        <section id='initiatives'>
            <div className='flex flex-col xl:flex-row justify-between items-center'>
                <div>
                    <h2 className="text-center xl:text-left mb-8 xl:mb-0 pt-24 xl:pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#374063" }}>Initiatives</h2>
                </div>
                <div className='mx-32'>
                    <div className='flex justify-center'>
                        <Link to="/bloodline" className='m-2 rounded-xl p-5 md:p-8 text-white text-center w-32 bg-red-700' >Bloodline</Link>
                        <Link to="/jagriti" className='m-2 rounded-xl p-5 md:p-8 text-white text-center w-32 bg-violet-700'>Jagriti</Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/escape" className='m-2 rounded-xl p-5 md:p-8 text-white text-center w-32 bg-sky-700' >Escape</Link>
                        <Link to="/disha" className='m-2 rounded-xl p-5 md:p-8 text-white text-center w-32 bg-orange-700'>Disha</Link>
                    </div>
                </div>
            </div>
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
        </section >

    )
}