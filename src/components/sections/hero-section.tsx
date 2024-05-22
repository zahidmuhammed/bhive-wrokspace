
import hero_video from "@/assets/videos/hero_illustration_video.mp4"

export const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="md:order-2 md:w-1/3 relative right-0 flex md:justify-end md:items-end w-full ">
                <div
                    className="absolute bg-auto bg-no-repeat bg-[url('/hero_overlay.svg')] lg:bg-[url('/hero_overlay_lg.svg')] top-0 right-0 h-full w-full bg-right-bottom"
                >
                </div>
                <video autoPlay loop muted src={hero_video} className="" />
            </div>
            <div className="relative mb-6 md:mb-0 md:h-[514px] md:order-1 md:w-2/3 px-5 md:px-0 md:flex md:justify-center md:bg-bottom md:bg-[url('/bg_hero_lg.png')] md:items-center md:text-h1 text-h4 font-semibold text-center mt-7 md:mt-0">
                <div className="absolute z-10 md:w-full h-full">
                    <div className="z-10 absolute left-44 md:mx-[120px]  hidden bg-no-repeat md:flex md:bg-[url('/hero_mini_hex.svg')] md:w-full md:h-full"></div>
                </div>
                <div className="z-20 md:pl-[120px] text-left">Host your meeting with world-class amenities. Starting at
                    <span className="text-primary-2 px-2">₹199/-!</span>
                </div>
            </div>
        </div>
    )
}
