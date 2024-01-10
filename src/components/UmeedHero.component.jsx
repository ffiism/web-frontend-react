import "./Umeedhero.css"
export default function UmeedHero() {
    return (
        <>
        

<section>
<div className="main-container flex justify-center items-center border-white p-[10vw] h-[100vh]">
<div className="hero-content my-4">

    <div className="umeed-heading font-extrabold px-8 my-2 text-[6rem] text-[#FFFFFF] tracking-tight backdrop-blur-[50px]">
        UMMED
    </div>

    <div className="px-7">
      <div className="some-random-text uppercase text-center font-mono text-3xl text-[#e3e3e3]">
          Ashaon Ka sangam
      </div>
      
      <div className="mt-5 h-20">
          <button type="button" className="inline-block px-8 py-4 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded-3xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Primary
          </button>
      </div>

      <div className="date flex justify-center items-center text-xl text-[#FFFFFF]">
          Indian Institute of Technology(ISM) Dhanbad
      </div>
      <div className="date-right flex justify-center items-center text-xl text-[#FFFFFF]">
          24.01.2023
      </div>

      
    </div>
</div>
</div>
</section>

</>

    )
}