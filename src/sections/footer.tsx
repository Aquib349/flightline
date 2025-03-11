import { useRef } from "react";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import LinkedIn from "../assets/linkedin.png";
import Pattern1 from "../assets/patter-1.png";
import Pattern2 from "../assets/pattern-2.png";
import LOGO from "../assets/flight-logo.png";

export default function Footer() {
  const blueFooterRef = useRef<HTMLDivElement>(null);
  const Images = [Twitter, Facebook, Instagram, Youtube, LinkedIn];

  return (
    <>
      <section ref={blueFooterRef} className="section_footer bg-white relative text-sm">
        <div className="bg-blue-600 text-white py-12 rounded-t-3xl relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-2">
            <div className="text-center border-r border-white/60 py-4">
              <h3 className="text-lg font-bold oswald-500">
                LOREM IPSUM DOLOR SIT AMET, CONSETETUR
              </h3>
              <button className="mt-4 oswald-400 font-medium px-6 py-2 cursor-pointer bg-white text-black rounded-lg">
                CONTACT US
              </button>
            </div>
            <div className="text-center relative py-4">
              <h3 className="text-lg font-bold oswald-500">
                LOREM IPSUM DOLOR SIT AMET, CONSETETUR
              </h3>
              <button className="mt-4 oswald-400 font-medium px-6 py-2 cursor-pointer bg-white text-black rounded-lg">
                SCHEDULE A DEMO
              </button>
            </div>
          </div>
          <img src={Pattern1} alt="" className="absolute top-0 left-0" />
          <img src={Pattern2} alt="" className="absolute bottom-0 right-0" />
        </div>
      </section>

      <footer
        className={`bg-black text-white rounded-t-3xl pt-12 pb-12 transition-transform z-0 translate-y-0 fixed bottom-0 left-0 right-0`}
      >
        <div className="text-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <img src={LOGO} alt="flight-logo" className="w-6 h-6" />
                <p className="uppercase text-2xl font-semibold">flightline</p>
              </div>
              <p className="text-gray-400 text-xs">
                &copy;2025 Flightline. All Rights Reserved.
              </p>
              <p className="text-gray-400 text-xs">
                Privacy Policy | Terms of Use
              </p>

              <div className="flex items-center gap-3 mt-4">
                {Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="images"
                    className="w-6 h-6 mx-1"
                  />
                ))}
              </div>
              <button className="mt-4 px-6 py-2 cursor-pointer oswald-400 bg-[#0D2BFE] font-medium rounded-md">
                SCHEDULE A DEMO
              </button>
            </div>
            <div className="space-y-2 ml-12">
              <h3 className="font-bold text-base oswald-500">OUR SOLUTION</h3>
              <p className="">Benefits</p>
              <p className="">Pricing</p>
            </div>
            <div className="space-y-2 ml-6">
              <h3 className="font-bold text-base oswald-500">USE CASES</h3>
              <p className="">Federal Agencies</p>
              <p className="">Manufacturers & Suppliers</p>
              <p className="">Distributors</p>
              <p className="">Resellers</p>
            </div>
            <div className="space-y-2 ml-12">
              <h3 className="font-bold text-base oswald-500">WHY FLIGHTLINE</h3>
              <p className="">About Us</p>
              <p className="">Compliance</p>
              <p className="">Connectivity</p>
              <p className="">Leadership</p>
            </div>
            <div className="space-y-2 ml-12">
              <h3 className="font-bold text-base oswald-500">RESOURCES</h3>
              <p className="">Blogs</p>
              <p className="">Success Stories</p>
              <p className="">Videos</p>
              <p className="">News</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
