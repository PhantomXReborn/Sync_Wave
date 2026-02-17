import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlaylistDashboard from "@/components/PlaylistDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PlaylistDashboard />
      <Footer />
    </div>
  );
};

export default Index;
