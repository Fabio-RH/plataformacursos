
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import InstructorSpotlight from "./components/InstructorSpotlight";


export default function MainPage() {
    return (
        <main
            style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <HeroSection />

            <section
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 250px",
                    gap: "20px",
                    marginTop: "40px",
                }}
            >
                <CategoryGrid />
                <InstructorSpotlight />
            </section>
        </main>
    )
}