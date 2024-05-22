import arrowRight from "@/assets/icons/arrow-right.svg"
import downloadImage from "@/assets/illustrations/download.png"
import downloadImageNoOverlay from "@/assets/illustrations/download_no_overlay.png"
import apple_badge from "@/assets/logos/apple-store-badge.png"
import google_play_badge from "@/assets/logos/google-play-badge.png"

export const DownloadSection = () => {
    return (
        <div className="px-5 lg:px-[120px] my-6 flex flex-col lg:min-h-[500px] items-end justify-end ">
            <div className="flex w-full justify-between items-center lg:mb-20 xl:mb-24 2xl:mb-36">
                <div className="font-bold text-h3 lg:text-[#605F5F] lg:text-h2">Download our app now</div>
                <div className="lg:hidden">
                    <img src={arrowRight} draggable={false} className="" alt="arrow-right" />
                </div>
            </div>

            <div className="relative rounded-lg bg-white flex flex-col lg:flex-row lg:h-[280px] my-4 w-full drop-shadow">
                <div className="w-full lg:hidden flex justify-center">
                    <img src={downloadImage} alt="download" />
                </div>
                <div className="w-full hidden lg:absolute bottom-0 left-5  lg:flex lg:w-auto justify-center">
                    <img src={downloadImageNoOverlay} className="h-[350px] 2xl:h-[400px]" alt="download" />
                </div>
                <div className="w-full hidden lg:flex lg:invisible  lg:w-auto justify-center">
                    <img src={downloadImageNoOverlay} className="w-[720px] px-6" alt="download" />
                </div>
                <div className="flex py-5  flex-col justify-around">
                    <div className="hidden lg:flex lg:pl-32 lg:px-20 2xl:px-10 text-[#605F5F] text-h4">
                        Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                    </div>
                    <div className="flex gap-3 justify-center lg:justify-start lg:px-32 2xl:px-10">
                        <a href="https://play.google.com/store/apps/details?id=com.bhive.workspace" target="_target">
                            <img
                                src={google_play_badge}
                                draggable={false}
                                className="w-[146px] h-[45px] cursor-pointer"
                                alt="apple badge"
                            />
                        </a>
                        <a href="https://apps.apple.com/in/app/bhive-workspace/id6463923684" target="_target">
                            <img
                                src={apple_badge}
                                draggable={false}
                                className="w-[146px] h-[45px] cursor-pointer"
                                alt="google play badge"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
