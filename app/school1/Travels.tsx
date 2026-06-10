import Image from "next/image"

import t1 from "@/public/t.jpg"
import t2 from "@/public/t1.jpg"
import t3 from "@/public/t2.jpg"
import t4 from "@/public/t4.jpg"
import t5 from "@/public/t5.jpg"
import t6 from "@/public/t6.jpg"

const Travels = () => {
    return (
        <div className=" mt-[80px] ">
            {/* main */}
            <div className=" flex justify-center items-center ">
                <div>
                    <h1 className=" max-[640px]:text-4xl text-[#144E5A] font-mam font-[600] text-5xl ">
                       Education Travels
                    </h1>
                </div>
            </div>

                <div className=" mt-[10px] text-center max-[640px]:w-[400px] max-[640px]:mx-auto ">
                    <p className=" text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint maxime culpa illo dignissimos esse!</p>
                </div>
        
            {/* images */}
             <div className=" w-[90%]  mx-auto flex justify-center items-center gap-[20px] mt-[50px] max-[640px]:flex-col ">
                <div>
                    <Image src={t1} alt="" className=" w-[365px] h-[250px] rounded-[15px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={t2} alt="" className=" w-[365px] h-[250px] rounded-[15px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={t3} alt="" className=" w-[365px] h-[250px] rounded-[15px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
             </div>

             <div className=" flex justify-center items-center gap-[20px] mt-[20px] max-[640px]:flex-col ">
                <div>
                    <Image src={t4} alt="" className=" w-[365px] h-[250px] rounded-[10px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={t5} alt="" className=" w-[365px] h-[250px] rounded-[10px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={t6} alt="" className=" w-[365px] h-[250px] rounded-[10px] hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
             </div>

            {/* images */}
           {/* main  */}
        </div>
    );
};

export default Travels;