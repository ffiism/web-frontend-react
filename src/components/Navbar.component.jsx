import { useState, useEffect } from "react"
import { Menu, Close } from "@mui/icons-material"
import { Link } from "react-scroll"
import FFI from './../assets/logo.png'
import ISM_LOGO from './../assets/ism_logo.png'

export default function Navbar() {
    const [sidebarActive, setSidebarActive] = useState(false)
    const handleSidebarToggle = () => {
        setSidebarActive(!sidebarActive)
    }
    useEffect(() => {
        if (sidebarActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [sidebarActive])

    return (
        <div className="rounded-lg" id="navbar">
            <div className="m-5 mb-2 mx-7 flex rounded-lg" style={{ color: "#374063" }}>
                <a href="/" className=""><img style={{ height: "70px" }} src={FFI} alt="FFI"></img></a>
                <a href="https://www.iitism.ac.in" className=""><img style={{ height: "70px" }} src={ISM_LOGO} alt="IIT ISM Dhanbad"></img></a>
                <button onClick={handleSidebarToggle} className="ml-auto md:hidden">
                    {sidebarActive ? <Close /> : <Menu />}
                </button>
                <div className="ml-auto hidden md:block">
                    <Link to="aboutus" containerId="app-wrapper" spy={true} smooth={true} duration={500} className="ml-auto cursor-pointer">About us</Link>
                    <Link to="initiatives" containerId="app-wrapper" spy={true} smooth={true} duration={500} className="ml-5 cursor-pointer">Initiatives</Link>
                    <Link to="timeline" containerId="app-wrapper" spy={true} smooth={true} duration={500} className="ml-5 cursor-pointer">TimeLine</Link>
                    <Link to="gallery" containerId="app-wrapper" spy={true} smooth={true} duration={500} className="ml-5 cursor-pointer">Gallery</Link>
                    <Link to="umeed" containerId="app-wrapper" spy={true} smooth={true} duration={500} className="ml-5 cursor-pointer">Umeed</Link>
                </div>
            </div>
            {sidebarActive &&
                <div className="flex justify-center w-full smooth-shadow rounded-lg">
                    <div className="z-100 p-8 mx-6 rounded md:hidden text-white w-full my-5 rounded-lg" style={{ background: "#7F94E8" }}>
                        <div className="flex flex-col w-full">
                            <Link to="aboutus" containerId="app-wrapper" className="m-2">About us</Link>
                            <Link to="initiatives" containerId="app-wrapper" className="m-2">Initiatives</Link>
                            <Link to="timeline" containerId="app-wrapper" className="m-2">TimeLine</Link>
                            <Link to="gallery" containerId="app-wrapper" className="m-2">Gallery</Link>
                            <Link to="umeed" containerId="app-wrapper" className="m-2">Umeed</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
