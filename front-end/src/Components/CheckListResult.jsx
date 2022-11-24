import React from "react";

export default function CheckListResult({ items }) {
  return (
    <fieldset className="flex h-fit justify-center">
      <div className="h-full flex flex-col">
        <div className="flex flex-col my-8 h-full w-60 ">
          {items.map((val) => (
            <div
              key={val.id}
              className="flex justify-center   w-3/4 items-start"
            >
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={val.id}
                  className="select-none font-medium text-gray-700"
                >
                  {val.itemname}
                </label>
              </div>
              <div className="ml-3 flex h-7 items-center">
                <input
                  id={val.id}
                  name={val.itemname}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
