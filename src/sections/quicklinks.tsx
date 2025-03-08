import { ArrowRight } from "lucide-react";
import bgImage from "../assets/Mask group (1).png";
import Image from "../assets/Mask group (2).png";
import { useState } from "react";
import Images from "../assets/Mask group (3).png";

function Quicklinks() {
  return (
    <>
      <section>
        <div className="relative main w-[92%] mx-auto mt-16 grid grid-cols-2">
          <div className="w-2/4 p-12">
            <div className="flex items-center gap-3 text-4xl">
              <p className="uppercase font-bold">h2</p>
              <p className="uppercase font-bold text-[#0D2BFE]">quicklinks</p>
            </div>
            <p className="leading-6 pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              tenetur vel quo reprehenderit, adipisci maiores!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 py-12 z-20">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} />
            ))}
          </div>
          <img src={Image} alt="image" className="absolute top-0 left-0" />
        </div>
      </section>
      <img
        src={bgImage}
        alt="image"
        className="absolute inset-0 w-full top-[15%] z-0"
      />
    </>
  );
}

export default Quicklinks;

const cards = [
  { title: "FOR AGENCIES" },
  { title: "FOR SUPPLIERS" },
  { title: "FOR DISTRIBUTORS" },
  { title: "FOR RESELLERS" },
];

function Card({ title }: { title: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative py-10 px-8 rounded-lg shadow-lg transition-all duration-300 
        ${
          isHovered
            ? "bg-gradient-to-b from-white via-[#DEE5FF] to-[#AFC0FF] border-l-4 border-[#0D2BFE]"
            : "bg-[#F5F5F5] border-l-4 border-transparent"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <img
          src={Images}
          alt="Decorative"
          className="absolute right-0 bottom-0"
        />
      )}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed
        diam nonumy eirmod.
      </p>
      <a
        href="#"
        className="flex items-center gap-1 text-[#0D2BFE] font-bold mt-4 transition-transform duration-300 transform hover:translate-x-1"
      >
        LEARN MORE <ArrowRight size={16} />
      </a>
    </div>
  );
}
