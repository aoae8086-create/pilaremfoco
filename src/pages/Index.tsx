import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import PartnershipsSection from "@/components/PartnershipsSection";
import ComplaintsSection from "@/components/ComplaintsSection";
import CouncilorsSection from "@/components/CouncilorsSection";
import PoliceReportsSection from "@/components/PoliceReportsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnershipsSection />
        <NewsGrid />
        <ComplaintsSection />
        <CouncilorsSection />
        <PoliceReportsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
