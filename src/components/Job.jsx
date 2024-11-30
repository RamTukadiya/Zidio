import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"; // Import your job data
import Cards from "./Cards"; // Assuming Cards component is defined elsewhere

function Job() {
  // Filter the data based on status to only show available jobs
  const filterData = list.filter((data) => data.status === "Available");

  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-20">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Available Job Opportunities
          </h1>
          <p className="text-lg text-opacity-80">
            Explore the job openings and apply to join our team!
          </p>
        </div>

        {/* Slider Section */}
        <div className="pb-10 py-16">
          <Slider {...settings}>
            {filterData.length > 0 ? (
              filterData.map((item) => (
                <div className="px-4" key={item.id}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">{item.Role}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.technologie}</p>
                      <p className="text-gray-600 text-sm mb-4">{item.salary}</p>
                      <p className="text-gray-600 text-sm">{item.Discription.slice(0, 120)}...</p>

                      {/* Status of the Job */}
                      <div className={`mt-4 ${item.status === "Available" ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} text-xs py-1 px-3 rounded-md`}>
                        {item.status}
                      </div>

                      {/* Apply Button */}
                      {item.status === "Available" && (
                        <div className="mt-4">
                          <button
                            onClick={() => alert("Redirecting to apply...")}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                          >
                            Apply Now
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-800 w-full py-6">
                <p>No available job opportunities at the moment. Please check back later.</p>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Job;
