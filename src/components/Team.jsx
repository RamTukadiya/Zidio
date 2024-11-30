import React from 'react';
import Slider from 'react-slick';
import teamData from '../../public/team.json';

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 items for medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 item for small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Amazing Team</h2>
      <Slider {...settings}>
        {teamData.map((member) => (
          <div key={member.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mx-4 my-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full border-4 border-pink-500 mb-4 transform transition-all duration-300 hover:rotate-12"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
