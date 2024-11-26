import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Software() {
    const [software, setSoftware] = useState()
  
    useEffect(() => {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=software+development&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
            // console.log(response);
            setSoftware(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })

      }
  
      getNewsApi()
    }, [])
  
  
    return (
      <div className='col-md-4 category'>
        <div className='border-b-2 border-black text-2xl mb-3 header'>Software Development</div>
            {
                software 
                &&
                <Link to={`/newspage/software;9`} className='text-decoration-none'>
                    <div className='' key={software.articles[9].url}>
                        <img src={software.articles[9].urlToImage} alt={software.articles[9].title} className='card-img-top'/>
                            <div className=''>
                            <h5 className='text-lg font-bold text-gray-600'>{software.articles[9].title}</h5>
                            <div className='text-gray-500 desc'>{software.articles[9].description}</div>
                            <label className='flex justify-center items-center text-gray-500 text-sm '><FaRegClock className='mr-1' /> {software.articles[20].publishedAt}</label>
                        </div>
                    </div>
                </Link>
            }
            <div className='border-t-2 border-dotted border-gray-400 mb-3 mt-2'></div>
            <div className='category-body'>
              {
                software && software.articles.slice(0,30).map((article,i) => (
                article.title == "[Removed]"
                ?
                ""
                :
                  <Link to={`/newspage/software;${i}`} className='text-decoration-none'>
                    <div className='' key={article.url}>
                      <div className=''>
                        <h5 className='text-lg font-bold text-gray-600'>{article.title}</h5>
                        <div className='text-gray-500 desc'>{article.description}</div>
                        <label className='flex justify-center items-center text-gray-500 text-sm'><FaRegClock className='mr-1' /> {article.publishedAt}</label>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
      </div>
    )
}

export default Software
