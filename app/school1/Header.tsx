import Image from "next/image";
import img1 from "@/public/logo1.jpg"
// import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    // const [toggle, setToggle] = useState(false);
    return (
        <div className=" bg-[#B7D0EA] py-3 ">
            <div className="  w-[80%]  mx-auto flex justify-between items-center  rounded-xl 
             max-[640px]:w-[400px] ">
               <div>
                 <Image src={img1} alt="" className=" w-[30px] h-[30px] " />
               </div>
               <div className=" flex justify-center items-center ">
                <ul className=" flex justify-center items-center gap-[50px] text-[20px] 
                 font-[600] max-[640px]:hidden ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Notice Board</a></li>
                    <li><a href="#mam">Contact Us</a></li>
                </ul>
                {/* <div className="md:hidden">
                    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? <AiOutlineClose className="text-[25px] font-[800] " /> : 
                    <GiHamburgerMenu className="text-[25px] font-[800] "/> }</button>
                </div> */}
               </div>
            </div>
         {/* {toggle && (
            <ul className=" gap-[50px] text-[20px] font-[600] text-center border rounded-xl mt-[15px] 
             w-[400px] mx-auto py-5 ">
               <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Notice Board</a></li>
                    <li><a href="#">Contact Us</a></li>
           </ul>
         )} */}

        </div>
    );
};

export default Header;