import { ChevronRight } from "lucide-react";
import VEDIO from "../assets/home-vedio.mp4";
import { Fade } from "react-awesome-reveal";
function Home() {
  return (
    <>
      <section>
        <div className="main relative bg-white z-20">
          <div className="w-2/6 absolute top-[20%] left-[7%] z-20">
            <Fade delay={1000} cascade triggerOnce>
              <div className="oswald-500">
                <p className="uppercase text-5xl font-bold">
                  Bettering the business of
                </p>
                <p className="uppercase text-[#0D2BFE] text-5xl font-bold">
                  goverment procurement
                </p>
              </div>
              <p className="font-normal pt-4 text-lg">
                Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy dirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="flex items-center gap-8 pt-4 oswald-400 font-semibold">
                <button className="uppercase bg-[#0D2BFE] text-white py-2.5 px-4 rounded-md text-sm flex items-center cursor-pointer">
                  call to action
                </button>
                <button className="uppercase text-[#0D2BFE] text-sm flex items-center gap-1 cursor-pointer">
                  secondary cta <ChevronRight size={16} />
                </button>
              </div>
            </Fade>
          </div>
          <video autoPlay muted playsInline width="100%">
            <source src={VEDIO} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Home;
