import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BENEFITS1 from "../assets/benefits_1.png";
import BENEFITS2 from "../assets/benefits_2.png";

const benefits_data = [
  {
    id: 1,
    heading: "Government-Ready Without the Growing Pains",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad inventore, rerum dolore consequuntur asperiores quibusdam eos fugiat velit delectus vitae?",
    image_source: BENEFITS1,
  },
  {
    id: 2,
    heading: "Elevate Vendor Visibility and Enterprise Efficiency",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad inventore, rerum dolore consequuntur asperiores quibusdam eos fugiat velit delectus vitae?",
    image_source: BENEFITS2,
  },
  {
    id: 3,
    heading: "Maintain Compliance with Confidence",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad inventore, rerum dolore consequuntur asperiores quibusdam eos fugiat velit delectus vitae?",
    image_source: BENEFITS2,
  },
  {
    id: 4,
    heading: "Modern Acquisitions for Modern Agencies",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad inventore, rerum dolore consequuntur asperiores quibusdam eos fugiat velit delectus vitae?",
    image_source: BENEFITS1,
  },
];

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits_data.length);
      setAnimationKey((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(cardInterval);
  }, []);

  const handleHover = (index: number) => {
    setCurrentIndex(index);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="relative bg-white z-20">
      <div className="relative py-24 w-[95%] mx-auto">
        <h2 className="uppercase text-3xl font-bold ml-10">
          Benefits of <span className="text-[#0D2BFE]">Our Platform</span>
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="relative ml-10">
            {benefits_data.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col items-start p-2 rounded-lg overflow-hidden transition-all duration-500 cursor-pointer ${
                  index === currentIndex ? "bg-[#F0F0E9]" : "opacity-50"
                }`}
                onMouseEnter={() => handleHover(index)}
              >
                {index === currentIndex && (
                  <div className="absolute left-0 top-0 w-2 h-full bg-[#D3D3D3]"></div>
                )}
                {index === currentIndex && (
                  <motion.div
                    key={animationKey}
                    className="absolute left-0 top-0 w-2 bg-[#0D2BFE]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                )}
                <div className="w-full p-2">
                  <h3 className="uppercase text-xl font-bold">
                    {item.heading}
                  </h3>
                  {index === currentIndex && (
                    <p className="text-sm pt-2">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center col-span-2">
            <motion.img
              key={benefits_data[currentIndex].id}
              src={benefits_data[currentIndex].image_source}
              alt="Benefit Illustration"
              className="object-cover transition-all duration-700 rounded-xl w-[850px] h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
