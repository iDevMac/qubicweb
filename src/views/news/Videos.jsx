import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../slider.css"
import { Tabs } from '../Tab/Tabs';
import { Tab } from 'bootstrap';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"

function Videos() {

  const sliderData = [
    {
      // image: newsbarphotocover1,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
      content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      // image: newsbarphotocover2,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      // image: newsbarphotocover3,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      // image: newsbarphotocover1,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      // image: newsbarphotocover3,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      // image: newsbarphotocover3,
      video: <iframe src="https://www.youtube.com/embed/s19BxFpoSd0?si=QB7mPb_6wolIQANg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ]


  const tabData1 = [
    {
      image: newsbarphotocover1,
      title: "DevOps / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover1,
      title: "Cyber Security / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover2,
      title: "Cyber Security / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ]
  const tabData2 = [
    {
      image: newsbarphotocover3,
      title: "DevOps / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover1,
      title: "Cyber Security / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover2,
      title: "Cyber Security / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group bg-slate-800 ">
        <FaChevronLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <FaChevronRight onClick={() => next()} />
        {/* <FaChevronLeft onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

  return (
    <div className='video-news'>
      <div className='container mx-auto'>
        <h3>Video News</h3>
        <div className='top'>
          <div className='video-slider'>
          <Carousel
              className='slider'
              swipeable={true}
              draggable={false}
              // showDots={true}
              customButtonGroup={<ButtonGroup />}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={700}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              deviceType={responsive.desktop}
              itemClass="carousel-item-padding-40-px"
            >
              {
                sliderData?.map((item, i) => (
                  <div className='slider-item -z-1 space-x-2' key={i}>
                    {item.video}
                    <div className='ml-2 writeup'>
                      <h5 className='text-gray-800'>{item.title} / <label className='text-gray-400'>date-time</label></h5>
                      <div className='text-gray-500 content'>{item.content}</div>
                      <div className='text-gray-500'>{item.desc}</div>
                    </div>
                  </div>
                ))
              }

          </Carousel>
          </div>
        </div>
        <div className='row bottom'>
          <div className='col-md-7 video'>
            <iframe
              className=''
              src="https://www.youtube.com/embed/YRJbhFLLPyE?si=kKe8QTWMtulz-QOb"
              title="YouTube video player"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
          <div className='col-md-5'>
              <h5 className='mt-4'>Popular News</h5>
              <div className=''>
                <Tabs>
                  <Tab label="<">
                    <div className='tab-scroll'>
                        {
                          tabData1?.map((item, i) => (
                            <>
                              <div className="tab">
                                <div className='justify-center items-center tab-item' key={i}>
                                  <img src={item.image} alt="" className='' />
                                  <div className='ml-2'>
                                    <h5 className='text-base'>{item.title}</h5>
                                    <label className=' overflow-x-hidden ellipsis min-h-20 text-gray-600'>{item.desc}</label>
                                  </div>
                                </div>
                              </div>
                              <div className='border-t-2 border-dotted border-gray-700 w-90 mb-3'></div>
                            </>
                          ))
                        }
                    </div>
                  </Tab>
                  <Tab label=">">
                    <div className='tab-scroll'>
                      {
                        tabData2?.map((item, i) => (
                          <>
                            <div className="pt-2 tab">
                              <div className='justify-center items-center tab-item' key={i}>
                                <img src={item.image} alt="" className='' />
                                <div className='ml-2'>
                                  <h5 className='text-base'>{item.title}</h5>
                                  <label className=' overflow-x-hidden ellipsis min-h-20 text-gray-600'>{item.desc}</label>
                                </div>
                              </div>
                            </div>
                            <div className='border-t-2 border-dotted border-gray-700 w-90'></div>
                          </>
                        ))
                      }
                    </div>
                  </Tab>
                </Tabs>
              </div>
          </div>
        </div>
      </div>
      <div className='bgBlue'></div>
    </div>
  )
}

export default Videos
