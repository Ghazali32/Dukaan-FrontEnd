
export function OrderDetails() {
    const orders = [{
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    {
        orderId: '281209',
        status: 'Successful',
        transId: 'TRX12334',
        refundDate: 'Today,8:45 PM',
        orderAmount: '₹1125.00'
    },
    ]
    return <div className="flex p-2 rounded-md m-3 bg-white shadow-2 z-10 flex-col">
        <div className="flex p-1 justify-between w-full">
            <div className=" flex justify-center">
                <input placeholder="Order ID or transaction ID" type="text" id="small-input" className="w-80 block p-2 text-gray-900 border border-gray-300 rounded-sm  sm:text-xs focus:border-transparent placeholder-gray-500 "></input>
            </div>
            <div className="flex px-2">
                <InnerButton></InnerButton>
                <div className="ml-2 flex rounded-md border-2 px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </div>
        </div>
        <Index></Index>
        <div>
            {orders.map((order) => {
                return <OrderStatus orderId={order.orderId} status={order.status} transId={order.transId}
                    refundDate={order.refundDate} orderAmount={order.orderAmount}></OrderStatus>
            })}
        </div>

    </div>
}
function InnerButton() {
    return <div className="flex rounded-md border-2 px-4 py-1">
        <p>Sort</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5 mt-1 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
    </div>
}
function Index() {
    return <div className="bg-[#E6E6E6] flex py-2 px-3 justify-between m-2 rounded-md">
        <h5>Order ID</h5>
        <h5 className = 'ml-7'>Status</h5> 
        <h5 className = 'ml-7'>Transaction ID</h5>
        <h5 className = 'ml-7'>Refund Date</h5>
        <h5>Order Amount</h5>
    </div>

}
function OrderStatus({ orderId, status, transId, refundDate, orderAmount }) {
    return <div className="flex flex-col ">
        <div className="flex py-2 px-3 justify-between m-1 items-start">
            <h5 className="text-sm">{orderId}</h5>
            <div className="flex">
                <div className="w-2 h-2 mt-2 mr-2 bg-green-500 rounded-full"></div>
                <h5 className="text-sm">{status}</h5>
            </div>
            <h5 className="text-sm">{transId}</h5>
            <h5 className="text-sm">{refundDate}</h5>
            <h5 className="text-sm">{orderAmount}</h5>
        </div>
        <div className="bg-[#E6E6E6] h-[1px]"></div>
    </div>

}
