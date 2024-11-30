import React, { useEffect, useState } from 'react';
import achievementsData from '../../public/achievements.json';

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setAchievements(achievementsData);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center mb-4">{item.description}</p>
              {item.link && (
                <div className="flex justify-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
