import { memo } from "react";
import Image from "next/image";
import Artwork from "../../public/Artwork.png";

const Benner = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="pl-20 pt-64 space-y-7">
        <p className="text-5xl text-gray-800 font-bold">KSP KUMBANG SARI</p>
        <p className="text-lg text-gray-800 pr-28 font-semibold">
          Mulai bisnis anda dengan KSP Kumbang Sari, proses simpan pinjam dengan
          mudah tanpa ribet, modal aman bisnis lancar.
        </p>
        <button className="border-2 border-[#2196F3] rounded-lg py-1 px-3 text-[#2196F3] hover:border-blue-600 hover:text-blue-600 flex gap-2 tems-center shadow-md shadow-blue-100 hover:shadow-blue-300">
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
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Hubungi Kami
        </button>
      </div>
      <div className="relative w-full">
        <Image src={Artwork} layout={"fill"} objectFit={"cover"} />
      </div>
    </div>
  );
};

export default memo(Benner);
