import { Fade } from "react-reveal"
export default function AboutUs() {
    return (
        <section id="about-us">
            <div style={{ background: "#c1c8e4" }}>
                <div className="pb-10">

                    {/* about us  */}
                    {/* <h2 className="pt-24 xl:pt-10 mb-3 mx-4 text-5xl md:text-7xl font-bold tracking-tighter text-indigo-700" style={{ color: "#374063" }}>About us</h2>
                    <p className="ml-6 text-lg" style={{ color: "#374063" }}>Fast Forward India (FFI) IIT (ISM) Dhanbad, is a unique effort and an initiative undertaken by the students of IIT (ISM) Dhanbad. This organization is completely led and administered by the young and enthusiastic students of IIT (ISM) Dhanbad. Creative and powerful ways are implemented to enhance Blood Donation awareness and to tackle the problems of many of the underprivileged students.</p> */}

                    {/* our vision  */}
                    <h2 className="pt-24 xl:pt-10 mb-3 mx-4 text-5xl md:text-7xl font-bold tracking-tighter text-indigo-700" style={{ color: "#374063" }}>Our Vision</h2>
                    <blockquote class="p-4 mx-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it’s the only thing that ever has.”<br />
                            - Margaret Mead</p>
                    </blockquote>
                    <p className="mx-6 text-lg text-justify" style={{ color: "#374063" }}><i>"To provide an opportunity to the college students in the country to work on the problems of society side by side with their studies."</i> To let India soar towards being a developed country, we, the young citizens of the country play a role in contributing to the sole motive. As students of the premier institution, we hold the capability of finding solutions to the problems of the less privileged ones, to improve their standard of living by making few yet impactful changes to their lives and pave the path to development with no roadblocks. FFI provides an opportunity to the college students in the country to work on these problems along with their academics by providing the underprivileged with the requisite skills which will help them in getting employment. Such an experience will, apart from potentially producing great ideas, sensitize the youth to the needs of their disadvantaged countrymen and provide a creative outlet for their energy.</p>

                    {/* our Achievements */}
                    <Fade top>
                        <h3 className="text-left mx-2 lg:mx-4 text-5xl md:text-7xl font-bold tracking-tighter mt-10 pt-10 text-indigo-700 mb-3" style={{ color: "#374063", background: "#c1c8e4" }}>Our Achievements</h3>
                    </Fade>
                    <Fade bottom>
                        <ul className="mx-5 rounded-lg border-gray-200 w-100 text-gray-900 ">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">More than 370 blood cases were handled by FFI Volunteer in 2019-20.</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Sachin, a student of FFI classroom program, has got a Job of Computer Operator at the Diamond Hostel, IIT (ISM) Dhanbad.</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">637 units of blood was donated throughout the session 2019-20.</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Umeed 2020 witnessed a record- breaking participation of over 1000+ students from 43 schools all over the region of Dhanbad and 6 NGOs.</li>
                            <li className="px-6 py-2 w-full border-b ">Award for most number of blood donations (540+) to PMCH under a felicitation program organised by Jharkhand Aids Control Society at Patliputra Medical College and Hospital (PMCH).</li>
                            <li className="px-6 py-2 w-full rounded-b-lg">Karma-Jyoti and Fast Forward India, under Centre for Societal Mission (CSM) of Indian Institute of Technology ISM Dhanbad were awarded with 'Yuva-Gaurav- Samman' by 'Jharia Coalfield Samiti', Dhanbad on 12-January-2020 to mark Birth Anniversary of Swami Vivekananda.</li>
                        </ul>
                    </Fade>
                </div>
            </div >
        </section >

    )
}