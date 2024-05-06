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
  let status1=[];
  let status1Title=[];
  let status0=[];
  let status0Title=[];
  const {id}=useParams();
  const [status1Todo,setStatus1Todo]=useState([]);
  const [status0Todo,setStatus0Todo]=useState([]);
  useEffect(()=>{
    async function getData(){
      const response= await axios.post("http://localhost:3000/gettimetable",{
        classid:id
      });
      values=Object.values(response.data.timetable);
      status1=values.filter((item,index)=>(item.status==1))
      status1Title=status1.map((item,index)=>(item.title))
      setStatus1Todo(status1Title);
      status0=values.filter((item,index)=>(item.status==0))
      status0Title=status0.map((item,index)=>(item.title))
      setStatus0Todo(status0Title);
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

            {status0Todo ? status0Todo.map((item,index)=><PendingLeaderboard title={item}/>):<h1>Loading...</h1>}
            {status1Todo ? status1Todo.map((item,index)=><CompletedLeaderboard title={item}/>):<h1>Loading...</h1>}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Leaderboard