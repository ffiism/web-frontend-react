import { Link } from "react-router-dom"
import VolunteerImage from "../assets/volunteer-sign.jpg"
export default function Timeline() {
    return (
        <>
            <section>
                <div className="bg-white text-black py-8">
                    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className="ml-2 text-violet-600 uppercase tracking-loose">The Timeline of</p>
                            <p className="text-3xl md:text-5xl font-bold leading-normal tracking-tight mb-2 uppercase">Our Journey so far</p>
                            <p className="text-sm md:text-base text-gray-700 mb-4">
                                Here’s the line of actions we took to reach at this point. And we are still on the way to make it better.
                            </p>
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-indigo-555 absolute h-full border"
                                        style={{ right: "50%", border: "2px solid #4338ca", borderRadius: "1%" }}></div>
                                    <div className="border-2-2 border-indigo-555 absolute h-full border"
                                        style={{ left: "50%", border: "2px solid #4338ca", borderRadius: "1%" }}></div>

                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2007</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                Fast Forward India (FFI) was started with a chapter <Link to="/bloodline" className="font-semibold underline text-red-700">Bloodline</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2008</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI introduced two more new chapters named <Link to="/escape" className="font-semibold underline text-sky-700">Escape</Link> and <Link to="/jagriti" className="font-semibold underline text-violet-700">Jagriti</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2009</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI launced a new and overall its fourth chapter named <Link to="/disha" className="font-semibold underline text-orange-700">Disha</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2010</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI launched the quiz event "BRAINSTORM".
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2014</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI set the milestone of a record blood donation of "905" units in a single day.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2015</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI launched its Annual Festival UMEED, (previously known as "CARRUS") a Career Development Fest.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2016</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI started a campaign known as MEGA BLOOD DONATION CAMP (MBDC) in which Blood donation events are organized at various hospitals of city.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2016</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                FFI initiated an campaign ISM to IIT (ISM) Movement which later helped ISM to become IIT.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2019</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                Initiative started to prepare students for Navodaya Entrance Examination.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2020</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                                Started an Online Education System "AAGAZ".
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-base text-violet-700">2023</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                            Awarded for the most blood donations (540+) to PMCH under a felicitation
                                            program organized by Jharkhand Aids Control Society.
                                           
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-base text-violet-700">2023</p>
                                            {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4> */}
                                            <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                                            Umeed 2023 witnessed record-breaking participation of over 1000+ students.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto -mt-36 md:-mt-36" src={VolunteerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}