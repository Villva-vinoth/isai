import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../css/Slider.css';
import supporter from '../datas/supporter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
    const [support, setSupport] = useState([]);

    useEffect(() => {
        setSupport(supporter);
        console.log(supporter);
    }, []);

    const PrevButton = ({ onClick, currentSlide, style, ...props }) => {
        return (
            <div
                onClick={onClick}
                style={{
                    cursor: 'pointer',
                    boxShadow: "0 0 5px rgb(207, 207, 207)",
                    backgroundColor: "white",
                    width: "20px",
                    textAlign: "center",
                    position: "absolute",
                    top: "40%",
                    zIndex: "9",
                    left: "10px",
                    ...style
                }}
                {...props}
                className={`award-prev `}
                aria-hidden="true"
            >
                {'<'}
            </div>
        );
    };

    const NextButton = ({ onClick, currentSlide, slideCount, style, ...props }) => {
        return (
            <div
                onClick={onClick}
                style={{
                    cursor: 'pointer',
                    boxShadow: "0 0 5px rgb(207, 207, 207)",
                    backgroundColor: "white",
                    width: "20px",
                    textAlign: "center",
                    position: "absolute",
                    top: "40%",
                    right: "10px",
                    zIndex: "99",
                    ...style
                }}
                {...props}
                className={`award-next`}
                aria-hidden="true"
            >
                {'>'}
            </div>
        );
    };

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2 
                }
            }
        ]
    };

    return (
        <div className='my-5'>
            <h1 className='lg:text-5xl md:text-3xl text-lg alegreya-class text-[#000] font-bold text-center mt-1'>Supporters</h1>
            <Slider {...settings}>
                {support.map((item, index) => {
                    return (
                        <div key={index} className='award-pic'>
                            <img src={item.img} alt='' width={'50px'} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Sliders;
