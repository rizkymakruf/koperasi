import { memo } from "react";
import Image from "next/image";
import Logo from "../../public/ksp.png";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 py-5 px-20 flex items-center justify-between z-30">
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-12">
          <Image src={Logo} layout={"fill"} objectFit={"cover"} />
        </div>
        <button className="font-semibold text-lg text-gray-800">
          KSP KUMBANG SARI
        </button>
      </div>
      <div className="flex items-center gap-5 font-semibold text-gray-800">
        <button className="hover:text-[#2196F3]">PRODUK {"&"} LAYANAN</button>
        <button className="hover:text-[#2196F3]">KINERJA KOPERASI</button>
        <button className="hover:text-[#2196F3]">PROFIL KOPERASI</button>
        <button className="hover:text-[#2196F3]">BERITA</button>
      </div>
      <div className="flex items-center gap-4 font-semibold">
        <button className="text-gray-800 hover:text-[#2196F3]">LOGIN</button>
        <button className="bg-[#2196F3] hover:bg-blue-600 py-1 px-2 rounded-lg text-white">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default memo(Navbar);
