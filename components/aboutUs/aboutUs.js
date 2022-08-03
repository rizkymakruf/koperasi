import { memo } from "react";
import Image from "next/dist/client/image";
import Artwork from "../../public/Artwork2.png";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2">
        <div className="relative w-full h-screen">
          <Image src={Artwork} layout={"fill"} objectFit={"cover"} />
        </div>
        <div className="pt-32 px-20 space-y-5">
          <p className="text-2xl font-semibold text-gray-800">
            KSP Kumbang Sari
          </p>
          <p className="text-justify">
            Pembentukan Koppas Kumbasari {"–"} Badung yang berdiri pada tanggal
            31 Januari 1081, diprakarsai oleh Kepala Pasar Kumbasari yang pada
            saat itu dijabat oleh Bapak I Gst.Ngr.Ketut Suardika,BSc. Bersama
            dengan 28 orang Anggota perintis yang memiliki tekad kepedulian yang
            sama dengan Bapak I Gst.Ngr.Ketut Suardika,BSc, mendirikan Koperasi
            Pasar dengan tujuan melepaskan para pedagang pasar dari jeratan
            rentenir. Dalam kapasitasnya sebagai Kepala Pasar Kumbasari
            sekaligus sebagai Manager Utama pada Koppas Kumbasari- Badung, Bapak
            I Gst.Ngr.Ketut Suardika memberikan bantuan modal sebesar
            Rp.200.000,- {"("} Dua Ratus Ribu Rupiah {")"}, Simpanan Pokok
            Anggota perintis sebesar Rp.140.000,- {"("} Seratus Empat Puluh Ribu
            Rupiah {")"}
            dan Simpanan Sukarela Pengurus sebesar Rp.60.000,- {"("} Enam Puluh
            Ribu Rupiah {")"}. Dengan demikian jadilah Koperasi Pasar dengan
            modal awal sebesar Rp.400.000,- {"("} Empat Ratus ribu Rupiah {")"}{" "}
            . Pada saat itu, nebeng kantor di Kantor Ka.Pasar Kumbasari dengan
            karyawan 3 orang.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default memo(AboutUs);
