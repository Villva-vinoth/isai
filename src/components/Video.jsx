// import React, { useEffect, useState } from 'react';
// import '../css/Video.css'
// // import video from '../datas/video'
// import video1 from '../assets/video/video.mp4'
// const Video = ({ videoData }) => {

//     // const [datas, setDatas] = useState([]);

//     // useEffect(() => {
//     //     setDatas(video);
//     //     console.log('video', video);
//     // }, []);
//     // console.log('video', video)

//     return (
//         <div className='video-container p-5 my-1'>
//             <h1 className='text-2xl flex items-center justify-center alegreya-class font-bold text-[#D24545] my-5'>Videos</h1>

//             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto'>

//                 <video
//                     // key={item.id}
//                     width={'500px'}
//                     height={'500px'}
//                     controls={true}
//                     autoPlay={false}
//                     loop={false}
//                     muted={false}
//                     className="video-class"
//                 >
//                     <source src={video1} type='video/mp4' />
//                 </video>

//             </div>
//         </div>
//     );
// }

// export default Video;

import React from 'react';
import video1 from '../assets/video/video.mp4';

const Video = () => {
    return (
        <div>
            <video width="320" height="240" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;
