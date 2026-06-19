import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      <Navbar onGetStarted={onGetStarted} />
      <Hero onGetStarted={onGetStarted} />
    </div>
  );
}