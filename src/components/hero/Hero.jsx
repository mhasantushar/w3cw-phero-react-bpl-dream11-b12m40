import React, { memo } from "react";
import herologo from "../../assets/banner-main.png";
import bgimg from "../../assets/bgimg.png";

const Hero = memo(() => {
  return (
    <section className="mx-auto mb-20 border rounded-3xl max-w-[1200px]">
      <div>
        <div
          className="bg-cover inverted rounded-3xl min-h-[545px] overflow-hidden hero"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className="text-center hero-content">
            <div>
              <img
                className="block mx-auto mb-6"
                src={herologo}
                alt="Hero Image"
              />
              <h1 className="mb-5 font-bold text-4xl">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="mb-5">Beyond Boundaries Beyond Limits</p>
              <button className="bg-[#E7FE29] rounded-3xl btn">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
