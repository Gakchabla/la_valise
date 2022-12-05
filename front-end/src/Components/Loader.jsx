import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-valise border md:w-[33vw] lg:w-[33vw]">
      <div className="w-[90vw] h-[90vh]  bg-white border-bg rounded-2xl flex justify-center items-center">
        <img
          src="https://i.giphy.com/media/5YbQYuAnMfNkUU6GpT/giphy.webp"
          alt="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
