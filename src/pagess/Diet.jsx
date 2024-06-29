import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const GenerateDiet = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [userr, setUserr] = useState({});
  const [cusine, setCuisine] = useState("");
  const [frequency, setFrequency] = useState(1); // Default to daily
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dishes, setDishes] = useState(null);
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3005/api/user/get-user", {
          headers: {
            Authorization: currentUser.token
          }
        });
        setUserr(res.data);
        console.log(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUser();
  }, [currentUser.token]);

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleDietGenerate = async () => {
    setIsLoading(true);
    setError(null);
    console.log(frequency);

    try {
      const response = await axios.post(
        "http://localhost:3005/api/user/generate-diet",
        { cusine, frequency  ,  userr},
        {
          headers: {
            Authorization: currentUser.token
          }
        }
      );
      setDishes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error making API call:", error);
      setError("An error occurred while generating the diet");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center gap-2 items-center mt-8">
      <select className="bg-slate-100 text-black rounded-lg" onChange={handleCuisineChange} value={cusine}>
        <option value="">Select Cuisine</option>
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Mediterranean">Mediterranean</option>
      </select>
      <select className="bg-slate-100 text-black rounded-lg" onChange={handleFrequencyChange} value={frequency}>
        <option value="1">1 Day</option>
        <option value="3">3 Days</option>
        <option value="5">5 Days</option>
      </select>
      <button className="px-4 bg-amber-600 rounded-lg text-white p-2 my-4" onClick={handleDietGenerate} disabled={isLoading}>
        Generate Diet
      </button>
      {error && <p className="error">{error}</p>}

      {isLoading && (
        <div className="flex items-center justify-center">
          <div role="status" className="p-4 rounded-lg">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {!isLoading && dishes && (
        <div className="w-[40%] p-4 rounded-xl border-2">
          <ReactMarkdown>{dishes}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default GenerateDiet;
