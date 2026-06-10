import img1 from "@/public/primary1.jpg"
import Image from "next/image";

const About = () => {
    return (
        <div className=" mt-[80px] " >
            <div className=" flex justify-center items-center ">
                <div>
                    <h1 className=" max-[640px]:text-4xl text-[#144E5A] font-mam font-[600] text-5xl ">About Us</h1>
                </div>
            </div>
            <div className=" mt-[10px] max-[640px]:w-[400px] mx-auto ">
                <p className=" text-gray-500 text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deserunt natus illum magnam. Adipisci, asperiores?</p>
            </div>
             
             <div className=" flex justify-center items-center gap-[130px] mt-[50px] w-[90%] mx-auto  max-[640px]:flex-col ">
                <div>
                    <Image src={img1} alt="" className=" w-[500px] h-[330px] max-[640px]:w-[400px] max-[640px]:h-[280px] rounded-2xl " />
                </div>
                <div className=" w-[500px] h-[330px] max-[640px]:w-[400px] "> 
                    <div className=" text-4xl my-3  mt-[10px]">
                        <h1 className=" text-[#144E5A] font-mam font-[600] " >About Us</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sunt expedita vero laboriosam harum veniam, inventore accusamus deserunt? Officiis, inventore consectetur maxime cumque cupiditate ab. Incidunt totam ducimus libero culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos quo cum quidem. Fugit, rerum. </p>
                    </div>
                    <div>
                    <button  className="   text-xl py-[8px] px-[30px] text-[#144E5A] hover:text-white  text-[25px] mt-[30px] font-medium border-2 border-[#144E5A]  rounded-xl group relative flex items-center overflow-hidden "> 
                 <span className=" absolute left-0 w-full h-0 transition-all bg-[#144E5A] opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease overflow-hidden  "></span>
                  <span className=" relative  " >More see </span></button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default About;