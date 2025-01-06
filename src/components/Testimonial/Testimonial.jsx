import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";

const testimonialData = [
  {
    name: "Suraj Mukhi",
    image: r1,
    description:
      "Thank you Riders gallery for Axor Helmet Provide...Best Riding Gears Store in Jamshedpur. Bikers are Heaven.",
    aosDelay: "0",
  },
  {
    name: "Sitikantha Dutta",
    image: r2,
    description:
      "Wonderful collection of all kinds of riding gear. I am fully satisfied with the behavior and the way of handling a customer. Wish the shop flourish more in the future.",
    aosDelay: "300",
  },
  {
    name: "Salkhan Hembrom",
    image: r3,
    description: "Best helmet shop in Jamshedpur.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  const { ref: ratingRef, inView: ratingInView } = useInView({ triggerOnce: true });
  const { ref: reviewsRef, inView: reviewsInView } = useInView({ triggerOnce: true });

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12 text-center">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>

            {/* Rating and Review Count Animation */}
            <div
              className="flex justify-center items-center space-x-10 pt-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-center" ref={ratingRef}>
                <span className="text-5xl font-bold text-primary">
                  {ratingInView && <CountUp start={0} end={4.9} duration={8} decimals={1} />}
                </span>
                <p className="text-lg">Star Rating</p>
              </div>
              <div className="text-center" ref={reviewsRef}>
                <span className="text-5xl font-bold text-primary">
                  {reviewsInView && <CountUp start={0} end={380} duration={8} />}
                </span>
                <p className="text-lg">Happy Customers Reviews</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
