import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../utils/helpers';
import ReactPlayer from 'react-player';
import Loading from '../components/Loading';
import VideoInfo from '../components/VideoInfo';
import VideoCard from '../components/VideoCard'


const VideoDetail = () => {
  const [searchParams] =useSearchParams();

  const [related,setRelated] = useState(null)
  const id= searchParams.get('v');

  useEffect(()=> {
   

    //video ile alakalı videoları getirir

    getData(`/related?id=${id}`)
    .then(res =>setRelated(res.data.data))
  },[])

  console.log(related)
  return (
    <div className='flex flex-col lg:flex-row lg:px-[10px] gap-5 p-2 h-screen overflow-auto lg:overflow-hidden'>
     <div className='w-full'>
        <ReactPlayer controls
        url={`https://www.youtube.com/watch?v=${id}`}
        width={'100%'}
        height={'60vh'}
        />
      <VideoInfo id={id}/>
     </div>
     {/* alakalı videolar */}
      <div className=' flex flex-col  gap-10 lg:max-w-[400px] sm:m-auto lg:h-screen  lg:overflow-auto'>
        {!related ? "..." : related.map((video,i)=>{
          if(video.type !=="video") return;

          return(
            <VideoCard  key={i} video= {video}/>
          )
        }
        )}
      </div>
    </div>
  )
}

export default VideoDetail