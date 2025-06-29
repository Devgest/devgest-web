import React from "react";

function NavBar() {
  return (
    <div className="flex items-center fixed bg-white/70  w-[80%] place-content-between rounded-full px-2 py-2 top-4 backdrop-blur-[1.5px] border border-gray-200">
      <div className="flex items-center ml-5 text-blue-500 font-bold text-xl">
        DevGest
      </div>
      <button className="bg-white text-black rounded-full border-gray-300 shadow-sm border px-5 py-2 w-max text-[16px] hover:bg-gray-200">
        Sign Up
      </button>
    </div>
  );
}

export default NavBar;
