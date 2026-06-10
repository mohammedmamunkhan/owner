

const Admission = () => {
    return (
        <div className=" mt-[80px] ">
            <div className=" flex justify-center items-center  ">
                <div>
                    <h1 className=" text-[#144E5A] font-mam font-[600] text-5xl max-[640px]:text-4xl ">Admission From</h1>
                </div>
            </div>
            <div className=" text-gray-500 text-center mt-[10px] max-[640px]:w-[400px] max-[640px]:mx-auto ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti sed provident dolorum repellat non.</p>
            </div>

            
            <div className=" mt-[80px] w-[70%] border-2 border-black mx-auto py-[60px] rounded-3xl flex justify-center items-center max-[640px]:w-[400px]  ">
                <form action="" className=" w-[700px] max-[640px]:w-[350px] ">
                  <div className=" text-right">
                    <label htmlFor="name" className=" text-[25px] max-[640px]:text-[16px] " >Student Name : </label>
                    <input type="text" name="student-name" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] "  />
                  </div>
                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="father name" className=" text-[25px] max-[640px]:text-[16px] " >Father Name : </label>
                    <input type="text" name="father-name" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="mather" className=" text-[25px] max-[640px]:text-[16px] " >Mather Name : </label>
                    <input type="text" name="mather-name" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="dete of birth" className=" text-[25px] max-[640px]:text-[16px] " >Dete of Birth : </label>
                    <input type="text" name="dete-of-birth" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="nationality" className=" text-[25px] max-[640px]:text-[16px] " >Nationality : </label>
                    <input type="text" name="nationality" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="nationality" className=" text-[25px] max-[640px]:text-[16px] " >
                        Gender : </label>
                    <select name="gender" id="gender" className=" w-[400px] border border-black rounded-lg h-[35px] text-[20px] ml-[40px]  
                     max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px]" >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="Fimale">Fimale</option>
                        <option value="another">An other</option>
                    </select>
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="religion" className=" text-[25px] max-[640px]:text-[16px] " >Religion : </label>
                    <select name="religion" id="religion" className=" w-[400px] border border-black rounded-lg h-[35px] text-[20px] ml-[40px] 
                     max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " >
                        <option value="religion">Religion</option>
                        <option value="islam">Islam</option>
                        <option value="hindu">Hindu</option>
                        <option value="christian">Christian</option>
                        <option value="buddhd">Buddhd</option>
                        <option value="other">Another</option>
                    </select>
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="father-id" className=" text-[25px] max-[640px]:text-[16px] " >Father ID : </label>
                    <input type="text" name="father-id" className=" border border-black  ml-[40px] w-[400px] text-[20px] h-[35px]  
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="mother-id" className=" text-[25px] max-[640px]:text-[16px] " >Mother ID : </label>
                    <input type="text" name="mother-id" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>
                   
                  

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="phone number" className=" text-[25px] max-[640px]:text-[16px]  " >Phone Number : </label>
                    <input type="text" name="phone number" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="village" className=" text-[25px] max-[640px]:text-[16px] " >Village & town Name : </label>
                    <input type="text" name="village" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="thana" className=" text-[25px] max-[640px]:text-[16px] " >Thana Name : </label>
                    <input type="text" name="thana" className=" border border-black  ml-[40px] w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>

                  <div className=" mt-[30px] text-right ">
                    <label htmlFor="district" className=" text-[25px] max-[640px]:text-[16px] " >District Name : </label>
                    <input type="text" name="district" className=" border border-black  ml-[40px]  w-[400px] h-[35px] text-[20px] 
                     rounded-lg max-[640px]:w-[160px] max-[640px]:ml-[10px] max-[640px]:text-[16px] max-[640px]:h-[30px] " />
                  </div>


                  <button type="submit"  className="   text-xl py-[12px] px-[50px] hover:text-white max-[640px]:px-[35px] max-[640px]:py-[10px] text-[25px] mt-[80px] ml-[500px] max-[640px]:ml-[150px] font-medium text-[#144E5A] border-2 border-[#144E5A] rounded-[15px] group relative flex items-center overflow-hidden "> 
             <span className=" absolute left-0 w-full h-0 transition-all bg-[#144E5A] opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease overflow-hidden  "></span>
                <span className=" relative  " >Submit </span></button>

                </form>
            </div>
            
        </div>
    );
};

export default Admission;