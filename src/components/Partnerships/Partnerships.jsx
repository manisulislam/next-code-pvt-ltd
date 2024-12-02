import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css";
import "swiper/css/autoplay"; // Import the CSS for autoplay

import img1 from "../../assets/images/plogo-1.png";
import img2 from "../../assets/images/plogo-2.png";
import img3 from "../../assets/images/plogo-3.png";
import img4 from "../../assets/images/plogo4.jpeg";
import img5 from "../../assets/images/plogo-5.jpeg";
import img6 from "../../assets/images/plogo-6.jpeg";

const Partnerships = () => {
  const partners = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          Our Trusted Partners
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]} // Register the Autoplay module here
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partnerships;
