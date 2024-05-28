import React, { useEffect } from 'react'

const About = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div>
            <div className='w-full bg-white py-2 px-4'>
                <p className='text-[#D24545] font-bold lg:text-3xl text-center lg:p-3 md:p-3 p-2'>About Us</p>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pb-5'>
                    <img className='w-[500px] mx-auto my-4' src={'https://tamilcultural.org/img/about.jpg'} alt='/' style={{ mixBlendMode: 'multiply' }} />
                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-xl font-bold lg:py-2 py-0'>Welcome to the
                            <span className='text-[#D24545] alegreya-class italic '> &nbsp; Tamil Cultural Academy</span> </h1>
                        <p className='alegreya-class lg:text-2xl text-lg italic font-medium lg:mt-5 mt-2 py-2 lg:text-left text-justify'>
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

                <div className='lg:mx-auto w-full lg:px-24 px-0 text-[#]'>
                    <h1 className='text-[#D24545] exo-2-class  lg:text-3xl text-xl font-bold lg:py-2 py-1'>ABOUT THE EVENT:</h1>
                    <h2 className='lg:text-xl text-lg py-2'>WHAT AND WHY IS MEGA ISAI VIZHA (மெகா இசை விழா) ?</h2>
                    <p className='alegreya-class lg:text-2xl text-lg italic font-semibold mt-2 lg:text-left text-justify'>
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

                        &nbsp; &nbsp; &#160; The reason of ‘Margazhi Isai Vizha’ is unlimited in these lines, which Tamil Cultural Academy has the vision to make it as the Mega Marghazhi Isai Vizha in the coming years for the Tamil Cultural followers world-wide.</p>
                </div>

                <div className='lg:mx-auto w-full lg:px-24 px-0 text-[#] mt-2'>
                    <h1 className='text-[#D24545] lg:text-3xl exo-2-class text-xl font-bold lg:py-2 py-1'>ABOUT THE FOUNDER & PRESIDENT:
                    </h1>
                    <p className='alegreya-class lg:text-2xl text-lg italic font-semibold mt-2 lg:text-left text-justify'>
                        &nbsp; &nbsp; &#160;Tamil Cultural Academy founded by Shri Arokiaraj Jaganathan, was one of the founder of the similar popular event series in Chennai. Shri Arokiaraj Jaganathan has over three decades of experience in Human Resources Development in Technically Unique field of Oil & Gas Exploration. His decades Because of old association in promotion of Tamil Culture has led him to specifically promote the values of Carnatic Music & Bharatha Natyam. He has been with Tamil Nadu Arts & Cultural Academy since 2001 and transformed it to a fullfledged event series of Mega Margazhi Isai Vizha. In his service to the Development of Tamil Culture he has recognized and motivated over one thousand through the Cultural Academy & Tamil Cultural Academy since 2001.
                    </p>
                </div>

                <div className='lg:mx-auto w-full lg:px-24 px-0 text-[#] mt-2'>
                    <h1 className='text-[#D24545] lg:text-3xl exo-2-class text-xl font-bold lg:py-2 py-1'>Trust Members :
                    </h1>
                    <div className='grid lg:grid-cols-3	 md:grid-cols-2 grid-cols-1 gap-4'>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Arokiaraj Jaganthan	</h1>
                            <h2>Founder, President Secretary</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr.Sundarean	</h1>
                            <h2>President, Program Committee</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Richard Raj	</h1>
                            <h2>Treasurer</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Chokalingam	</h1>
                            <h2>Treasurer</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Nikkhath Sheriff	</h1>
                            <h2>Vice President</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Panneer Selvam	</h1>
                            <h2>Vice President</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. M.R. Baaskaran	</h1>
                            <h2>Vice President</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Ananthsairam	</h1>
                            <h2>Vice President</h2>
                        </div>
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. K.A. Sivakumar	</h1>
                            <h2>Vice President</h2>
                        </div>
                    </div>
                </div>
                <div className='lg:mx-auto w-full lg:px-24 px-0 text-[#] mt-2'>
                    <h1 className='text-[#D24545] lg:text-3xl exo-2-class text-xl font-bold lg:py-2 py-1'> International Trust Members :
                    </h1>
                    <div className='grid lg:grid-cols-2	grid-cols-1 gap-4'>
                    <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Rosaiyya Susikaran	</h1>
                            <h2>President – France <span className='text-[#d24545] text-xl alegreya-class hover:text-black italic '>
                            &nbsp;   Tamil Cultural Academy</span></h2>
                        </div>
                        
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Gopala pillai Ganam	</h1>
                            <h2>	President - Germany<span className='text-[#d24545] text-xl alegreya-class hover:text-black italic '>
                            &nbsp;  Tamil Cultural Academy</span></h2>
                        </div>
                        
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>Mr. Mohamed Riyasudeen	</h1>
                            <h2>	President - Gulf Region<span className='text-[#d24545] alegreya-class hover:text-black text-xl italic'>
                                &nbsp; Tamil Cultural Academy</span></h2>
                        </div>
                        
                       
                        
                        <div className='flex flex-col border-4 rounded-2xl items-center p-2 hover:bg-sky-700 hover:text-white hover:border-black hover:text-lg cursor-pointer'>
                            <h1>O Raman	</h1>
                            <h2>Singapore</h2>
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