import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
    return (
        <div className=" w-[90%]  mt-[80px] mx-auto " id="mam">
            {/* main */}
            <div className=" text-center ">
                <h1 className=" text-[#144E5A] font-mam font-[600] text-5xl max-[640px]:text-4xl ">Contact Us</h1>
            </div>
            <div className=" text-center mt-[10px] max-[640px]:w-[400px] max-[640px]:mx-auto ">
                <p className=" text-gray-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, saepe mollitia exercitationem repellendus voluptatem ipsa.</p>
            </div>
            {/* contact */}
            <div className="  shadow-2xl mt-[50px] rounded-[20px] flex justify-center items-center gap-[180px] max-[640px]:flex-col 
             max-[640px]:gap-[50px] ">
                <div className=" w-[480px] bg-[#144E5A] inline-block rounded-[15px] max-[640px]:w-[400px] ">
                    <div className=" ml-[40px] mt-[60px] ">
                        <h1 className=" text-4xl text-white font-mam font-[600] max-[640px]:text-3xl ">Contact Us</h1>
                    </div>
                    <div className="ml-[40px] mt-[10px] ">
                        <h1 className=" text-4xl text-white font-mam font-[600] max-[640px]:text-3xl ">Our Primary School</h1>
                    </div>
                    <div className=" w-[350px] mt-[15px] text-[18px] text-white ml-[40px] max-[640px]:w-[280px] max-[640px]:text-[15px] ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum id soluta molestias velit! Expedita.</p>
                    </div>
                    <div className=" ml-[40px] flex mt-[90px] mb-[60px] max-[640px]:mt-[70px] ">
                      <FaFacebookSquare className=" text-4xl ml-[15px] text-[#1877F2] max-[640px]:text-2xl " />
                      <IoLogoTwitter className=" text-4xl ml-[15px] text-[#1DA1F2] max-[640px]:text-2xl " />
                      <IoLogoYoutube className=" text-4xl ml-[15px] text-[#FF0000] max-[640px]:text-2xl " />
                      <SiMinutemailer className=" text-4xl ml-[15px] text-blue-400 max-[640px]:text-2xl " />
                      <FaLinkedin className=" text-4xl ml-[15px] text-[#0077B5] max-[640px]:text-2xl " />
                      <GrInstagram className=" text-4xl ml-[15px] text-[#FD1D1D] max-[640px]:text-2xl " />
                    </div>
                </div>
                <div className=" w-[480px] max-[640px]:w-[400px] max-[640px]:ml-[30px] ">
                    <div>
                        <h1 className=" text-4xl font-mam font-[600] text-[#144E5A] ">Send Us a Message</h1>
                    </div>
                    <div className=" w-[350px] text-gray-500 mt-[10px] ">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className=" mt-[10px] ">
                        <input type="text" placeholder="Name" className=" w-[300px] h-[35px] rounded-[7px] border-2 border-[#144E5A]  text-[20px] " />
                    </div>
                    <div className=" mt-[10px] ">
                        <input type="text" placeholder="Phone Number" className=" w-[300px] h-[35px] rounded-[7px] border-2 border-[#144E5A]  text-[20px] " />
                    </div>
                    <div className=" mt-[10px] ">
                        <input type="email" placeholder="Email Name" className=" w-[300px] h-[35px] rounded-[7px] border-2 border-[#144E5A]  text-[20px] " />
                    </div>
                    <div className=" mt-[10px] ">
                        <input type="text" placeholder="Message" className=" w-[200px] pb-[30px] rounded-[7px] border-2 border-[#144E5A]  text-[20px] " />
                    </div>
                    <div className=" max-[640px]:mb-[30px] ">
                        <button className=" py-2 px-8 bg-[#144E5A] mt-[30px] text-white font-medium rounded-md ">Send</button>
                    </div>
                </div>
            </div>
            {/* contact */}

            {/* main */}
        </div>
    );
};

export default Contact;