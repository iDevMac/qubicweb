import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"
import { Tabs } from '../Tab/Tabs';
import { Tab } from 'bootstrap';
import { useEffect } from 'react';
import axios from "axios";


function NewsBar() {

  const [cloudComputing, setCloudComputing] = useState()

  const sliderData = [
    // {
      
    //   image: cloudComputing && cloudComputing.articles[0].title != "[Removed]" && cloudComputing.articles[0].urlToImage,
    //   title: cloudComputing && cloudComputing.articles[0].title != "[Removed]" && cloudComputing.articles[0].title,
    //   desc: cloudComputing && cloudComputing.articles[0].title != "[Removed]" && cloudComputing.articles[0].description
    // },
    {
      image: cloudComputing && cloudComputing.articles[1].title != "[Removed]" && cloudComputing.articles[1].urlToImage,
      title: cloudComputing && cloudComputing.articles[1].title != "[Removed]" && cloudComputing.articles[1].title,
      desc: cloudComputing && cloudComputing.articles[1].title != "[Removed]" && cloudComputing.articles[1].description
    },
    {
      image: cloudComputing && cloudComputing.articles[2].title != "[Removed]" && cloudComputing.articles[2].urlToImage,
      title: cloudComputing && cloudComputing.articles[2].title != "[Removed]" && cloudComputing.articles[2].title,
      desc: cloudComputing && cloudComputing.articles[2].title != "[Removed]" && cloudComputing.articles[2].description,
    },
    {
      image: cloudComputing && cloudComputing.articles[3].title != "[Removed]" && cloudComputing.articles[3].urlToImage,
      title: cloudComputing && cloudComputing.articles[3].title != "[Removed]" && cloudComputing.articles[3].title,
      desc: cloudComputing && cloudComputing.articles[3].title != "[Removed]" && cloudComputing.articles[3].description
    },
    {
      image: cloudComputing && cloudComputing.articles[4].title != "[Removed]" && cloudComputing.articles[4].urlToImage,
      title: cloudComputing && cloudComputing.articles[4].title != "[Removed]" && cloudComputing.articles[4].title,
      desc: cloudComputing && cloudComputing.articles[4].title != "[Removed]" && cloudComputing.articles[4].description
    },
    {
      image: cloudComputing && cloudComputing.articles[5].title != "[Removed]" && cloudComputing.articles[5].urlToImage,
      title: cloudComputing && cloudComputing.articles[5].title != "[Removed]" && cloudComputing.articles[5].title,
      desc: cloudComputing && cloudComputing.articles[5].title != "[Removed]" && cloudComputing.articles[5].description
    },
    {
      image: cloudComputing && cloudComputing.articles[6].title != "[Removed]" && cloudComputing.articles[6].urlToImage,
      title: cloudComputing && cloudComputing.articles[6].title != "[Removed]" && cloudComputing.articles[6].title,
      desc: cloudComputing && cloudComputing.articles[6].title != "[Removed]" && cloudComputing.articles[6].description
    },
    {
      image: cloudComputing && cloudComputing.articles[7].title != "[Removed]" && cloudComputing.articles[7].urlToImage,
      title: cloudComputing && cloudComputing.articles[7].title != "[Removed]" && cloudComputing.articles[7].title,
      desc: cloudComputing && cloudComputing.articles[7].title != "[Removed]" && cloudComputing.articles[7].urlToImage
    },
    {
      image: cloudComputing && cloudComputing.articles[8].title != "[Removed]" && cloudComputing.articles[8].urlToImage,
      title: cloudComputing && cloudComputing.articles[8].title != "[Removed]" && cloudComputing.articles[8].urlToImage,
      desc: cloudComputing && cloudComputing.articles[8].title != "[Removed]" && cloudComputing.articles[8].urlToImage
    }
  ];


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
    }
  ]
  const tabData3 = [
    {
      image: newsbarphotocover2,
      title: "DevOps / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover3,
      title: "Cyber Security / Fri. Nov. 2024",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  useEffect(() => {
    const getNewsApi = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=cloud+computing&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
      .then((response) => {
          // console.log(response);
          setCloudComputing(response ? response.data : {})
      })
      .catch(err => {
        console.log(err);
        
      })
      // console.log(response);
    }

    getNewsApi()
  }, [])

  return (
    <div className='container mx-auto newsbar'>
      <div className=''>
        <Carousel
            className='slider'
            swipeable={false}
            draggable={false}
            customLeftArrow={<CustomRightArrow />}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 10s"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={responsive.desktop}
            itemClass="carousel-item-padding-40-px"
          >

            {
              sliderData?.map((item, i) => (
                <div className='justify-center items-center slider-item -z-1 space-x-2' key={i}>
                  <img src={item.image} alt="" className='min-w-7 min-h-10 -z-5' />
                  <div className='ml-2 writeup'>
                    <h5 className='text-gray-600'>{item.title}</h5>
                    <p className='text-gray-500 overflow-x-hidden min-h-20'>{item.desc}</p>
                  </div>
                </div>
              ))
            }

        </Carousel>
      </div>
      <div className='row justify-center items-center bottom'>
        <div className='col-md-8 right h-full video-wrapper'>
          <iframe 
            className='w-full video img-thumbnail' 
            src="https://www.youtube.com/embed/CZEFrqa3FFA?si=pUi8dKDXQ0yiPP4P" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            >
          </iframe>
        </div>
        <div className='col-md-4 right h-full'>
          <Tabs>
              <Tab label="Trendy">
                <div className='tab-scroll'>
                  {
                    tabData1?.map((item, i) => (
                      <>
                        <div className="">
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
              <Tab label="Latest">
              <div className='tab-scroll'>
              {
                  tabData2?.map((item, i) => (
                    <>
                      <div className="pt-2">
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
              <Tab label="Popular">
              <div className='tab-scroll'>
                {
                  tabData3?.map((item, i) => (
                    <>
                      <div className="pt-2">
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
  )
}

export default NewsBar
