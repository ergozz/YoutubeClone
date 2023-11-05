import React from "react";

const SkeletonLoading = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr.map((item, index) => (
    <div
      key={index} 
      role="status"
      className="max-w-sm p-4 border rounded shadow animate-pulse md:p-6 border-gray-700"
    >
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          {/* */}
        </svg>
      </div>

      <div className="flex items-center mt-4 space-x-3">
        <svg
          className="w-10 h-10 text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {/* SVG içeriği burada */}
        </svg>
        <div>
          <div className="h-2.5 rounded-full bg-gray-700 w-32 mb-2"></div>
          <div className="w-48 h-2 rounded-full bg-gray-700"></div>
          <div className="mt-2 w-48 h-2 rounded-full bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  ));
};

export default SkeletonLoading;
