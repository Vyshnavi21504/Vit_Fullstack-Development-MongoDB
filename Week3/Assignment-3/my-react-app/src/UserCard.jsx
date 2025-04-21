import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <span className="text-xl font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3 mt-3">
          <button className="text-blue-500 hover:text-blue-700 text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
