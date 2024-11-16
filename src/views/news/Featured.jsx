import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../slider.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"
import { useEffect } from 'react';

function Featured() {

    const sliderData = [
      {
        image: newsbarphotocover1,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      },
      {
        image: newsbarphotocover2,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      },
      {
        image: newsbarphotocover3,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      },
      {
        image: newsbarphotocover1,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      },
      {
        image: newsbarphotocover3,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      },
      {
        image: newsbarphotocover3,
        title: "Lorem Ipsum.",
        desc: "Lorem Ipsum has been the industry's."
      }
      
    ]

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

      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group bg-slate-800">
            <FaChevronLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <FaChevronRight onClick={() => next()} />
            {/* <FaChevronLeft onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
          </div>
        );
      };

  return (
    <div className='container mx-auto featured'>
        <h3>Featured News</h3>
      <div class="w-full">
        <Carousel
            className='slider'
            swipeable={false}
            draggable={false}
            // showDots={true}
            customButtonGroup={<ButtonGroup />}
            // customRightArrow={<CustomRightArrow />}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all 2s"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={responsive.desktop}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >

            {
              sliderData?.map((item, i) => (
                <div className='justify-center items-center slider-item -z-1 space-x-2' key={i}>
                  <img src={item.image} alt="" className='min-w-4 min-h-10 -z-5' />
                  <div className='ml-2 writeup'>
                    <h5 className='text-gray-400'>{item.title}</h5>
                    <p className='text-gray-500 overflow-x-hidden ellipsis min-h-20'>{item.desc}</p>
                  </div>
                </div>
              ))
            }

        </Carousel>
      </div>
    </div>
  )
}

export default Featured
