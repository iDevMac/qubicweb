import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Footer from '../Layout/Footer'
import { BsShare } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function NewsPage() {

  const {id} = useParams()
  const [techNews, setTechNews] = useState()
  
  useEffect(() => {
    let query = id.split(';')[0]
    if (query == "cybersecurity") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=cybersecurity&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
          console.log(response);
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }

    if (query == "devops") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=DevOps&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
          // console.log(response);
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }

    if (query == "blockchain") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=blockchain&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
          // console.log(response);
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }

    if (query == "ai") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=artificial+intelligence&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
          // console.log(response);
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }


    if (query == "software") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=software+development&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }

    if (query == "software") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=software+development&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }

    
    if (query == "dataanalysis") {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=data+analysis&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
            setTechNews(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
      }
  
      getNewsApi()
    }
  }, [])


  const onShowMediaIcons = () => {
    const showMediaIcons = document.querySelector('.social-media')
      if (showMediaIcons.style.display == "none") {
        showMediaIcons.style.display = "block";
      }else{
        showMediaIcons.style.display = "none";
      }
  }

  //event listener for the social media icons
    const newsPageImage = document.querySelector(".newspage-image");
    newsPageImage?.addEventListener('mouseover', () => {
      const share = document.querySelector('.share')
      share.style.display == "none" ? share.style.display = "block" :share.style.display = "none";
  })
  
  //Facebook sharer
  const onShareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${techNews && techNews.articles[id.split(";")[1]].url}`, "_blank")
  }

  //Twitter sharer
  const onShareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${techNews && techNews.articles[id.split(";")[1]].url}&text=${techNews && techNews.articles[id.split(";")[1]].title}`, "_blank")
  }

  //Instagram sharer
  const onShareOnInstagram = () => {
    window.open(`https://www.instagram.com/share?url=${techNews && techNews.articles[id.split(";")[1]].url}`, "_blank")
  }

  return (
    <>
      <div className='container mx-auto newspage'>
      <h1>{techNews && techNews.articles[id.split(";")[1]].title}</h1>

      <div className='mt-4 text-gray-500'>Published on: {techNews && techNews.articles[id.split(";")[1]].publishedAt}</div>
      
      <div className='border-t-2 border-dashed mb-3'></div>
      <div className='flex'>Author: <div className='text-blue-500 ml-1'> {techNews && techNews.articles[id.split(";")[1]].author}</div></div>
      <div className='border-b-2 border-black mt-1'></div>

      <div className='row mt-4'>
        <div className='col-md-8 left'>
          <div className='content'>
            <div className='image-item'>
              <img 
                className='img-thumbnail h-[300px] newspage-image'
                src={techNews && techNews.articles[id.split(";")[1]].urlToImage} 
                alt={techNews && techNews.articles[id.split(";")[1]].title} 
              />
              <div className='share text-white'>
                <div className='flex justify-between items-center'>
                  <div>
                      hsfidfiviudif
                  </div>

                  <div className='share-icon' onClick={onShowMediaIcons}>
                    <BsShare className='text-2xl'/>
                  </div>
                </div>
              </div>

              <div className='social-media space-y-3'>
                <FaInstagram onClick={onShareOnInstagram}/>
                <FaTwitter onClick={onShareOnTwitter}/>
                <FaFacebook onClick={onShareOnFacebook}/>
              </div>
            </div>
            <div className='space-y-2 mt-3'>
              <h4 className='italic'>{techNews && techNews.articles[id.split(";")[1]].title}</h4>
              <p>{techNews && techNews.articles[id.split(";")[1]].content}</p>
              <p>{techNews && techNews.articles[id.split(";")[1]].description}</p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default NewsPage
