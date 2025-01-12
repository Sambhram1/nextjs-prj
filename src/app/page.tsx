
import { Herosection } from "./components/Hero-section";
import FeaturedCourses from "./components/FeaturedCourses";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { Content } from "next/font/google";
import {InfiniteMovingCardsDemo} from "./components/Nps";
import { StickyScrollRevealDemo } from "./components/Sticky-scroll";
import UpcomingWebinars from "./components/TestimonialCards";
import Instructors from "./components/Pic";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses/>
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <UpcomingWebinars></UpcomingWebinars>
      <Instructors></Instructors>
      <Footer></Footer>
    </main>
  );
}
