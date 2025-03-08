import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import googleLogo from "../assets/Google Logo.png";
import asanaLogo from "../assets/Asana Logo.png";
import zoomLogo from "../assets/Zoom Logo.png";
import dellLogo from "../assets/Dell Logo.png";
import samsungLogo from "../assets/Samsung Logo.png";
import slackLogo from "../assets/Slack Logo.png";

const logos = [
  googleLogo,
  asanaLogo,
  zoomLogo,
  dellLogo,
  samsungLogo,
  slackLogo,
];

export default function MarketplaceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-[80%] mx-auto mt-16">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">FLIGHTLINE MARKETPLACE</h2>
          <h3 className="text-3xl font-bold text-[#0D2BFE]">CONNECTED USERS</h3>
          <p className="text-gray-700 mt-4 text-base w-2/3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            lorem ipsum nonumy. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <button className="bg-[#0D2BFE] text-white px-6 py-2 rounded-md mt-4 font-semibold">
            LEARN MORE
          </button>
        </div>
        <div className="relative flex items-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 min-w-full justify-center gap-16"
                >
                  {logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="Company Logo"
                      className=""
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-6 absolute bottom-0 right-0">
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="p-1 bg-[#D3D3FF] flex justify-center items-center text-white hover:bg-[#0D2BFE] hover:text-white cursor-pointer rounded-full"
              disabled={!canScrollPrev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="p-1 bg-[#0D2BFE] text-white rounded-full flex items-center cursor-pointer"
              disabled={!canScrollNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
