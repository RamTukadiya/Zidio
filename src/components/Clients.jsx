import React from 'react';
import Slider from 'react-slick';
import reviewsData from '../../public/clients.json'; // Assuming your JSON file has client data

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at once
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

  // Check if reviews data is available
  if (!reviewsData || reviewsData.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Client Reviews</h2>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center mx-2"
          >
            {/* Adding the dummy image */}
            <img
              src={`https://via.placeholder.com/150?text=Photo+${review.id}`}
              alt={review.client}
              className="mx-auto mb-4 rounded-full"
              style={{ width: '100px', height: '100px' }} // Set size for image
            />
            <p className="text-gray-600 italic">"{review.review}"</p>
            <h3 className="font-semibold mt-2">{review.client}</h3>
            <div className="text-yellow-500">
              {'★'.repeat(review.rating)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
