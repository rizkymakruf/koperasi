import { memo } from "react";
import Image from "next/image";
import Artwork from "../../public/artwork7.png";

const Pengurus = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2">
        <div className="relative w-5/6 h-screen pt-10 pl-8">
          <Image src={Artwork} layout={"responsive"} objectFit={"cover"} />
        </div>
        <div className="pt-16 px-20 space-y-8">
          <p className="text-2xl font-semibold text-gray-800">
            Adapun Pengurus periode ke 11, tahun 2021 s/d 2025 sbb :
          </p>
          <div className="space-y-5 flex flex-col">
            <div className="bg-blue-200 w-full p-3 rounded-md flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-32">Ketua Pengurus</div>
                <div className="w-5">:</div>
                <div>A.A.Ketut Sumawidana,SH</div>
              </div>
              <div className="flex items-center">
                <div className="w-32">Bendahara</div>
                <div className="w-5">:</div>
                <div>I Wayan Regen</div>
              </div>
              <div className="flex items-center">
                <div className="w-32">Sekertaris</div>
                <div className="w-5">:</div>
                <div>I Wayan Suena</div>
              </div>
            </div>
            <div className="bg-blue-200 w-full p-3 rounded-md flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-32">Ketua Pengawas</div>
                <div className="w-5">:</div>
                <div>A.A.Made Sumenadi,SH</div>
              </div>
              <div className="flex items-center">
                <div className="w-32">Anggota I</div>
                <div className="w-5">:</div>
                <div>I Made Budiasa</div>
              </div>
              <div className="flex items-center">
                <div className="w-32">Anggota II</div>
                <div className="w-5">:</div>
                <div>I Nyoman Suntaya</div>
              </div>
            </div>
            <div className="bg-blue-200 w-full p-3 rounded-md flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-32">Penasihat</div>
                <div className="w-5">:</div>
                <div>A.A.Sumariagung,SH</div>
              </div>
              <div className="flex items-center">
                <div className="w-32">Penasihat</div>
                <div className="w-5">:</div>
                <div>A.A.Adnyani</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Pengurus);
