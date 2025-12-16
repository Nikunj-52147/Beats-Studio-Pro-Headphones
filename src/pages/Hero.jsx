import white_headphone from "../assets/standstone-01-white.png";
import { forwardRef } from "react";

const Hero = forwardRef(({ imgRef, readRef, comfortRef }, ref) => {
  return (
    <section id="section1" ref={ref} className="bg-black h-screen bg-linear-[346deg,#fdfdfc_40%,#18191a_40%]">
      <div
        ref={imgRef}
        className="absolute inset-0 flex items-start justify-center z-20 pointer-events-none mt-7"
      >
        <div
          id="headphone"
          className="bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${white_headphone})`,
            width: "700px",
            height: "700px",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      <div className="flex flex-col pl-25 pt-20 gap-15">
        <div className="">
          <h1 className="heading text-9xl font-semibold text-[#fcfcfe]">Music Everywhere</h1>
          <h1 className="heading text-9xl font-semibold text-[#e1d8d3]">Anytime</h1>
          <div className="h-0.5 w-[35%] bg-[#78797d] mt-8"></div>
          <div ref={readRef} className="mt-7 cursor-pointer text-xl font-semibold uppercase text-[#b7b9bb]">
           Read More
          </div>

        </div>

        <div ref={comfortRef} className="self-end w-md flex flex-col gap-5 text-center pr-15 text-neutral-900">
          <h2 className="font-bold text-4xl">All-day Comfort</h2>
          <p className="text-lg">
            The <b>upgraded UltraPlush over-ear cushions</b> feature seamless
            engineered leather, delivering all-day comfort and exceptional
            durability.
          </p>
          <div className="w-fit m-auto px-5 py-1.5 rounded-3xl border-2 border-[#78797d] cursor-pointer z-99">
            <div className="inline-block text-center font-bold">Add to Cart</div>
            <div className="bg-neutral-900 h-2 w-2 rounded inline-block ml-2 text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
