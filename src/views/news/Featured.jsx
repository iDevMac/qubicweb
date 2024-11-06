import React from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../slider.css"
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"
import { useEffect } from 'react';

function Featured() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
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
    
      const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };

      const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };

      useEffect(() => {
        const url = 'https://tech-news3.p.rapidapi.com/techradar';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '1426370a2cmshc073a1bca234d93p1269c4jsnecfc50a1e41d',
                    'x-rapidapi-host': 'tech-news3.p.rapidapi.com'
                }
            };

            try {
                const response = fetch(url, options);
                const result = response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
      }, [])

  return (
    <div className='container mx-auto featured'>
        <h3>Featured News</h3>
      <div class="w-full">
        <Carousel
            className='slider'
            swipeable={false}
            draggable={false}
            // showDots={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
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
              <img src={newsbarphotocover1} alt="" className='min-w-4 min-h-10 -z-5' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover2} alt="" className='min-w-4 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item  mr-2 -z-1'>
              <img src={newsbarphotocover3} alt="" className='min-w-10 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover2} alt="" className='min-w-4 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's.</p>
              </div>
            </div>
            <div className='justify-center items-center slider-item -z-1' >
              <img src={newsbarphotocover1} alt="" className='min-w-4 min-h-10' />
              <div className='ml-2 writeup'>
                <h5 className='text-gray-400'>Lorem Ipsum.</h5>
                <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>Lorem Ipsum has been the industry's.</p>
              </div>
            </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Featured
