import Image from "next/image";
import Artwork from "../public/Artwork.png";
import { useMemo } from "react";
import Navbar from "../components/layout/navbar";
import Benner from "../components/benner/benner";
import AboutUs from "../components/aboutUs/aboutUs";
import OurService from "../components/slider/ourService";
import Pengurus from "../components/pengurus/pengurus";
import Testimoni from "../components/testimoni/testimoni";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <>
      {useMemo(() => {
        return <Navbar />;
      }, [])}
      {useMemo(() => {
        return <Benner />;
      }, [])}
      {useMemo(() => {
        return <AboutUs />;
      })}
      {useMemo(() => {
        return <OurService />;
      })}
      {useMemo(() => {
        return <Pengurus />;
      })}
      {useMemo(() => {
        return <Testimoni />;
      })}
      {useMemo(() => {
        return <Footer />;
      })}
    </>
  );
}
