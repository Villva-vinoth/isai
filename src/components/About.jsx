import React, { useEffect, useState } from 'react'
import '../css/about.css'
import image1 from '../assets/internationalBranches/person.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const paragraphStyle = {
    WebkitLineClamp:5,
    WebkitBoxOrient:"vertical",
    overflow:"hidden",
    display:"-webkit-box"
}
const About = () => {

    const [isOpen,setIsOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const trustMember = [
        {
            id: 1,
            person: "Mr. Arokiaraj Jaganthan",
            img: image1,
            job: "Founder, President Secretary"
        },
        {
            id: 2,
            person: "Mr.Sundarean	",
            img: image1,
            job: "President, Program Committee"
        },
        {
            id: 3,
            person: "Mr. Richard Raj",
            img: image1,
            job: "Treasurer"
        },
        {
            id: 4,
            person: "Mr. Chokalingam",
            img: image1,
            job: "Treasurer"
        },
        {
            id: 5,
            person: "Mr. Nikkhath Sheriff",
            img: image1,
            job: "Vice President"
        },
        {
            id: 6,
            person: "Mr. Panneer Selvam",
            img: image1,
            job: "Vice President"
        },
        {
            id: 7,
            person: "Mr. M.R. Baaskaran",
            img: image1,
            job: "Vice President"
        },
        {
            id: 8,
            person: "Mr. Ananthsairam",
            img: image1,
            job: "Vice President"
        },
        {
            id: 9,
            person: "Mr. K.A. Sivakumar",
            img: image1,
            job: "Vice President"
        },
    ]






    return (
        <div>
            <div className='w-full bg-white py-2 px-4'>
                <p className='text-[#D24545] font-bold lg:text-xl text-center lg:p-3 md:p-3 p-2'>About Us</p>
                <div className='w-[90%] mx-auto flex p-2 first-about-container rounded-2xl about-mobile'>
                    <div className='w-[100%] basis-1/3 flex items-center '>
                        <img className='w-[100%]  rounded-2xl' src={'https://tamilcultural.org/img/about.jpg'} alt='/' style={{ mixBlendMode: 'multiply' }} />
                    </div>
                    <div className='flex flex-col justify-center p-2 basis-2/3'>
                        <h1 className='text-lg font-bold lg:text-xl'>Welcome to the &nbsp;< br />
                            <span className='text-[#D24545] alegreya-class italic '>  Tamil Cultural Academy</span> </h1>
                        <p className='alegreya-class  text-sm   italic font-medium lg:text-left text-justify'>
                            &nbsp; &nbsp; &nbsp; Tamil Cultural Academy is a registered social & cultural trust and a non – profitable organizationsince 1998.
                            It was formerly known as Tamil Nadu Arts & Cultural Academy. The academy has been an organiser for many cultural
                            programmes with reputed Carnatic Singers; the academy was also an organiser of a number of Tamil Film Industry in
                            recognition of hundreds of Artists for their contribution to the Tamil Arts and Culture. As an evolution
                            The Cultural Academy become
                            Tamil Cultural Academy to promote the Traditional Carnatic Music and Bharathanatyam since 2017.
                        </p>
                        {/* <button className='bg-black text-[#D24545] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
                    </div>
                </div>

                <div className='border-container'></div>

                <div className='lg:mx-auto w-[90%] mx-auto lg:py-2'>
                    <h1 className='text-[#000] exo-2-class  lg:text-xl text-lg font-bold'>ABOUT THE EVENT:</h1>
                    <h2 className='lg:text-lg text-lg py-2 text-[grey]'>WHAT AND WHY IS MEGA ISAI VIZHA (மெகா இசை விழா) ?</h2>
                    <p className='alegreya-class lg:text-lg text-lg italic font-semibold mt-2 lg:text-left text-justify text-[grey]' style={
                       !isOpen ? paragraphStyle : null
                    } >
                        &nbsp; &nbsp; &#160; Mega Isai Vizha is a unique name with intent of recognizing the number of Tamil Poets and Carnatic Music Composers, who were well articulated their devotion through their music centric literatures for several centuries.
                        <br />
                        <br />
                        &nbsp; &nbsp; &#160;“Margazhi” (மார்கழி) month in Tamil has a number of significance. In Bhagavat Gita lord Krishna says “I am Margazhi among 12 months”. Lord Shiva consumed the poison ‘Halahala’ in an act to protect the universe in this month. For the Deva loka this month is considered as Brahma mugurtha.
                        This is the month for Bhakthi and Music in Tamil Culture. Carnatic Music and Bharathanatyam are the cultural wealth mostly belonging to Tamilnadu.
                        <br />
                        <br />

                        &nbsp; &nbsp; &#160; The Trinity of Carnatic music refer to the outstanding trio of composer-musicians of Carnatic music in the 18th century, being Thyagaraja, Muthuswami Dikshitar and Syama Sastri.
                        Their contributions are continuity of Tamil Mummoorthigal – Muthu Thandavar, Arunachala Kavirayar & Marimuthu Pillai of 17th Century. Gopalakrishna Bharathi, the Tamil Poet and Music Composer was contemporary of Thyagaraja.
                        These are some examples of Tamil Culture and Carnatic Music.
                        <br />
                        <br />

                        &nbsp; &nbsp; &#160; Music, Literature, Bhakthi are the tricolors of Tamil Culture.
                        In the memories of Carnatic artists the association Month Margazhi is fabrication of Tamil literature with music and Bhakthi – e.g. Thiruppavai and Thiruvempavai.
                        The songs and poems composed by Mahakavi Bharati, born in December,
                        have become staples in the literary and musical repertoire of Tamil artists throughout the world.
                        <br />
                        <br />

                        &nbsp; &nbsp; &#160; The reason of ‘Margazhi Isai Vizha’ is unlimited in these lines, which Tamil Cultural Academy has the vision to make it as the Mega Marghazhi Isai Vizha in the coming years for the Tamil Cultural followers world-wide.
                    </p>
                    <button className='about-read-more' onClick={()=>setIsOpen(!isOpen)}>
                        {
                            !isOpen ? "Read more..." :"Read less..."
                        }

                    </button>
                </div>
                <div className='border-container'></div>

                <div className='lg:mx-auto w-[90%] mx-auto lg:py-2  text-[#] mt-2'>
                    <h1 className='text-[#000] lg:text-xl exo-2-class text-lg font-bold lg:py-2 py-1'>ABOUT THE FOUNDER & PRESIDENT:
                    </h1>
                    <p className='alegreya-class lg:text-lg text-lg italic font-semibold mt-2 lg:text-left text-justify text-[grey]'>
                        &nbsp; &nbsp; &#160;Tamil Cultural Academy founded by Shri Arokiaraj Jaganathan, was one of the founder of the similar popular event series in Chennai. Shri Arokiaraj Jaganathan has over three
                        decades of experience in Human Resources Development in Technically Unique field of
                        Oil & Gas Exploration. His decades Because of old association in promotion of Tamil Culture
                        has led him to specifically promote the values of Carnatic Music & Bharatha Natyam. He has been
                        with Tamil Nadu Arts & Cultural Academy
                        since 2001 and transformed it to a fullfledged event series of Mega Margazhi Isai Vizha.
                        In his service to the Development of Tamil Culture he has recognized and motivated over one
                        thousand through the Cultural Academy & Tamil Cultural Academy since 2001.
                    </p>
                </div>
                <div className='border-container'></div>

                <div className='lg:mx-auto w-[90%] mx-auto lg:py-2 text-[#] mt-2'>
                    <h1 className='text-[#000] lg:text-xl exo-2-class text-xl font-bold lg:py-2 py-1'>Trust Members :
                    </h1>
                    <div className="trust-container">
                        {
                            trustMember.map((item, index) => (
                                <div key={index} className="trust-member">
                                    <img src={item.img} alt="image" className="w-20 h-20 rounded mb-4" />
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="font-bold">{item.person}</h1>
                                        <h2 className="text-sm text-gray-600">{item.job}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='border-container'></div>

                <div className='lg:mx-auto w-[90%] mx-auto text-[#] mt-2'>
                    <h1 className='text-[#000] lg:text-xl exo-2-class text-xl font-bold lg:py-2 py-1'> International Trust Members :
                    </h1>
                    <div className='grid lg:grid-cols-4	grid-cols-1 gap-4'>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2  cursor-pointer'>
                            <img src={image1} alt='img' className='w-40 h-40' />
                            <div>
                                <h1>Rosaiyya Susikaran	</h1>
                                <h2>President – France <span className='text-[#d24545] text-xl alegreya-class hover:text-black italic '>
                                    &nbsp;   Tamil Cultural Academy</span></h2>
                            </div>
                        </div>

                        <div className='flex flex-col border-4 rounded-2xl items-center p-2  cursor-pointer'>
                            <img src={image1} alt='img' className='w-40 h-40' />

                            <div>
                                <h1>Gopala pillai Ganam	</h1>
                                <h2>	President - Germany<span className='text-[#d24545] text-xl alegreya-class hover:text-black italic '>
                                    &nbsp;  Tamil Cultural Academy</span></h2>
                            </div>
                        </div>

                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 cursor-pointer'>
                            <img src={image1} alt='img' className='w-40 h-40' />

                            <div>
                                <h1>Mr. Mohamed Riyasudeen	</h1>
                                <h2>	President - Gulf Region<span className='text-[#d24545] alegreya-class text-xl italic'>
                                    &nbsp; Tamil Cultural Academy</span></h2>
                            </div>
                        </div>



                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 cursor-pointer'>
                            <img src={image1} alt='img' className='w-40 h-40' />

                            <div>
                                <h1>O Raman	</h1>
                                <h2>Singapore</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:mx-auto w-full lg:px-24 px-0 text-[#] mt-2'>

                    <div className='grid lg:grid-cols-1	grid-cols-1 gap-4'>
                        <div className='flex flex-col border-4 rounded-2xl text-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-3xl cursor-pointer'>
                            <h1>With respectable <span className='text-[#d24545] text-2xl alegreya-class hover:text-black italic '> 650 Trust members</span> globally</h1>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default About