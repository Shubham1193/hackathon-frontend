import React from "react";
import { Link } from "react-router-dom";
import food  from "../assets/food.png"
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";


export const Home = () => {
  return (
    <div className=" h-screen">
      <div className="self-center whitespace-nowrap text-sm sm:text-xl  flex justify-center font-semibold dark:text-white w-[100vw] my-4 flex flex-wrap flex-row  ">
        <img src="https://www.pngall.com/wp-content/uploads/5/Healthy-Food-Diet-PNG-Image.png" className="w-[20.333333%] h-1/6 my-4 flex-wrap" />
        <span className=" text-amber-600 w-2/4 p-4  md:my-24 text-wrap ">
          Struggling to find the right diet that suits your lifestyle and health goals? Look no further than our Diet Recommendations App. Whether you're aiming to lose weight, gain muscle, or simply eat healthier, our app provides personalized diet plans tailored to your unique needs.
        </span>
      </div>

      <div className="self-center whitespace-nowrap text-sm sm:text-xl  flex justify-center font-semibold dark:text-white w-[100%] ">
        <Link
          to="/generate-diet"
          className="px-4  bg-amber-600 rounded-lg text-white p-2 my-4"
        >
          Generate Diet
        </Link>
      </div>
      <div className="self-center  mx-auto whitespace-nowrap  text-sm sm:text-xl my-2 py-4 flex flex-col md:justify-around items-center font-semibold dark:text-white w-[80%] md:h-64 h-[75vh] rounded-sm md:flex-row">
        <div className="h-full md:w-[20%] w-[60%] mt-4  rounded-lg ">
          <div className="step-title text-center ">Set Details</div>
          <div
            className="h-[100%] md:w-[100%] w-[100%] mt-4 border-2 rounded-lg"
            style={{
              backgroundImage: `url(${step1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat : "no-repeat"
            }}
          >
            {" "}
          </div>
        </div>
        <div className="h-full md:w-[20%] w-[60%] mt-4  rounded-lg">
          <div className="step-title text-center">Generate Diet</div>
          <div
            className="h-[100%] md:w-[100%] w-[100%] mt-4 border-2 rounded-lg"
            style={{
              backgroundImage: `url(${step2})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat : "no-repeat"
            }}
          >
            {" "}
          </div>
        </div>
        
      </div>
    </div>
  );
};
