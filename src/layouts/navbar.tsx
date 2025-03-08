import LOGO from "../assets/flight-logo.png";
import USER from "../assets/user.png";
import SEARCH from "../assets/search.png";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="main fixed w-full flex justify-around items-center h-20 px-20 bg-white/50 backdrop-blur-xs z-50">
          <div className="flex items-center gap-2">
            <img src={LOGO} alt="flight-logo" className="w-6 h-6" />
            <p className="uppercase text-2xl font-semibold">flightline</p>
          </div>
          <div className="flex items-center gap-12 font-semibold">
            <p className="cursor-pointer">Our Solution</p>
            <p className="cursor-pointer">Use Cases</p>
            <p className="cursor-pointer">Why Flightline</p>
            <p className="cursor-pointer">Resources</p>
          </div>
          <div className="flex items-center gap-8">
            <img
              src={USER}
              alt="user"
              className="w-4 h-4 object-cover cursor-pointer"
            />
            <img
              src={SEARCH}
              alt="search"
              className="w-4 h-4 object-cover cursor-pointer"
            />
            <button className="uppercase text-[#0D2BFE] font-bold text-sm flex items-center gap-1 cursor-pointer">
              contact us <ChevronRight size={16} />
            </button>
            <button className="uppercase bg-[#0D2BFE] text-white py-2.5 px-4 rounded-md font-bold text-sm flex items-center cursor-pointer">
              schedule a demo
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
