import { useEffect } from "react";
import hero from "../../assets/hero.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2 mt-8"
          >
            {theme === "dark" ? null : (
              <img
                src={hero}
                alt="Hero"
                className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              />
            )}
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif max-w-xl"
            >
              Conquer the Roads with Gear That Matches Your Drive.
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Get the Best Funky Helmets and Gears Without Breaking the Bank.
              Style, Safety, and Performance – All at Prices You'll Love!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/o1N6zQUAsdGA6HgN6",
                  "_blank"
                );
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
