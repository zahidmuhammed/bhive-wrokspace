import { DownloadSection, HeroSection, OverviewSection, WhySection } from "@/components/sections"

const Home = () => {
    return (
        <div className="bg-[#F9FAFF]">
            <HeroSection />
            <WhySection />
            <OverviewSection />
            <DownloadSection />
        </div>
    )
}

export default Home