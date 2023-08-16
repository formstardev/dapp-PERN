import React  from "react";
import { XIcon } from "@heroicons/react/outline";

const AddTabPopUp = (props) => {
  const { isOpen, setIsOpen, onAddTab, setName, tabName } = props;
  const handleAddClick = () => {
  const newTab = { Title:tabName, id:`${tabName}_id`};
    onAddTab(newTab);
    setIsOpen(false);
    setName("");
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      } sm:w-full w-10/12 flex justify-center items-center`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#373c40] border border-white border-opacity-10 rounded-lg overflow-hidden shadow-xl max-w-md sm:w-full w-full">
          <div className="flex flex-col">
            <div className="flex justify-between items-center bg-[#373c40] px-4 py-2">
              <p className="text-white text-sm font-bold">Add New Tab</p>
              <button
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 bg-[#373c40] ">
              <div className=" mb-4">
                <p className="text-white text-sm font-bold mr-4">TabName</p>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>              
              <div className="mt-2 flex justify-center items-center">
                <button
                  className="bg-[#3f85e3] sm:hover:bg-opacity-80 rounded-lg px-9 py-1 text-[15px] text-white"
                  onClick={handleAddClick}
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTabPopUp;