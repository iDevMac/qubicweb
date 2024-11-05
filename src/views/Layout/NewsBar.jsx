import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"
import { Tabs } from '../Tab/Tabs';
import { Tab } from 'bootstrap';


function NewsBar() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };


  return (
    <div className='container mx-auto text-gray-300 newsbar'>
      <div className=''>
        <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            customLeftArrow={<CustomRightArrow />}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .7"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={responsive.desktop}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className='justify-center items-center slider-item -z-1'>
              <img src={newsbarphotocover1} alt="" className='min-w-7 min-h-10 -z-5' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum is simply dummy.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover2} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum is simply dummy.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item  mr-2 -z-1'>
              <img src={newsbarphotocover3} alt="" className='min-w-10 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum is simply dummy.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover2} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum is simply dummy.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover1} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum is simply dummy.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>

        </Carousel>
      </div>
      <div className='row justify-center items-center bottom'>
        <div className='col-md-8 right h-full'>
          <iframe 
            className='w-full video img-thumbnail' 
            src="https://www.youtube.com/embed/kPRhMNHDjvI?si=R37QxKXwpthLEciD" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            >
          </iframe>
        </div>
        <div className='col-md-4 right h-full'>
          <div className='tab'>
          <Tabs>
              <Tab label="Trendy">
                <div className="py-3">
                  <div className='justify-center items-center tab-item'>
                    <img src={newsbarphotocover1} alt="" className='' />
                    <div className='ml-2 '>
                      <h5 className='text-gray-400'>DevOps / Fri. Nov. 2024</h5>
                      <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
                <div className='border-b-2 border-dotted border-gray-700 w-90'></div>
                <div className="py-3">
                  <div className='justify-center items-center tab-item'>
                    <img src={newsbarphotocover1} alt="" className='' />
                    <div className='ml-2'>
                      <h5 className='text-gray-400'>A.I / Fri. Nov. 2024</h5>
                      <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Latest">
                <div className="py-4">
                  <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                    quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                    harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Tab>
              <Tab label="Popular">
                <div className="py-4">
                  <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                    quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                    harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    Provident similique accusantium nemo autem.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsBar
