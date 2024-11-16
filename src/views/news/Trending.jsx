import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../slider.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import newsbarphotocover1 from "../../assets/img/newsbar/photo.jpg"
import newsbarphotocover2 from "../../assets/img/newsbar/photo2.jpg"
import newsbarphotocover3 from "../../assets/img/newsbar/photo3.jpeg"
import { Tabs } from '../Tab/Tabs';
import { Tab } from 'bootstrap';


function Trending() {
  const sliderData = [
    {
      image: newsbarphotocover1,
      title: "Lorem Ipsum.",
      content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover2,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover3,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover1,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover3,
      title: "Lorem Ipsum.",
       content: "Lorem Ipsum has been the industry's.",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: newsbarphotocover3,
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

    // useEffect(() => {
    //   const url = 'https://tech-news3.p.rapidapi.com/techradar';
    //       const options = {
    //           method: 'GET',
    //           headers: {
    //               'x-rapidapi-key': '1426370a2cmshc073a1bca234d93p1269c4jsnecfc50a1e41d',
    //               'x-rapidapi-host': 'tech-news3.p.rapidapi.com'
    //           }
    //       };

    //       try {
    //           const response = fetch(url, options);
    //           const result = response.text();
    //           console.log(result);
    //       } catch (error) {
    //           console.error(error);
    //       }
    // }, [])

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
  <div className='container mx-auto trending-news'>
      <h3>Trending News</h3>
    <div className='row'>
      <div class="col-md-8 carousel">
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
                <div className='justify-center items-center slider-item -z-1 space-x-2' key={i}>
                  <img src={item.image} alt="" className='min-w-4 min-h-10 -z-5' />
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
      <div className='col-md-4 right'>
        <div className='img-thumbnail w-full'>
          <h5>Follow Us</h5>
          <div className='top'>
              <div className='row'>
                <div className='col-md-6 bg-blue-800 text-white px-3 py-3 facebook'>
                    dhjfvud
                </div>
                <div className='col-md-6 bg-red-500 text-white px-3 py-3 instagram'>
                    sfdsufi
                </div>
                <div className='col-md-6 bg-blue-400 text-white px-3 py-3 twitter'>
                    dhvsd
                </div>
                <div className='col-md-6 bg-blue-900 text-white px-3 py-3 linkedin'>
                    fiudgfiud
                </div>
              </div>
          </div>

          <div className='bottom'>
          <h5>Most Viewed</h5>
          <div className='border-t-2'></div>
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
  </div>
)
}

export default Trending
