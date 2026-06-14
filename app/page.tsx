import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SuccessStories from "./components/SuccessStories";
import Team from "./components/Team";
import Approach from "./components/Approach";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor";
import BrandBadge from "./components/BrandBadge";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col overflow-x-hidden">
      <CustomCursor />
      <Intro />
      <BrandBadge />
      <Header />

      <Hero />

      <div className="mx-auto w-full max-w-[1230px] px-5 sm:px-6">
        <About />
        <SuccessStories />
      </div>

      <Services />

      <div className="mx-auto w-full max-w-[1230px] px-5 sm:px-6">
        <Approach />
        <WhyChooseUs />
      </div>

      <Team />

      <div className="mx-auto w-full max-w-[1230px] px-5 pb-6 sm:px-6 sm:pb-8">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
