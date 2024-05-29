import React, { useEffect, useState } from 'react';
import '../css/Video.css'
import video1 from '../datas/video'
// import video from '../assets/video/video.mp4'
const VideoPlayer = ({ videoData }) => {

    // const [datas, setDatas] = useState([]);

    // useEffect(() => {
    //     setDatas(video);
    //     console.log('video', video);
    // }, []);
    console.log('video', video1)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <div className='video-container p-5 my-1'>
            <h1 className='text-2xl flex items-center justify-center alegreya-class font-bold text-[#D24545] my-5'>Videos</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto'>

                {
                    video1.map((item) => {
                        return (
                            <video
                                key={item.id}
                                width={'500px'}
                                height={'500px'}
                                controls={true}
                                autoPlay={false}
                                loop={false}
                                muted={false}
                                className="video-class"
                                                            
                            >
                                <source  src={item.src} type='video/mp4' />

                            </video>
                        )
                    })
                }

                 

            </div>
        </div>
    );
}

export default VideoPlayer;


