import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"

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
            <div className='justify-center items-center slider-item'>
              <img src={newsbarphotocover1} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2'>
                <h2 className='text-gray-400 text-center'>Lorem Ipsum is simply dummy.</h2>
                <p className='text-gray-500 text-center overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item' >
              <img src={newsbarphotocover2} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2'>
                <h2 className='text-gray-400 text-center'>Lorem Ipsum is simply dummy.</h2>
                <p className='text-gray-500 text-center overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item  mr-2'>
              <img src={newsbarphotocover3} alt="" className='min-w-10 min-h-10' />
              <div className='ml-2'>
                <h2 className='text-gray-400 text-center'>Lorem Ipsum is simply dummy.</h2>
                <p className='text-gray-500 text-center overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item' >
              <img src={newsbarphotocover2} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2'>
                <h2 className='text-gray-400 text-center'>Lorem Ipsum is simply dummy.</h2>
                <p className='text-gray-500 text-center overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item' >
              <img src={newsbarphotocover1} alt="" className='min-w-7 min-h-10' />
              <div className='ml-2'>
                <h2 className='text-gray-400 text-center'>Lorem Ipsum is simply dummy.</h2>
                <p className='text-gray-500 text-center overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>

        </Carousel>
      </div>
    </div>
  )
}

export default NewsBar
