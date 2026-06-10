

const Footer = () => {
    return (
        <div className=" mt-[300px]  ">
        <div className=" flex justify-center  gap-[70px]  max-[640px]:w-[255px] max-[640px]:flex-col max-[640px]:mx-auto  ">

            <div className="  w-[265px]   ">
                <h1 className=" text-2xl font-[600] text-[#144E5A] font-nitu ">This my primary School</h1>
            </div>

            <div className=" w-[130px]   ">
            <ul className="  gap-[50px] text-[20px] 
             font-[600] text-gray-500 ">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Academice</a></li>
                <li><a href="#">Admission</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Notice Board</a></li>
                <li><a href="#">Contcat Us</a></li>
            </ul>
            </div>

            <div className=" w-[170px]   ">
            <ul className="  gap-[50px] text-[20px] 
             font-[600] text-gray-500  ">
                <li><a href="#">Online Class</a></li>
                <li><a href="#">Heathl Service</a></li>
                <li><a href="#">Tell Phone Service</a></li>
                <li><a href="#">Home Work</a></li>
                <li><a href="#">Technologice</a></li>
                <li><a href="#">Medical Service</a></li>
                <li><a href="#">Physical Exercise</a></li>
            </ul>
            </div>

            <div className=" w-[255px]   ">

            <div>
                <h1 className=" text-2xl text-[#144E5A] font-[600] font-nitu ">Student information</h1>
            </div>
            <h1 className=" text-[20px] text-[#144E5A] ">Student Reg ID</h1>
            <input type="text" className=" border text-[20px] w-[250px] h-[35px] mt-[25px] rounded-md border-[#144E5A] "  />
            </div>



        </div>
       
    </div>
    );
};

export default Footer;