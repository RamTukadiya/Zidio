import React from 'react'

export default function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 flex justify-center">
        {/* Responsive card, with Tailwind classes for mobile-friendly stacking */}
        <div className="card bg-base-100 w-full md:w-96 shadow-xl rounded-lg">
          <figure>
            {/* You can add an image or icon here if needed */}
          </figure>
          <div className="card-body">
            {/* Role and Status */}
            <h2 className="card-title text-lg md:text-2xl font-semibold">
              {item.Role}
              <div className="badge badge-secondary text-xs md:text-sm ml-2">
                {item.status}
              </div>
            </h2>

            {/* Technologies */}
            <h3 className="text-sm md:text-md font-semibold mt-2 text-gray-600">
              {item.technologie}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm mt-2 text-gray-500">{item.Discription}</p>

            {/* Salary and Apply Button - Stacked on mobile */}
            <div className="card-actions flex flex-col md:flex-row justify-between items-start md:items-center mt-4 space-y-2 md:space-y-0">
              {/* Salary Badge */}
              <div className="badge badge-outline text-xs md:text-sm">
                ${item.salary}
              </div>

              {/* Apply Button with Hover and Transition Effect */}
              <div className="cursor-pointer px-3 py-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white text-xs md:text-sm duration-200">
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
