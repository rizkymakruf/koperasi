import { memo } from "react";
import Image from "next/image";
import Artwork from "../../public/Artwork3.png";

const OurService = () => {
  return (
    <>
      <div className="h-screen w-full flex bg-blue-100">
        <p className="pt-14 pl-5 text-6xl font-bold text-blue-800">
          Pelayanan Kami
        </p>
        <div className="w-8/12 h-screen absolute z-30 flex items-center px-5">
          <div className="w-full grid grid-cols-4 gap-5">
            <div className="w-full h-96 border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
              <div className="w-full h-36 bg-blue-500 rounded-t-md"></div>
              <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                <p className="text-lg font-semibold text-left">
                  Pinjaman bunga 1%
                </p>
                <p className="text-sm text-justify pb-2">
                  Vestibulum sit amet tortor libero lobortis semper at et odio.
                  In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean
                  facilisis vitae purus facilisis semper.
                </p>
                <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                  Lihat detail
                </button>
              </div>
            </div>
            <div className="w-full h-96 border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
              <div className="w-full h-36 bg-blue-500 rounded-t-md"></div>
              <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                <p className="text-lg font-semibold text-left">
                  Tabungan pedagang
                </p>
                <p className="text-sm text-justify pb-2">
                  Vestibulum sit amet tortor libero lobortis semper at et odio.
                  In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean
                  facilisis vitae purus facilisis semper.
                </p>
                <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                  Lihat detail
                </button>
              </div>
            </div>
            <div className="w-full h-96 border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
              <div className="w-full h-36 bg-blue-500 rounded-t-md"></div>
              <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                <p className="text-lg font-semibold text-left">Tanam saham</p>
                <p className="text-sm text-justify pb-2">
                  Vestibulum sit amet tortor libero lobortis semper at et odio.
                  In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean
                  facilisis vitae purus facilisis semper.
                </p>
                <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                  Lihat detail
                </button>
              </div>
            </div>
            <div className="w-full h-96 border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
              <div className="w-full h-36 bg-blue-500 rounded-t-md"></div>
              <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                <p className="text-lg font-semibold text-left">Pinjaman KUR</p>
                <p className="text-sm text-justify pb-2">
                  Vestibulum sit amet tortor libero lobortis semper at et odio.
                  In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean
                  facilisis vitae purus facilisis semper.
                </p>
                <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                  Lihat detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 absolute z-20 right-0 h-screen pt-20">
          <div className="w-full relative">
            <Image src={Artwork} layout={"responsive"} objectFit={"cover"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(OurService);
