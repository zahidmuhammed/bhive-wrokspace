
import bhive_logo from "../../assets/logos/bhive_logo.png"
import phone_icon from "../../assets/icons/phone.svg"

const Header = () => {
    return (
        <div className="z-50 min-h-[72px] lg:min-h-[90px] px-5 lg:px-[120px] drop-shadow-sm sticky top-0 bg-white flex justify-between items-center ">
            <div className="h-full">
                <img src={bhive_logo} className="h-[32px] w-[100px] lg:h-[40px] lg:w-[125px]" height={32} width={100} alt="logo" />
            </div>
            <div className="flex flex-col h-full">
                <a href="tel:9538677774">
                    <div className="border cursor-pointer border-[#F2B304] size-9 lg:size-[42px]  flex justify-center items-center rounded min-h-max drop-shadow">
                        <img src={phone_icon} height={24} width={24} alt="phone icon" className="" />
                    </div>
                </a>
            </div>
        </div >
    )
}

export default Header