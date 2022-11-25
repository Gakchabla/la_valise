import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-bg border">
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
