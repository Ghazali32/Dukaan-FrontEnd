import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PayOutCard, RevenueCard } from './components/RevenueCard'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { OverView } from './components/OverViewBar'
import { Button1, Button2 } from './components/Button'
import { OrderDetails } from './components/OrderDetails'
function App() {
  return (
    <div className='flex'>
      <div className='flex-grow flex'>
        <SideBar />
      </div>
      <div className='ml-0 w-full bg-gray-50'>
        <div className=' bg-white z-10 flex-grow'>
          <NavBar />
        </div>
        <OverView></OverView>
        <div className='flex justify-around flex-wrap items-start p-2'>
          <PayOutCard
            title={'Amount Pending'}
            amount={'2,312.23'}
            orderCount={23}>
          </PayOutCard>
          <div>
            <RevenueCard
              title={'Amount Pending'}
              amount={'92,312.20'}
              orderCount={13}>
            </RevenueCard></div>
          <div>
            <RevenueCard
              title={'Amount Processed'}
              amount={'23,92,312'}>
            </RevenueCard></div>
        </div>
        <TransactionBar></TransactionBar>
        <div className='flex p-3'>
        <Button1 title = 'Payouts' count = '22'></Button1>
        <Button2 title= 'Refunds' count = '6'></Button2>
        </div>
        <OrderDetails></OrderDetails>
        <div className='m-6 text-center overflow-hidden'>Made By Ghazali ♥️</div>
      </div>
    </div>
  )
}
function TransactionBar()
{
  return <div className='flex flex-col gap-6 p-4 ml-2'>
      <h5 className='font-medium text-xl'>
        Transactions | This Month
      </h5>
  </div>
}
export default App
