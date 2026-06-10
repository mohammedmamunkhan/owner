import img1 from "@/public/School2.jpg"

import Image from "next/image";


const Hero = () => {
    return (
        <div>
            <div className=" relative " >
                <Image src={img1} alt="" className=" block   " />
                <div className=" absolute top-[330px] left-[150px] max-[640px]:top-[100px] max-[640px]:left-[50px]  ">
                    <div>
                    <h1 className=" text-5xl font-[600] text-[#144E5A] font-mam max-[640px]:text-2xl ">The Govt. Primary School</h1>
                    </div>
                    <div className=" mt-[8px] ">
                    <h1 className=" text-2xl font-[600] text-[#144E5A] font-mam max-[640px]:text-[16px] max-[640px]:mt-[3px] ">Taluk Nagor, Daulatpur, Manikgonj</h1>
                    </div>
                    <div className=" mt-[8px] ">
                    <p className=" max-[640px]:text-[7px] max-w-[500px] font-[400] text-[#144E5A] font-mam ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis assumenda? Sapiente mollitia dolores ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    
                  <div className=" mt-[25px] ">
                  <button type="submit"  className="   text-xl py-[8px] px-[30px] text-[#144E5A] hover:text-white max-[640px]:px-[15px] max-[640px]:py-[5px] text-[25px]  max-[640px]:text-[15px] font-medium border-2 border-[#144E5A]  rounded-xl group relative flex items-center overflow-hidden "> 
                  <span className=" absolute left-0 w-full h-0 transition-all bg-[#144E5A] opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease overflow-hidden  "></span>
                  <span className=" relative  " >More see </span></button>
                  </div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default Hero;