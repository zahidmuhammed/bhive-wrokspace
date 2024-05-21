
const Footer = () => {
    const date = new Date();
    return (
        <div className="h-[41px] lg:h-[44px] bg-[#222E34] flex justify-center items-center text-[#DDDDDD] text-[12px] lg:text-[14px]">
            © Copyright {date?.getFullYear()}. Bhive Private Limited
        </div>
    )
}

export default Footer