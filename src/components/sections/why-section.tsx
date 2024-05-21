import arrowRight from "@/assets/icons/arrow-right.svg"

export const WhySection = () => {
    const features = [
        { name: "Community Events", description: "One liner details about the feature", icon: "feat_events.svg" },
        { name: "Gym Facilities", description: "One liner details about the feature", icon: "feat_gym.svg" },
        { name: "Highspeed Wifi", description: "One liner details about the feature", icon: "feat_wifi.svg" },
        { name: "Cafe & Tea Bar", description: "One liner details about the feature", icon: "feat_cafe.svg" },
        { name: "Affordable", description: "One liner details about the feature", icon: "feat_affordable.svg" },
        { name: "Comfort Lounges", description: "One liner details about the feature", icon: "feat_lounges.svg" },
        { name: "Quick Booking", description: "One liner details about the feature", icon: "feat_quick_book.svg" },
        { name: "Sports Area", description: "One liner details about the feature", icon: "feat_sports.svg" },
    ]
    return (
        <div className="px-5 lg:px-[120px] my-6 flex flex-col">
            <div className="flex w-full justify-between items-center">
                <div className="font-bold text-h3 lg:text-h2">Why Choose us?</div>
                <div className="lg:hidden">
                    <img src={arrowRight} className="" alt="arrow-right" />
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 my-8 gap-3 lg:divide-x lg:gap-0">
                {features?.map((feat, i) => {
                    return <div key={i} className="group min-h-[80px] drop-shadow lg:drop-shadow-none hover:drop-shadow gap-2 bg-white lg:bg-transparent hover:bg-white transition-all duration-200 rounded-md lg:rounded-none p-3 flex flex-col lg:flex-row lg:gap-4 items-center lg:justify-start lg:px-6 justify-center">
                        <div className={""}>
                            <img src={`/icons/${feat?.icon}`} className="size-7" alt="icon" />
                        </div>
                        <div className="flex flex-col lg:gap-1">
                            <div className="text-center lg:text-start transition-all duration-500 font-medium text-[14px] lg:text-[18px]">{feat?.name}</div>
                            <div className="text-center lg:text-start transition-all duration-500 font-thin hidden group-hover:lg:flex lg:text-xs">{feat?.description}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
