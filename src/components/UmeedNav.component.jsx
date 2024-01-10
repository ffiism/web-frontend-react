// import "./UmeedEvents.css"

// import { useState, useEffect } from "react"
// import { Menu, Close } from "@mui/icons-material"
// import { Link } from "react-scroll"
// import FFI from './../assets/logo.png'

// export default function UmeedNav() {
//     const [sidebarActive, setSidebarActive] = useState(false)
//     const handleSidebarToggle = () => {
//         setSidebarActive(!sidebarActive)
//     }
//     useEffect(() => {
//         if (sidebarActive) {
//             document.body.style.overflow = "hidden"
//         } else {
//             document.body.style.overflow = "auto"
//         }
//     }, [sidebarActive])
//  return(
// <div className="rounded-lg" id="navbar">
//             <div className="m-5 mb-2 mx-7 flex rounded-lg" style={{ color: "#374063" }}>
//                 <a href="/" className=""><img style={{ height: "70px" }} src={FFI} alt="FFI"></img></a>
//                 <button onClick={handleSidebarToggle} className="ml-auto md:hidden">
//                     {sidebarActive ? <Close /> : <Menu />}
//                 </button>
//                 <div className="ml-auto hidden md:block">
//                     <Link  className="ml-auto cursor-pointer">About us</Link>
//                     <Link  className="ml-5 cursor-pointer">Initiatives</Link>
//                     <Link  className="ml-5 cursor-pointer">TimeLine</Link>
//                     <Link  className="ml-5 cursor-pointer">Gallery</Link>
//                 </div>
//             </div>
//             {sidebarActive &&
//                 <div className="flex justify-center w-full smooth-shadow rounded-lg">
//                     <div className="z-100 p-8 mx-6 rounded md:hidden text-white w-full my-5 rounded-lg" style={{ background: "#7F94E8" }}>
//                         <div className="flex flex-col w-full">
//                             <Link className="m-2">About us</Link>
//                             <Link className="m-2">Initiatives</Link>
//                             <Link  className="m-2">TimeLine</Link>
//                             <Link  className="m-2">Gallery</Link>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </div>
              

//         )
// }

import { useState, useEffect } from "react"
import { Menu, Close } from "@mui/icons-material"
import { Link } from "react-scroll"
import FFI from './../assets/logo.png'

export default function UmeedNav() {
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
        <div className="rounded-lg p-5" id="navbar">
            <div className="m-5 mb-2 mx-7 flex rounded-lg" style={{ color: "#374063" }}>
                <a href="/" className=""><img style={{ height: "70px" }} src={FFI} alt="FFI"></img></a>
                <button onClick={handleSidebarToggle} className="ml-auto md:hidden">
                    {sidebarActive ? <Close /> : <Menu />}
                </button>
                <div className="ml-auto hidden md:block text-white text-xl">
                    <Link  className="ml-auto cursor-pointer">About us</Link>
                    <Link  className="ml-5 cursor-pointer">Initiatives</Link>
                    <Link  className="ml-5 cursor-pointer">TimeLine</Link>
                    <Link className="ml-5 cursor-pointer">Gallery</Link>
                </div>
            </div>
            {sidebarActive &&
                <div className="flex justify-center w-full smooth-shadow rounded-lg">
                    <div className="z-100 p-8 mx-6 rounded md:hidden text-white w-full my-5 rounded-lg">
                        <div className="flex flex-col w-full">
                            <Link  containerId="app-wrapper" className="m-2">About us</Link>
                            <Link  containerId="app-wrapper" className="m-2">Initiatives</Link>
                            <Link  containerId="app-wrapper" className="m-2">TimeLine</Link>
                            <Link  containerId="app-wrapper" className="m-2">Gallery</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}