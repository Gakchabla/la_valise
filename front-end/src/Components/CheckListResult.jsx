import React from "react";

export default function CheckListResult({ items }) {
  return (
    <fieldset className="flex h-fit justify-center ">
      <div className="h-full flex flex-col items-center ease-out duration-300 bg-[#8eb9c9] rounded-3xl w-5/6 md:w-4/6 lg:w-4/6">
        <div className="flex flex-col my-8 h-full w-60 ">
          {items.map((val) => (
            <div
              key={val.id}
              className="flex justify-center w-12/12 items-start"
            >
              <div className="min-w-0 w- flex-1 text-lg">
                <label
                  htmlFor={val.id}
                  className="select-none font-lg font-leagueSpartan text-slate-100"
                >
                  {val.name}
                </label>
              </div>
              <div className="ml-3 flex h-7 items-center">
                <input
                  id={val.id}
                  name={val.name}
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
