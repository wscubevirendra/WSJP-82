import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function MultipleItems({ allProduct }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container p-5">
      <Slider {...settings}>
        {
          allProduct.map((prod, i) => {
            return (
              <Link key={i} className="max-w-sm p-2 rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200" to={`/productDetails/${prod.id}`}>
                <div >
                  <img
                    className="w-full h-48 object-cover"
                    src={prod.thumbnail}
                    alt="Product Image"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{prod.title}</h2>

                    <p className="text-gray-600 mt-2">Experience comfort with style.</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold text-gray-900">${prod.price}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div></Link>
            )
          })
        }


      </Slider>
    </div>
  );
}

export default MultipleItems;
