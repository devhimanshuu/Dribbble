import React, { useState } from "react";
import logo from "../assets/images/pink-logo-dribbble-bg.png";

const Profile = () => {
  const [avatarFile, setAvatarFile] = useState(null);

  const handleAvatarChange = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  return (
    <div className="h-screen w-screen ">
      <div className=" flex flex-row">
        <img src={logo} alt="Dribbble Logo" className="w-32 ml-10 mt-10 " />
      </div>
      <div className="flex flex-col items-center mt-10  ">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-bold ">
            Welcome! Let's create your profile
          </h1>
          <p className="text-gray-500 mb-8 mt-6">
            Let others get to know you better! You can do these later
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Add an avatar</h2>
            <div className="flex">
              <div className=" rounded-full w-40 h-40 border border-dashed  border-grey-500 border-4 flex items-center justify-center">
                {avatarFile ? (
                  <img
                    src={URL.createObjectURL(avatarFile)}
                    alt="Avatar"
                    className="rounded-full w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    //   style="fill: rgba(128, 128, 128, 0.39);transform: ;msFilter:;"
                  >
                    <path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"></path>
                    <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"></path>
                  </svg>
                )}
              </div>
              <div className="grid grid-row-2 ">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="avatar"
                    className="block text-black-1000  mt-10 ml-10 cursor-pointer hover:text-pink-500 font-semibold rounded-md ring-gray-200 ring-offset-8 ring-1 "
                  >
                    Choose image
                  </label>
                </div>
                <input
                  id="avatar"
                  type="file"
                  className="hidden "
                  onChange={handleAvatarChange}
                />
                <p className="text-gray-500  ml-10">
                  Or choose one of our defaults
                </p>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-lg font-bold mb-4">Add your location</h2>
            <input
              type="text"
              className="w-full border-b border-gray-300 rounded-md px-4 py-2 "
              placeholder="Enter a location"
            />
          </div>

          <button className="w-4/12 bg-pink-200 text-white py-3 px-6 rounded-md hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
