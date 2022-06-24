import data from './data.json'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegHeart, FaChevronRight, FaStar } from "react-icons/fa";
import { FcUpRight } from "react-icons/fc";

export default function App() {
  return (

    <div className="p-4">
      {data.map((data) => (
        <div key={data.id}>

          <h1 className="w-auto font-extrabold text-gray-900 sm:text-4xl text-9xl">{data.Heading}</h1>
          <div className="flex items-center">
            <h6 className="text-gray-500 text-xl" >Multi-Day Course</h6>
            <AiOutlineQuestionCircle className="mx-2" />
          </div>

          <div className="md:flex mt-10 p-20 md:p-0 space-x-4">
            <article className="text-lg w-full font-medium">

              <p className="text-xl  text-gray-600">{data.Para}</p>
              <div className="flex mt-3 items-center">
                <img className="h-8 w-8 rounded-full" src={data.Image} alt={data.Image} />
                <h5 className=" sm:text-l mx-3 font-extrabold text-indigo-500">{data.Name}</h5>

              </div>
              <div className="flex mt-2 items-center">
                <div className="flex">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                  
                </div>
                <span className="mx-3 text-gray-400 text-xs">{data.Teacher} total review for this teacher</span>
              </div>

              <div className="flex mt-2 items-center">
                <div className="flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  
                </div>
                <span className="mx-3 text-gray-400 text-xs">{data.Class} total review by class</span>
              </div>

              <h3 className="mt-2">Completed by {data.Learner} learners</h3>
              <div className="flex mt-5 items-center">
                <button className="flex items-center rounded-3xl border border-transparent bg-indigo-600 px-10 py-3 text-base font-medium text-white
                 shadow-sm hover:bg-indigo-700">See Class Schedule<FaChevronRight className="mx-1" /> </button>

                <div className="flex mx-10 items-center">
                  <FaRegHeart className="text-indigo-500"/>
                  <span className="mx-1 text-indigo-500">Save</span>
                </div>
                <div className="flex mx-4  items-center">
                  <FcUpRight className="text-indigo-500" />
                  <span className="mx-1 text-indigo-500">Share</span>
                </div>
              </div>
            </article>
            <div className="px-8 w-full h-80 bg-white rounded-t-lg lg:gap-6">

              <img src={data.SideImage} alt={data.SideImage}
                className="h-full  rounded-t-xl object-center object-cover" />
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}