import Marquee from "react-fast-marquee";
import getAllposts from '../lib/getAllposts'
import getAlldara from '../lib/gertAlldara'

export default async function Notise() {
    const posts = await getAllposts();
    const data = await getAlldara();

    return (
        <div className=" mt-[80px] ">
            <div className=" flex justify-center items-center " >
                <div>
                    <h1 className=" text-5xl font-mam font-[600] text-[#144E5A] max-[640px]:text-4xl " >School Notice</h1>
                </div>
            </div>
            <div className=" w-[85%] mx-auto mt-[40px] text-[20px] ">
            <Marquee autoFill pauseOnHover  >
                <div className=" text-green-500 mx-10 flex justify-center items-center gap-[150px]  ">
                    {posts.map((posts)=> (
                    <li key={posts.id} className="" ><p>{posts.title}</p></li>
                ))}
                </div>
                {/* <div className=" text-red-500 ">
                   {data.map((df)=> (
                    <li key={df.id}>{df.title}</li>
                ))}
                </div> */}
            </Marquee>
            </div>
            
        </div>
    );
};

 