import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useSelector } from "react-redux";
const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    height: '',
    weight: '',
    dietPreference: '',
    motive: '',
    diseases : '',
    allergies : ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3005/api/user/get-user", {
          headers: {
            Authorization: currentUser.token
          }
        });
        setFormData(res.data)
        console.log(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUser();
  }, [currentUser.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put('http://localhost:3005/api/user/update-details', formData , {
        headers: {
          Authorization: currentUser.token
        }
      }); // Make PUT request
      console.log('Updated user:', response.data); // Log updated user data
      setFormData(response.data)
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error updating user:', error); // Log any errors
      // Handle error (e.g., show error message)
    }
  };


  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center text-black">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 text-black rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200 text-black"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Weight:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full  text-black focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Diet Preference:</label>
          <input
            type="text"
            name="dietPreference"
            value={formData.dietPreference}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Motive for Diet:</label>
          <input
            type="text"
            name="motive"
            value={formData.motive}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none text-black focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Diseases you have :</label>
          <input
            type="text"
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full  text-black focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Allergies you have:</label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300  text-black rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
