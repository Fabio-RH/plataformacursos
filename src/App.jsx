import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import InstructorSpotlight from "./components/InstructorSpotlight";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <HeroSection />

        <section className="content">
          <CategoryGrid />
          <InstructorSpotlight />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;