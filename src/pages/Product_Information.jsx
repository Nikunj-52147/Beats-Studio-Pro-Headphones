
const Product_Information = ({s2, sec2ref}) => {
  return (
    <section id="section2" ref={s2} className="bg-[#18191a] text-white min-h-screen pl-25 flex justify-center items-center">
      <div className="">
        <div className="w-[44%] ">
          <div ref={sec2ref} className="flex flex-col gap-3 text-lg">

         
          <h2 className="text-5xl font-bold pb-5">Product Information</h2>
        
            <p>Beats’ custom acoustic platform delivers rich, immersive sound</p> 
            <p>Custom-made 40mm active driver enhances sound clarity and near-zero
            distortion even at high volumes – an improvement of up to 80%
            compared to Beats Studio Wireless3, providing increased audio
            fidelity</p>
            <p>Integrated digital processor optimises frequency responses
            for a powerful, balanced sound profile</p>  
            <p>Fully adaptive Active Noise
            Cancelling (ANC) keeps you immersed in the music</p> 
            <p>Transparency mode
            blends your listening experience with the world around you</p>
            <p>Personalised spatial audio with dynamic head tracking for
            theatre-like sound from your favourite content</p> 
            <p>Music and films
            available in Dolby Atmos deliver full immersion with 360-degree
            surround sound</p>
           </div>
          <div className="w-fit mt-7 px-5 py-1.5 rounded-3xl bg-neutral-800 border-2 border-[#78797d]  cursor-pointer">
            <div className="inline-block text-center font-bold">Add to Cart</div>
            <div className="bg-white h-2 w-2 rounded inline-block ml-2 text-center"></div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </section>
  );
};

export default Product_Information;
