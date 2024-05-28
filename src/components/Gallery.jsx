import React, { useEffect, useState } from "react";
import "../css/Gallery.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHandPointDown, FaDoorClosed } from "react-icons/fa";
// import { FaDoorClosed } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


function Gallery({ imageData, title, value, seasons, visible }) {

  const nav = useNavigate()


  const [datas, setDatas] = useState([]);

  const [refresh, setRefresh] = useState(true)

  const [season, setSeason] = useState([]);

  useEffect(
    () => {
      if (select)
        setDatas(imageData)
    }, [refresh]
  )

  useEffect(
    () => {
      setSeason(seasons)
    }, []
  )

  const [select, setSelect] = useState(2017)

  const handleClick = (index) => {


      setRefresh(false)
      setSelect(index)
      console.log(index)
      nav(`/${index}`)
      setTimeout(() => {
        setRefresh(true)
      }, 200)
   
  }


  const [navigation, setNavigation] = useState(false)

  const handleNav = () => {
    setNavigation(!navigation);
  };

  const handleImageClick = (props) => {
    console.log(props)
    setIsvisible(0)
    setImage(props)
  }

  const [isVisible, setIsvisible] = useState(1)
  const [image, setImage] = useState('')




  const handlePrev = (props) => {
    const prev = datas.map((item) => item.cover)
    const newIndex = ((props.id - 1) % prev[0].length) || prev[0].length
    const pre = prev[0].filter((itm) => itm.id === newIndex)
    setImage(pre[0])
  }

  const handleNext = (props) => {
    const prev = datas.map((item) => item.cover)
    const newIndex = ((props.id + 1) % prev[0].length) || prev[0].length
    const pre = prev[0].filter((itm) => itm.id === newIndex)
    setImage(pre[0])
  }

  const handleImageClick2 = (props) => {
    console.log(props)
    setIsvisible2(0)
    setImage2(props)
  }

  const [isVisible2, setIsvisible2] = useState(1)
  const [image2, setImage2] = useState('')




  const handlePrev2 = (props) => {
    const prev = datas.filter((item) => !item.cover)
    const newIndex = ((props.id - 1) % prev.length) || prev.length
    const pre = prev.filter((itm) => itm.id === newIndex)
    setImage2(pre[0])


  }

  const handleNext2 = (props) => {
    const prev = datas.filter((item) => !item.cover)
    const newIndex = ((props.id + 1) % prev.length) || prev.length
    const pre = prev.filter((itm) => itm.id === newIndex)
    setImage2(pre[0])

  }

  return (
    <>

      <div className=" w-[100%] mx-auto image-main-div flex ">



        <div onClick={handleNav} className='block lg:hidden md:hidden absolute icon-class'>
          {navigation ? <IoIosCloseCircle size={25} /> : <FaHandPointDown size={25} />}
        </div>
        <div className="flex flex-col items-center my-5 mx-0 mx-auto sub-container">

          <div className={navigation ? "lg:basis-1/12 basis-1 lg:hidden md:hidden mt-2" : "basis-0 hidden"}>
            {
              season && season.map((item, index) => {
                return (
                  <div className="sub-menu flex items-center justify-center hover:text-[#e736e7] hover:scale-125 " key={index}>
                    <div className={select == item ? 'lg:text-5xl text-lg md:text-3xl text-[#a52a2a] alegreya-class p-2' : "lg:text-2xl md:text-xl text-sm"} onClick={() => { handleClick(item); handleNav() }}>{item}</div>
                  </div>
                )
              })
            }
          </div>

          <div className="lg:flex md:flex hidden md:flex-col lg:flex-col mt-2">
            {
              season && season.map((item, index) => {
                return (
                  <div className="sub-menu flex items-center justify-center hover:text-[#e736e7] hover:scale-125 " key={index}>
                    <div className={select == item ? 'lg:text-3xl text-lg text-[#a52a2a] md:text-3xl alegreya-class p-2' : "lg:text-xl md:text-xl text-sm"} onClick={() => { handleClick(item); }}>{item}</div>
                  </div>
                )
              })
            }
          </div>

        </div>

        <div className="lg:basis-11/12 basis container-div">
          <h1 className="text-center text-3xl font-bold alegreya-class text-[#0C0C0C] g-high-light">{title}</h1>

          <div className=" columns-1  lg:p-4 p-1">
            {datas && datas.map((item) => {
              return item.cover && item.cover.map((itm, index) => {
                return (
                  <div className="cursor-pointer lg:w-[100%] mx-auto lg:p-5 md:p-2 p-2 image-div " key={index} onClick={() => { handleImageClick(itm) }}>
                    <img src={itm.img} alt="text" className="lg:w-[100%]" />
                  </div>
                )
              })
            })}
          </div>

          <div className={value === 4 ? "lg:columns-4 md:columns-2 columns-1 lg:w-[95%] w-[100%] lg:mx-auto mx-auto my-0  lg:gap-1 gap-0 " : "lg:columns-3 md:columns-2 columns-1 lg:w-[95%] w-[100%] lg:mx-auto mx-auto my-0  lg:gap-1 gap-0 "}>
            {datas.map((item, index) => {
              return (
                <div className="cursor-pointer lg:w-[100%] mx-auto lg:p-1 md:p-1 p-2 image-div" key={index} onClick={() => handleImageClick2(item)}>
                  {
                    item.img && <img src={item.img} alt="text" className="lg:w-[100%] " />
                  }

                </div>
              );
            })}
          </div>
        </div>



      </div>


      <div className={isVisible === 0 ? "click-to-view" : "hidden"}>
        <span className="absolute top-0 right-0 click-to-view-icon lg:text-5xl md:text-5xl text-3xl" onClick={() => setIsvisible(1)}>
          <IoIosCloseCircle color="red" /></span>
        <div className="flex w-full click-to-view-main-containter">
          <div onClick={() => { handlePrev(image) }}><FcPrevious size={30} /></div>
          <img src={image.img} alt="text" className="lg:w-[800px] md:w-[700px] w-[250px] image-rounded" />
          <span onClick={() => { handleNext(image) }}><FcNext size={30} /></span>

        </div>


      </div>

      <div className={isVisible2 === 0 ? "click-to-view" : "hidden"}>
        <span className="absolute top-0 right-0 click-to-view-icon lg:text-5xl md:text-5xl text-3xl" onClick={() => setIsvisible2(1)}>
          <IoIosCloseCircle color="red" /></span>
        <div className="flex w-full click-to-view-main-containter">
          <div onClick={() => { handlePrev2(image2) }}><FcPrevious size={30} /></div>
          <img src={image2.img} alt="text" className="lg:w-[800px] md:w-[700px] w-[250px] image-rounded" />
          <span onClick={() => { handleNext2(image2) }}><FcNext size={30} /></span>

        </div>


      </div>

    </>
  );
}

export default Gallery;