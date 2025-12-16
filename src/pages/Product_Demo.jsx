import demoVideo from "../assets/video.mp4";

const Product_Demo = ({s3}) => {
  return (
    <section id="section3" ref={s3} className="min-h-screen bg-neutral-200 text-neutral-800 pt-7 ">
      <h2 className="text-[7rem] tracking-wide uppercase font-bold text-center">Iconic Sound</h2>
      <div className="mt-10">
         <video
          width="500"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
          controls
          className="rounded-2xl ml-5"
        >
          <source src={demoVideo} type="video/mp4" />
        </video>
        <div className="w-[32%] ml-auto mt-35 text-lg pr-5">
          <p>
            Person wearing Beats Studio Pro Wireless Headphones in the colour
            Sandstone Featuring a fully custom-made acoustic platform.
            Personalised spatial audio with dynamic head tracking. Fully
            adaptive Active Noise Cancelling. Transparency mode. Lossless audio.
            Up to 40 hours of battery life and enhanced Apple and Android
            compatibility.
          </p>
          <br />
          <p>
            Beats Studio Pro delivers surround sound you can take anywhere. With
            dynamic head tracking, advanced built-in sensors create an
            interactive experience, so you can get lost in cinematic sound from
            your favourite content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product_Demo;
