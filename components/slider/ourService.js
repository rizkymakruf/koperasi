import { memo } from "react";
import Image from "next/image";
import Artwork from "../../public/artwork6.png";
import EmblaCarousel from "./embla";
// import EmblaCarousel from "../embla";

const OurService = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-left items-center">
        <div className="w-9/12 left-0 absolute z-50">
          <EmblaCarousel />
        </div>
        <div className="w-4/12 absolute z-40 right-0">
          <div className="w-full h-screen relative right-0">
            <Image src={Artwork} layout={"fill"} objectFit={"cover"} />
          </div>
        </div>
        <div className="w-full h-[70%] relative z-10 bg-blue-200">
          <div className="absolute -top-20 left-10 text-7xl font-bold text-[#0D47A1]">
            OUR SERVICE
          </div>
          <div className="absolute -top-10 right-6 ">
            <div className="flex justify-center items-center text-md font-semibold text-[#0D47A1] gap-2">
              <p>Lihat semua</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(OurService);
