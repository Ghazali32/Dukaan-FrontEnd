
export function RevenueCard({
    title,
    amount,
    orderCount
}) {
    return <div className="rounded-md bg-white-500 shadow-md p-4 min-w-[380px]">
        <div className="flex">
            <div className="text-gray-700">
                {title}
            </div>
            <div className="ml-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-700 w-4 h-5 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>

        </div>
        <div className="flex justify-between">
            <div className="text-2xl">
                ₹ {amount}
            </div>
            <div className="mt-2">
                {
                    orderCount ? <div className="flex">
                        <div className="text-blue-700 font-semibold"> {orderCount} order(s)</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-1 w-6 h-4 text-blue-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> : null
                }
            </div>
        </div>
    </div>
}
export function PayOutCard(
    {
        title,
        amount,
        orderCount
    }) {
        return <div className="rounded-md hover:bg-[#0E4F82] bg-[#146EB4]"> <div className=" text-white shadow-md p-4 min-w-[380px]">
        <div className="flex">
            <div className="text-white">
                {title}
            </div>
            <div className="ml-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-4 h-5 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>

        </div>
        <div className="flex justify-between">
            <div className="text-2xl">
                ₹ {amount}
            </div>
            <div className="mt-2">
                {
                    orderCount ? <div className="flex">
                        <div className="text-white font-semibold"> {orderCount} order(s)</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-1 w-6 h-4 text-blue-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> : null
                }
            </div>
        </div>
        
    </div>
    <div className="bg-[#0E4F82] text-[#F2F2F2] rounded-md p-1 min-w-[380px]">
                <div className="p-2 flex justify-between">
                    <h5>Next Payment Date: </h5>
                    <h5>Today, 4:00PM</h5>
                </div>
        </div> 
    </div>
}