import React from 'react';

const SwitchToggle = ({ isOn, handleToggle }) => {
  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={isOn}
        onChange={handleToggle}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-500 rounded-full"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition-all duration-200 ease-in">
        <span className={`${
          isOn ? 'translate-x-5' : 'translate-x-0'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in`}></span>
      </div>
    </div>
  );
};

export default SwitchToggle;