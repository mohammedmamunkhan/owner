import Marquee from "react-fast-marquee";
import { MdHomeWork } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { TbRibbonHealth } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineGamepad } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosBook } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";


const Service = () => {
    return (
        <div className=" mt-[80px] ">
            <div className=" flex justify-center items-center ">
                <div>
                    <h1 className=" max-[640px]:text-4xl text-[#144E5A] font-mam font-[600] text-5xl ">Our School Service</h1>
                </div>
            </div>
            <div className=" mt-[10px] text-gray-500 text-center max-[640px]:w-[400px] max-[640px]:mx-auto ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quia illum aperiam, quisquam iure mollitia voluptas incidunt porro.
            </div>

            <div className=" w-[90%] mx-auto mt-[50px] ">
              <Marquee autoFill pauseOnHover className=" cursor-pointer " >
              <div className=" flex mx-[20px] ">
                <MdHomeWork  className=" text-yellow-500 text-[35px] mr-[15px]  " />
                <div><p className="  text-[25px] ">Home Work</p></div>
              </div>

              <div className=" flex mx-[20px] ">
                        <VscSymbolClass  className="  text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px] ">Free Online class</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <TbRibbonHealth  className="  text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Free Health Service</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <FaHandHoldingMedical  className="  text-yellow-500 text-[35px] mr-[15px] " />
                        <div><p className="  text-[25px]  ">Free Medial Service</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <IoIosBook  className="  text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Free Book</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <GrTechnology  className=" text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Technolorice</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <PiChalkboardTeacher  className=" text-yellow-500 text-[35px]  " />
                        <div><p className="  text-[25px]  ">Free Teaching</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <IoCall  className=" text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Tell Phone Service</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <FaPersonSwimming  className=" text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Physical Exercise class</p></div>
                        </div>

                        <div className=" flex mx-[20px] ">
                        <MdOutlineGamepad  className=" text-yellow-500 text-[35px] mr-[15px]  " />
                        <div><p className="  text-[25px]  ">Playing</p></div>
                        </div>

              </Marquee>

            </div>
            
        </div>
    );
};

export default Service;