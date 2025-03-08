import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import LinkedIn from "../assets/linkedin.png";
import Pattern1 from "../assets/patter-1.png";
import Pattern2 from "../assets/pattern-2.png";

export default function Footer() {
  const Images = [Twitter, Facebook, Instagram, Youtube, LinkedIn];

  return (
    <footer className="mt-28">
      {/* first footer */}
      <div className="bg-blue-600 text-white py-12 rounded-t-3xl relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-2">
          <div className="text-center border-r border-white/60 py-4">
            <h3 className="text-lg font-bold">
              LOREM IPSUM DOLOR SIT AMET, CONSETETUR
            </h3>
            <button className="mt-4 px-6 py-2 cursor-pointer bg-white text-black rounded-lg font-bold">
              CONTACT US
            </button>
          </div>
          <div className="text-center relative py-4">
            <h3 className="text-lg font-bold">
              LOREM IPSUM DOLOR SIT AMET, CONSETETUR
            </h3>
            <button className="mt-4 px-6 py-2 cursor-pointer bg-white text-black rounded-lg font-bold">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
        <img src={Pattern1} alt="" className="absolute top-0 left-0" />
        <img src={Pattern2} alt="" className="absolute bottom-0 right-0" />
      </div>

      {/* second footer */}
      <div className="bg-black text-white text-sm h-80 pt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">FLIGHTLINE</h2>
            <p className="text-gray-400 mt-2 text-xs">
              &copy;2025 Flightline. All Rights Reserved.
            </p>
            <p className="text-gray-400 mt-2 text-xs">
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
            <button className="mt-4 px-6 py-2 cursor-pointer bg-[#0D2BFE] font-semibold rounded-md">
              SCHEDULE A DEMO
            </button>
          </div>
          <div className="space-y-2 ml-12">
            <h3 className="font-bold text-base">OUR SOLUTION</h3>
            <p className="">Benefits</p>
            <p className="">Pricing</p>
          </div>
          <div className="space-y-2 ml-6">
            <h3 className="font-bold text-base">USE CASES</h3>
            <p className="">Federal Agencies</p>
            <p className="">Manufacturers & Suppliers</p>
            <p className="">Distributors</p>
            <p className="">Resellers</p>
          </div>
          <div className="space-y-2 ml-12">
            <h3 className="font-bold text-base">WHY FLIGHTLINE</h3>
            <p className="">About Us</p>
            <p className="">Compliance</p>
            <p className="">Connectivity</p>
            <p className="">Leadership</p>
          </div>
          <div className="space-y-2 ml-12">
            <h3 className="font-bold text-base">RESOURCES</h3>
            <p className="">Blogs</p>
            <p className="">Success Stories</p>
            <p className="">Videos</p>
            <p className="">News</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
