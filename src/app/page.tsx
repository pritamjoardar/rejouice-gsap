"use client";
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  function handleMouseMove(ev:any) { 
    const { pageX, pageY } = ev;
    gsap.to('#cursor', {
      x: pageX,
      y: pageY
    });
  }
const tl = gsap.timeline()
  useGSAP(() => {
    tl.from("#rejouice span",{
      y:100,
      opacity:0,
      stagger:0.1,
      duration:.5
    });
    gsap.from('#page2 #title', {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body", 
        start: "top 40%",
        end:'top 37%',
        scrub: 2
      }
    });
    gsap.from('#page3 #title', {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body", 
        start: "top 40%",
        end:'top 37%',
        scrub: 2
      }
    });
    gsap.from('#page4 #title', {
      y: 120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#page4",
        scroller: "body", 
        start: "top 40%",
        end:'top 37%',
        scrub: 2
      }
    });
  });

  return (
    <div id='main' className='relative '>
      {/* header */}
      <div 
        onMouseMove={(ev) => handleMouseMove(ev)} 
        onMouseEnter={() => gsap.to('#cursor', { scale: 1, opacity: 1 })} 
        onMouseLeave={() => gsap.to('#cursor', { scale: 0, opacity: 0 })} 
        className=""
      >
        <video className='h-[100vh] w-full object-cover absolute top-0 left-0 ' muted autoPlay loop src={"https://res.cloudinary.com/dbju6ds0a/video/upload/v1721899779/rojuice%20clone/umxpp1ms63yzinjryzh2.mp4"}/>
        <div className="h-[100vh] w-full relative flex flex-col justify-between">
          <nav className='text-white flex justify-between text-[1.5vw] px-[2vw] py-[1.5vw]  z-20'>
            <h1>The Vanture Agency.</h1>
            <h1>Menu</h1>
          </nav>
          <h1 id='rejouice' className='text-white text-center w-full text-[30vw] tracking-tighter z-20'>
            <span className="inline-block">r</span>
            <span className="inline-block">e</span>
            <span className="inline-block">j</span>
            <span className="inline-block">o</span>
            <span className="inline-block">u</span>
            <span className="inline-block">i</span>
            <span className="inline-block">c</span>
            <span className="inline-block">e</span>
          </h1>
          <div id='cursor' className="size-[5vw] bg-[#FF5F38] rounded-full absolute left-0 opacity-80 top-0 flex justify-center items-center text-white z-10">
            <h1 className='relative z-50 font-semibold'>Play Reel</h1>
          </div>
        </div>
      </div>
      <div id='page2' className="text-[5.2vw] leading-tight  z-20 px-[2vw] py-[1.5vw]">
        <h1 id='title' className='tracking-tighter '>We are a venture firm and digital agency	&#46;</h1>
        <h1 id='title' className='tracking-tighter '>Our mission is to transform founders&#39; visions</h1>
        <h1 id='title' className='tracking-tighter '>into remarkable brands&#46; Choose traditional </h1>
      </div>
      <div id='page4' className="flex justify-center flex-col items-center leading-tight h-[90vh]">
        <p id='title' className='font-semibold xl:text-2xl'>Agency & Venture <span className='bg-black px-2 py-1 rounded-full text-white'>Models</span></p>
        <h1 id='title' className='text-[5.2vw]  tracking-tighter'>Explore our services</h1>
        <h1 id='title' className=' text-[5.2vw] tracking-tighter'>and engagement models</h1>
      </div>
      {/* images */}
      <div className="xl:px-16">
        <h1 className='text-[1.6vw] tracking-tighter'>Transforming visions into brands&#46;</h1>
        <div className="grid grid-cols-3 gap-5 mt-4">
          <span className="relative">
          <video loop autoPlay muted src="https://res.cloudinary.com/dbju6ds0a/video/upload/v1721936178/rojuice%20clone/eesqra2gojbgl4wsfxvr.mp4" className="object-cover absolute z-10"/>
          <img className='z-20 relative duration-700 ease-in hover:opacity-0' src="https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format" alt="" />
          </span>
          <span className="relative">
          <video loop autoPlay muted src="https://res.cloudinary.com/dbju6ds0a/video/upload/v1721936178/rojuice%20clone/i0to7xq1jxiv1nifaitd.mp4" className="object-cover absolute z-10"/>
          <img className='z-20 relative duration-700 ease-in hover:opacity-0' src="https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format" alt="" />
          </span>
          <span className="relative">
          <video loop autoPlay muted src="https://res.cloudinary.com/dbju6ds0a/video/upload/v1721936178/rojuice%20clone/i98nr7g2ehgrwj8bd2sl.mp4" className="object-cover absolute z-10"/>
          <img className='z-20 relative duration-700 ease-in hover:opacity-0' src="https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format" alt="" />
          </span>
        </div>
      </div>
      <div id='page3' className=" text-[5.2vw] leading-tight px-[2vw] mt-[4vw]">
        <h1>Get in touch</h1>
        <div className='bg-black h-[.1vw]'></div>
      </div>
      <div className="-mt-[2vw]">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={120}
        modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
      >
        <SwiperSlide className=''>
          <div className="flex gap-5 items-end ">
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex gap-5 items-end ">
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex gap-5 items-end ">
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]'  src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          <img className='w-[20vw]' src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Page
