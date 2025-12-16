import music_icon from "../assets/music-svg.png";
import tv_icon from "../assets/tv-svg.png";
import phone_icon from "../assets/phone-svg2.png";
import section_image from "../assets/sound-profile.jpg"
import Sound_Profile from "../components/Sound_Profile";
import { useBreakpoint } from "../hooks/useBreakpoint";

const Sound_Profiles = ({s5, textRef, imageRef}) => {
 const isLaptop = useBreakpoint();
    return isLaptop ? <Laptop s5={s5} textRef={textRef} imageRef={imageRef}/> : <Mobile s5={s5} textRef={textRef} imageRef={imageRef}/>
};

const Laptop = ({s5, textRef, imageRef}) => {
  return (
    <section id="section5" ref={s5} className="min-h-screen bg-neutral-100 text-neutral-800 flex gap-20">
      <div  ref={textRef} className="w-[55%] flex flex-col items-center justify-center pl-25">
        <h2 className="text-8xl font-bold">Optimized sound profiles</h2>
        <p className="text-3xl mt-15">
          While using USB-C audio, you can select between three distinct sound
          profiles:
        </p>
        <div className="flex flex-col gap-10 mt-10">
          <Sound_Profile
            src={music_icon}
            desc={
              <>
                <span className="font-bold">Beats Signature profile</span>{" "}
                provides balanced tuning for music.
              </>
            }
          />
          <Sound_Profile
            src={tv_icon}
            desc={
              <>
                <span className="font-bold">Entertainment profile</span>{" "}
                offers an elevated experience for films and games.
              </>
            }
          />
          <Sound_Profile
            src={phone_icon}
            desc={
              <>
                <span className="font-bold">Conversation profile</span>{" "}
                optimises voice for phone calls or podcasts.
              </>
            }
          />
        </div>
      </div>
      <div ref={imageRef} className="w-[45%]">
        <img src={section_image} width={650} alt="" />
      </div>
    </section>
  );
};

const Mobile = ({s5, textRef, imageRef}) => {
  return (
    <section id="section5" ref={s5} className="min-h-screen bg-neutral-100 text-neutral-800 px-5 py-7">
        
      <div  ref={textRef} className="w-full flex flex-col items-center justify-center ">
        <h2 className="text-7xl font-bold">Optimized sound profiles</h2>
        <div ref={imageRef} className="w-full mt-7">
        <img src={section_image} width={650} alt="" className="rounded-2xl"/>
      </div>
        <p className="text-3xl mt-12">
          While using USB-C audio, you can select between three distinct sound
          profiles:
        </p>
        <div className="flex flex-col gap-10 mt-10">
          <Sound_Profile
            src={music_icon}
            desc={
              <>
                <span className="font-bold">Beats Signature profile</span>{" "}
                provides balanced tuning for music.
              </>
            }
          />
          <Sound_Profile
            src={tv_icon}
            desc={
              <>
                <span className="font-bold">Entertainment profile</span>{" "}
                offers an elevated experience for films and games.
              </>
            }
          />
          <Sound_Profile
            src={phone_icon}
            desc={
              <>
                <span className="font-bold">Conversation profile</span>{" "}
                optimises voice for phone calls or podcasts.
              </>
            }
          />
        </div>
      </div>
      
    </section>
  );
};

export default Sound_Profiles;
