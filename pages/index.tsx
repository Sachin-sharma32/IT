import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Industries from "../components/Industries";
import Hero from "../components/Hero";
import MobileFeatures from "../components/MobileFeatures";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";
import IndustriesMobile from "../components/IndustriesMobile";
import Faqs from "../components/Faqs";
import Plans from "../components/Plans";


const Home = () => {
  return (
    <div className="  min-h-[100vh] flex container max-w-[100vw] ">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <MobileFeatures />
        <Technologies />
        <Testimonials />
        <IndustriesMobile />
        <Industries />
        <Faqs />
        <Plans />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

Home.getInitialProps = async () => {
  return {
    title: "ITXcelerate",
    image: "/logo-3.png",
    summery:
      "Delivering exceptional customer service and ensuring that our clients are satisfied with every aspect of our services. From our initial consultation to post-project support, we strive to provide a seamless and stress-free experience for our clients.",
    keywords:
      "IT, ITXcelerate, Home, Best, it services, tech, startup, technology",
    type: "website",
    imageAlt: "ITXclererate logo",
    parameter: "",
  };
};
