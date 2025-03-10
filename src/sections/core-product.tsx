import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TICK from "../assets/tick.png";
import COREPRODUCT from "../assets/core-product.png";

function CoreProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <section>
      <div className="grid grid-cols-2 gap-8 pt-12 bg-white z-20 relative">
        <div
          ref={ref}
          className="pt-5 pb-5 pr-5 rounded-r shadow-[inset_0_4px_6px_rgba(0,0,0,0.9)]"
          style={{ perspective: "1200px" }}
        >
          <motion.img
            src={COREPRODUCT}
            alt="image"
            className="border rounded-r-xl w-[800px] h-[450px]"
            initial={{ rotateY: 15, transformOrigin: "left center" }}
            animate={isInView ? { rotateY: 0 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Text content */}
        <div>
          <p className="font-bold text-[#DB2B39] uppercase">promo</p>
          <div className="flex items-center gap-3 text-4xl">
            <p className="uppercase font-bold">core product</p>
            <p className="uppercase font-bold text-[#0D2BFE]">functionality</p>
          </div>
          <p className="leading-6 pt-2">
            Flightline empowers suppliers, manufacturers, and distributors to
            optimize federal sales and overcome contracting complexity with the
            market’s only end-to-end EDI-powered fulfillment and procurement
            platform.
          </p>
          <div className="pt-2 space-y-2">
            <div className="flex gap-4">
              <img src={TICK} alt="tick" className="w-4 h-4 mt-1.5" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="flex gap-4">
              <img src={TICK} alt="tick" className="w-4 h-4 mt-1.5" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore incidunt, dolor cupiditate expedita neque hic in illum
                ea ratione consequatur.
              </p>
            </div>
          </div>
          <button className="uppercase mt-8 bg-[#0D2BFE] text-white py-2.5 px-4 rounded-md font-bold text-sm flex items-center cursor-pointer">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default CoreProducts;
