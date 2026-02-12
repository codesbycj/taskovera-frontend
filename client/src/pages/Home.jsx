import GetInTouch from "../components/Home/sections/get-in-touch";
import OurTestimonials from "../components/Home/sections/our-testimonials";
import SubscribeNewsletter from "../components/Home/sections/subscribe-newsletter";
import TrustedCompanies from "../components/Home/sections/trusted-companies";
import Footer from "../components/Home/component/footer";
import LenisScroll from "../components/Home/component/lenis-scroll";
import Navbar from "../components/Home/component/navbar";
import AboutOurApps from "../components/Home/sections/about-our-apps";
import HeroSection from "../components/Home/sections/hero-section";
import OurLatestCreation from "../components/Home/sections/our-latest-creation";

export default function Page() {
    return (
        <div className="bg-[#0B0B0F] text-white min-h-screen">
            <LenisScroll />
            <Navbar />
            <main className="px-6 md:px-16 lg:px-24 xl:px-32">
                <HeroSection />
                <OurLatestCreation />
                <AboutOurApps />
                <OurTestimonials />
                <TrustedCompanies />
                <GetInTouch />
                <SubscribeNewsletter />
            </main>
            <Footer />
        </div>
    );
}