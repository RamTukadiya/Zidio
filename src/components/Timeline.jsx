import React from 'react';
import { FaStar, FaBriefcase, FaGraduationCap, FaTrophy, FaGlobe, FaRocket, FaRegBuilding } from 'react-icons/fa';

const Timeline = () => {
  return (
    <div className="timeline-container max-w-screen-xl mx-auto p-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Zidio's Journey and Milestones
      </h2>

      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:flex-wrap justify-center items-center">
        {/* Timeline Item 1 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-blue-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-blue-600 group-hover:text-white mb-4">
            <FaStar />
          </div>
          <h3 className="text-xl font-semibold text-center">Zidio Founded</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            In 2010, Zidio was founded as a software solutions company based in India.
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-green-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-green-600 group-hover:text-white mb-4">
            <FaBriefcase />
          </div>
          <h3 className="text-xl font-semibold text-center">First Major Client</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            In 2012, Zidio partnered with a leading e-commerce company in India.
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-yellow-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-yellow-600 group-hover:text-white mb-4">
            <FaGraduationCap />
          </div>
          <h3 className="text-xl font-semibold text-center">Industry Recognition</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Zidio won a prestigious award for innovation in 2016.
          </p>
        </div>

        {/* Timeline Item 4 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-red-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-red-600 group-hover:text-white mb-4">
            <FaTrophy />
          </div>
          <h3 className="text-xl font-semibold text-center">Global Expansion</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            In 2018, Zidio expanded to the US and Europe, reaching new markets.
          </p>
        </div>

        {/* Timeline Item 5 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-purple-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-purple-600 group-hover:text-white mb-4">
            <FaGlobe />
          </div>
          <h3 className="text-xl font-semibold text-center">International Offices</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            By 2019, Zidio opened new offices in the UK, Australia, and Southeast Asia.
          </p>
        </div>

        {/* Timeline Item 6 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-teal-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-teal-600 group-hover:text-white mb-4">
            <FaRocket />
          </div>
          <h3 className="text-xl font-semibold text-center">Product Launch</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Zidio launched its flagship product in 2020, revolutionizing the tech industry.
          </p>
        </div>

        {/* Timeline Item 7 */}
        <div className="timeline-item group hover:shadow-xl hover:bg-orange-600 hover:text-white p-6 rounded-xl max-w-sm md:w-72 mx-4 mb-8 transition-all transform hover:scale-105">
          <div className="icon text-4xl text-orange-600 group-hover:text-white mb-4">
            <FaRegBuilding />
          </div>
          <h3 className="text-xl font-semibold text-center">Zidio Goes Public</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">
            In 2023, Zidio went public, marking a new chapter in its growth and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
