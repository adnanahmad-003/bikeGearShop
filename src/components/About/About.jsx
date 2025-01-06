import CarPng from "../../assets/gears.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 sm:mt-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Riders Gallery, the first and finest shop in
                Jamshedpur dedicated to bikers and their passion for the road.
                We pride ourselves on being a one-stop destination for all
                biking enthusiasts, offering an extensive range of premium
                riding gear and accessories tailored to meet every rider's
                needs.
              </p>
              <p data-aos="fade-up">
                Our collection includes top-quality helmets from leading brands
                like MT, Axor, and Scimitar, as well as a variety of gloves,
                jackets, balaclavas, engine oils, cleaning tools, and so much
                more. Whether you're a daily commuter, a long-distance rider, or
                a passionate adventurer, we have the perfect gear to ensure your
                safety, comfort, and style.
              </p>
              <button
                data-aos="fade-up"
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/o1N6zQUAsdGA6HgN6",
                    "_blank"
                  );
                }}
                className="button-outline"
              >
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
