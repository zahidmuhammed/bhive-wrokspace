
import hero_video from "@/assets/videos/hero_illustration_video.mp4"

export const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:order-2 lg:w-1/3 relative right-0 flex lg:justify-end lg:items-end w-full ">
                <div
                    className="absolute bg-auto bg-no-repeat bg-[url('/hero_overlay.svg')] lg:bg-[url('/hero_overlay_lg.svg')] top-0 right-0 h-full w-full bg-right-bottom"
                >
                </div>
                <video autoPlay loop muted src={hero_video} className="" />
            </div>
            <div className="relative mb-6 lg:mb-0 lg:h-[514px] lg:order-1 lg:w-2/3 px-5 lg:px-0 lg:flex lg:justify-center lg:bg-bottom lg:bg-[url('/bg_hero_lg.png')] lg:items-center lg:text-h1 text-h4 font-semibold text-center mt-7 lg:mt-0">
                <div className="absolute z-10 w-full h-full">
                    <div className="z-10 absolute left-44 lg:mx-[120px]  hidden bg-no-repeat lg:flex lg:bg-[url('/hero_mini_hex.svg')] lg:w-full lg:h-full"></div>
                </div>
                <div className="z-20 lg:px-[120px] text-left">Host your meeting with world-class amenities. Starting at
                    <span className="text-primary-2 px-2">₹199/-!</span>
                </div>
            </div>
        </div>
    )
}
