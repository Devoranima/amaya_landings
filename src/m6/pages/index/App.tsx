import Head from "../../components/Head";
import Hero from "../../components/Hero";
import "../../App.css"
import USP from "../../components/USP";
import Offer from "../../components/Offer";
import Rewards from "../../components/Rewards";
import Try from "../../components/Try";
import AppGallery from "../../components/AppGallery";
import Foot from "../../components/Foot";
import Reviews from "../../components/Reviews";
import JoinUs from "../../components/JoinUs";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-[#f4f5ff] overflow-hidden">
      <Head/>
      <Hero/>
      <USP/>
      <Offer/>
      <Rewards/>
      <Try/>
      <AppGallery/>
      <Reviews/>
      <JoinUs></JoinUs>
      <Foot/>
    </div>
  )
}
