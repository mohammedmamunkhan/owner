import Image from "next/image"
import img1 from  "@/public/img1.jpg"
import img2 from  "@/public/img2.jpg"
import img3 from "@/public/gallery3.jpg"
import img4 from "@/public/images2.png"

import img5 from  "@/public/images7.png"
import img6 from  "@/public/gallery2.jpg"
import img7 from "@/public/gallery4.jpg"
import img8 from "@/public/school10.jpg"

const Gallery = () => {
    return (
        <div className=" mt-[80px]  ">
            <div className=" flex justify-center items-center " >
                <div>
                    <h1 className=" max-[640px]:text-4xl text-5xl font-mam font-[600] text-[#144E5A] ">Our School Gallery</h1>
                </div>
            </div>

                <div className="   text-center mt-[10px] max-[640px]:w-[400px] max-[640px]:mx-auto  ">
                    <h1 className=" text-[16px] font-mam font-[600] text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam numquam perferendis labore corrupti vel.</h1>
                </div>
         
            {/* mmmm */}
            <div className=" flex justify-center items-center gap-4 mt-[60px] max-[640px]:flex-col ">
                <div>
                    <Image src={img1} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={img2} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={img3} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] "/>
                </div>
                <div>
                    <Image src={img4} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] "/>
                </div>
            </div>
             {/* mmmm */}

              {/* mmmm */}
            <div className=" flex justify-center items-center gap-4 mt-[20px] max-[640px]:flex-col ">
                <div>
                    <Image src={img5} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={img6} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] " />
                </div>
                <div>
                    <Image src={img7} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] "/>
                </div>
                <div>
                    <Image src={img8} alt="" className=" w-[270px] h-[170px] rounded-lg hover:scale-105 duration-300 max-[640px]:w-[400px] max-[640px]:h-[280px] "/>
                </div>
            </div>
             {/* mmmm */}
           
        </div>
    );
};

export default Gallery;