import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import CHART from "../assets/chart 1.png";
import COIN from "../assets/coins 1.png";
import DATA from "../assets/data-transformation 1.png";
import Quicklinks from "./quicklinks";

function Stats() {
  const stats = [
    { id: 1, icon: CHART, value: 88, suffix: "%", label: "Revenue to Date" },
    { id: 2, icon: COIN, value: 3000, suffix: "", label: "Savings to Date" },
    { id: 3, icon: DATA, value: 52, suffix: "x", label: "EDI Transactions" },
  ];

  return (
    <section>
      <div className="relative bg-white z-20">
        <div className="w-[95%] mx-auto">
          <div className="w-3/5">
            <p className="font-bold text-[#DB2B39] uppercase">By the Numbers</p>
            <div className="flex items-center gap-3 text-3xl">
              <p className="uppercase font-bold">The Stats Behind</p>
              <p className="uppercase font-bold text-[#0D2BFE]">Our Success</p>
            </div>
            <p className="leading-6 pt-2">
              Optimize federal sales and overcome contracting complexity with
              the market’s only end-to-end EDI-powered fulfillment and
              procurement platform.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-10">
            {stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
        <Quicklinks />
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any; index: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-100 p-8 rounded-lg shadow-md text-center z-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center"
      >
        <img src={stat.icon} alt={stat.label} />
      </motion.div>
      <h2 className="text-6xl font-semibold mt-4">
        {isInView ? <CountUp start={0} end={stat.value} duration={2} /> : 0}
        {stat.suffix}
      </h2>
      <p className="text-gray-600 text-lg py-2">{stat.label}</p>
    </motion.div>
  );
}

export default Stats;
