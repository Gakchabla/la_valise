import React from "react";

const AllYouNeed = [
  { id: 1, name: "Annette Black" },
  { id: 2, name: "Cody Fisher" },
  { id: 3, name: "Courtney Henry" },
  { id: 4, name: "Kathryn Murphy" },
  { id: 5, name: "Theresa Webb" },
];

export default function CheckListResult() {
  return (
    <fieldset className="flex h-screen justify-center">
      <div className="h-full flex flex-col">
        <legend className="text-lg font-medium self-center text-gray-900">
          Votre valise !
        </legend>
        <div className="flex flex-col ml-48 my-8 divide-y h-full w-96 border-gray">
          {AllYouNeed.map((val) => (
            <div
              key={val.id}
              className="flex justify-center   w-1/2 items-start py-4"
            >
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={val.id}
                  className="select-none font-medium text-gray-700"
                >
                  {val.name}
                </label>
              </div>
              <div className="ml-3 flex h-7 items-center">
                <input
                  id={val.id}
                  name={val.name}
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
