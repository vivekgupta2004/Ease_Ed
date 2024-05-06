import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Checkprogress from './Checkprogress'
import CompletedLeaderboard from './CompletedLeaderboard'
import PendingLeaderboard from './PendingLeaderboard'
import IncompleteLeaderboard from './IncompleteLeaderboard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Leaderboard = () => {
  let values=[];
  let titleValue=[];
  const {id}=useParams();
  const [timeTableToBeRendered,settimeTableToBeRendered]=useState([])
  useEffect(()=>{
    async function getData(){
      const response= await axios.post("http://localhost:3000/gettimetable",{
        classid:id
      });
      console.log(response.data.timetable)
      values=Object.values(response.data.timetable);
      titleValue=values.map((item,index)=>(item.title))
      console.log(titleValue)
      settimeTableToBeRendered(titleValue)
    }
    getData();
  },[])
  return (
    <div className='text-white'>
      <Nav />
      <div className=' w-screen bg-[#0D0C1A] p-1'>
        <img src="/Ellipse14.png" alt="" className='absolute -top-[10vh] h-1/3 w-full left-0' />
        <Checkprogress />

        <div className='text-white mt-40 py-10 px-36'>
          <div className='w-full flex items-center justify-between relative'>
            <div className='w-full'>
            <h1 className='text-5xl font-light mt-32'>Hard Work Section</h1>
          <p className='w-1/4 mt-4 text-lg font-light ml-5 leading-6'>Embrace the grind, for it's the path to greatness.</p>
            </div>
          <img src="/vvt.png" alt="" className='z-10' />
          <div className='h-52 w-52 bg-white absolute top-40 right-16 rounded-full blur-[200px]'></div>
          </div>

          <div id="parentContainer" className='w-full h-fit flex items-center justify-center gap-10 flex-col p-5'>
            {/* <CompletedLeaderboard/>
            <PendingLeaderboard/>
            <IncompleteLeaderboard/> */}

            {timeTableToBeRendered ? timeTableToBeRendered.map((item,index)=><PendingLeaderboard title={item}/>):<h1>Loading...</h1>}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Leaderboard