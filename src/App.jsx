import { Swiper, SwiperSlide } from 'swiper/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Fade, Slide } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Navigation } from 'swiper/modules';
import banner1 from "../src/assets/banner1.jpg";
import banner2 from "../src/assets/banner2.jpg";
import banner3 from "../src/assets/banner3.jpg";

function App() {
  const [banners1] = useTypewriter({
    typeSpeed: 50,
    words: ['Customized', 'Travel', 'Plans'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [banners2] = useTypewriter({
    typeSpeed: 50,
    words: ['Explore', 'the', 'World', 'With', 'Us'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const [banners3] = useTypewriter({
    typeSpeed: 50,
    words: ['Top-notch', 'Accommodations'],
    loop: 8,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })



  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}

        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mb-16 min-h-full relative  "
      >
        <SwiperSlide >
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='my-10'>
              <Fade direction='left' delay={1000}>
                <h2 className='text-6xl font-semibold text-white'>Collaborative Learning</h2>
              </Fade>
              <Fade delay={2000}>
                <p className='text-white font-semibold text-xl mt-1 mb-9'>Unlock the power of teamwork</p>
              </Fade>
              <Fade direction='up' delay={3000}>
               <a className='cursor-pointer  bg-[#fff568] text-lg font-medium px-8 py-3 rounded-4xl'>Start Studying</a>
              </Fade>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='my-10'>
              <Fade direction='left' delay={1000}>
                <h2 className='text-6xl font-semibold text-white'>Study Smarter, Together</h2>
              </Fade>
              <Fade delay={2000}>
                <p className='text-white font-semibold text-xl mt-1 mb-9'>Join a community of learners</p>
              </Fade>
              <Fade direction='up' delay={3000}>
               <a className='cursor-pointer  bg-[#fff568] text-lg font-medium px-8 py-3 rounded-4xl'>Join Now</a>
              </Fade>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div
            className="hero w-full min-h-full md:min-h-[50rem] "
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='my-10'>
              <Fade direction='left' delay={1000}>
                <h2 className='text-6xl font-semibold text-white'>Your Virtual Study Hub</h2>
              </Fade>
              <Fade delay={2500}>
                <p className='text-white font-semibold text-xl mt-1 mb-9'>Learn, Share, and Grow</p>
              </Fade>
              <Fade direction='up' delay={3000}>
               <a className='cursor-pointer  bg-[#fff568] text-lg font-medium px-8 py-3 rounded-4xl'>Get Started</a>
              </Fade>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      {/* till this */}


    </>
  )
}

export default App
