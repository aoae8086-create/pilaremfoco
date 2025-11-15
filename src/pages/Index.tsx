import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
