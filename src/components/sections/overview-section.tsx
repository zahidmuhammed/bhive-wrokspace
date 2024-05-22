import axios from 'axios';
import { useEffect } from "react";
import type { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import arrowRight from "@/assets/icons/arrow-right.svg"
import { getOverViews } from '@/redux/reducers/overviewSlice';
import { Overview } from '@/interfaces';
import direction from "../../assets/icons/direction.svg"


export const OverviewSection = () => {
    const dispatch = useDispatch();
    const overviews = useSelector((state: RootState) => state.overviews).overviews

    console.log("🚀 ~ OverviewSection ~ overviews_list:", overviews)

    const fetchOverviews = async () => {
        try {
            const response = await axios.get("/data/data.json");
            dispatch(getOverViews(response?.data))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchOverviews();
    }, []);

    return (
        <div className="px-5 lg:px-[120px] my-6 flex flex-col">
            <div className="flex w-full justify-between items-center">
                <div className="font-bold text-h3 lg:hidden">Our Spaces</div>
                <div className="font-bold hidden lg:flex lg:text-h2">Our Space Overview</div>
                <div className="lg:hidden">
                    <img src={arrowRight} className="" alt="arrow-right" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>{
                overviews?.map((overview, i) => {
                    return <OverviewCard key={i} overview={overview} />
                })}
            </div>
        </div>
    )
}

interface OverviewCardProps {
    overview: Overview
}

import wrkspace from "@/assets/icons/workspace.svg"
import arrowright from "@/assets/icons/mini_arrow_right.svg"

const OverviewCard: React.FC<OverviewCardProps> = ({ overview }) => {
    return <div className='bg-white rounded-lg px-3 py-4 drop-shadow'>
        <div className='flex justify-between'>
            <div className='text-[18px] font-semibold pr-1'>{overview?.name}</div>
            <div className='flex gap-1 aspect-square p-2 rounded-md flex-col justify-center items-center border border-[#EEE7E7] bg-[#F9F9F9]'>
                <div>
                    <img src={direction} alt='direction' />
                </div>
                <div className='text-[8px] font-medium whitespace-nowrap'>6 Kms</div>
            </div>
        </div>
        <div
            style={{ backgroundImage: `url(${overview?.images[0]})` }}
            className='border h-[175px] bg-cover flex px-4 py-4 rounded-[5px] mt-4 mb-4'
        >
            <div className='text-primary-2 drop-shadow shadow-md gap-1 p-2 border border-[#FFBB0080] rounded-[5px] text-[14px] font-medium bg-gradient-to-r from-[#263238] to-[#2F4B59] h-[32px] flex justify-center items-center'>
                <img src={wrkspace} alt='' /> Workspace
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='w-1/2 '>
                <div className='bg-btn-secondary-main cursor-pointer mt-[10px] border flex justify-between rounded-[5px] p-2'>
                    <div className='space-y-1'>
                        <div className='text-[12px] text-[#65624C] font-medium'>Day Pass</div>
                        <div className='text-[18px] font-semibold'>₹ {overview?.day_pass_price} <span className='text-[11px]'>/ Day</span></div>
                    </div>
                    <div className='flex items-center'>
                        <img src={arrowright} alt='' />
                        <img src={arrowright} alt='' />
                        <img src={arrowright} alt='' />
                    </div>
                </div>
            </div>
            <div className='relative  w-1/2'>
                <div className='absolute  w-full mx-auto text-white flex justify-center text-[8px] font-medium '>
                    <div className='bg-[#263238] border border-[#263238] rounded-[3px] px-2 py-1'>
                        20% Discount
                    </div>
                </div>
                <div className='bg-btn-primary-main cursor-pointer mt-[10px] rounded-[5px] border border-btn-primary-stroke flex justify-between p-2'>
                    <div className='space-y-1'>
                        <div className='text-[12px] text-[#65624C] font-medium'>Bulk Pass</div>
                        <div className='text-[18px] font-semibold'>₹ {(overview?.day_pass_price * 10) - ((overview?.day_pass_price * 10 * 20) / 100)} <span className='text-[11px]'>/ 10 Day</span></div>
                    </div>
                    <div className='flex items-center'>
                        <img src={arrowright} alt='' />
                        <img src={arrowright} alt='' />
                        <img src={arrowright} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
