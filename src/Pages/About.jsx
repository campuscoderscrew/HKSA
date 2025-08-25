import React from 'react'

function About() {
  return (
    <div>
      {/* The titlesection */}
      <div className='bg-[url("./hero-image.svg")] w-full font-["Lexend Deca"] text-[64px] text-white flex flex-row justify-center items-center h-[250px] font-semibold'>
        About Us
      </div>
      {/* Mission Statement */}
      <div className='flex flex-col justify-center items-center font-["ZCOOL_XiaoWei"] text-[20px]'>
        <span className='mb-[100px] mt-[100px] mr-[20px] ml-[20px] lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px] sm:ml-[20px] sm:mr-[20px]'>HKSA was founded in 2025 to spread Hong Kong culture in an inclusive environment where anyone of all backgrounds are welcomed.</span>
        <span className="font-['Tiro_Bangla'] text-[30px]">Our Mission Statement</span>
        <span className='mb-[100px] mt-[100px] mr-[20px] ml-[20px] lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px] sm:ml-[20px] sm:mr-[20px] justify-center text-center'>The Hong Kong Student Association (HKSA) at the University of Maryland is a student-governed, non-profit organization dedicated to fostering a strong sense of community. HKSA strives to promote awareness and appreciation of Hong Kong's unique culture, language, and history through social, cultural, and educational events. We serve as a bridge connecting students from Hong Kong, those of Hong Kong heritage, and anyone interested in exploring the region's rich traditions and contemporary identity.</span>
      </div>
      {/* Getting Involved */}
      <div className='flex flex-col justify-center items-center mb-[200px]'>
        <h1 className='font-["Tiro_Bangla"] text-[30px]'>How to Get Involved</h1>
        <div className='flex flex-row gap-10 mt-[70px] flex-wrap lg:ml-[0px] ml-[100px]'>
          <div className='flex flex-col border border-solid border-black w-[200px]' style={{borderImageSource: "url('./involvement-1.svg')", borderImageSlice: "14 21 34 9", borderImageRepeat: "stretch", borderStyle: "solid", borderWidth: "10px"}}>
            <p className='p-[20px] font-["Exo"] font-bold text-[22px]'>Join Discord</p>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"] text-[20px]'>The best way to stay updated</p>
          </div> 
          <div className='flex flex-col border border-solid border-black w-[200px]' style={{borderImageSource: "url('./involvement-1.svg')", borderImageSlice: "14 21 34 9", borderImageRepeat: "stretch", borderStyle: "solid", borderWidth: "10px"}}>
            <p className='p-[20px] font-["Exo"] font-bold text-[22px]'>Follow Our Instagram</p>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"] text-[20px]'>@umdhksa</p>
          </div> 
          <div className='flex flex-col border border-solid border-black w-[200px]' style={{borderImageSource: "url('./involvement-1.svg')", borderImageSlice: "14 21 34 9", borderImageRepeat: "stretch", borderStyle: "solid", borderWidth: "10px"}}>
            <p className='p-[20px] font-["Exo"] font-bold text-[22px]'>Come to GBMs</p>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"] text-[20px]'>Lorem ipsum dolor</p>
          </div> 
          <div className='flex flex-col border border-solid border-black w-[200px]' style={{borderImageSource: "url('./involvement-1.svg')", borderImageSlice: "14 21 34 9", borderImageRepeat: "stretch", borderStyle: "solid", borderWidth: "10px"}}>
            <p className='p-[20px] font-["Exo"] font-bold text-[22px]'>Questions?</p>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"] text-[20px]'>Email us at</p>
          </div> 
        </div>

      </div>
      {/* Activities */}
      <div className='flex flex-col justify-center items-center '>
        <span className="font-['Tiro_Bangla'] text-[30px] mb-[50px] mr-[100px] ml-[100px]">Activities</span>
        <span className='font-["ZCOOL_XiaoWei"] font-[56px] text-[20px] mr-[20px] ml-[20px] lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px] sm:ml-[20px] sm:mr-[20px]'> We do a variety of fun activities with our members throughout the school year. Some examples include:</span>
        
        <div className='font-["ZCOOL_XiaoWei"] text-[20px] flex flex-row flex-wrap gap-10 mr-[50px] ml-[75px] mt-[40px] mb-[120px] sm:justify-center sm:items-center'>
          <div className=''>
            <img src="./placeholder.png" className='lg:h-[500px] h-[300px]'/>
            <p>Caption</p>
          </div>
          <div className=''>
            <img src="./placeholder.png" className='lg:h-[500px] h-[300px]'/>
            <p>Caption</p>
          </div>
          <div className=''>
            <img src="./placeholder.png" className='lg:h-[500px] h-[300px]'/>
            <p>Caption</p>
          </div>
          <div className=''>
            <img src="./placeholder.png" className='lg:h-[500px] h-[300px]'/>
            <p>Caption</p>
          </div>
        </div>
      </div>
      {/* What our members say */}
      <div className='bg-[#9E162D]'>
        <h2 className='flex flex-col font-["Tiro_Bangla"] text-[36px] text-white justify-center items-center p-[50px]'> What Our Members Say</h2>
        <div className='flex flex-row gap-30 justify-center items-center flex-wrap'>
          <div className='flex flex-col bg-[white] w-[200px] rounded-2xl mb-[50px]'>
            <h2 className='p-[20px] font-["Exo"] font-bold'>John Doe</h2>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"]' >Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
          </div>
          <div className='flex flex-col bg-[white] w-[200px] font-bold rounded-2xl mb-[50px]'>
            <h2 className='p-[20px] font-["Exo"]'>John Doe</h2>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"]'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
          </div>
          <div className='flex flex-col bg-[white] w-[200px] font-bold rounded-2xl mb-[50px]'>
            <h2 className='p-[20px] font-["Exo"]'>John Doe</h2>
            <p className='px-[20px] mb-[20px] font-["ZCOOL_XiaoWei"]'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About