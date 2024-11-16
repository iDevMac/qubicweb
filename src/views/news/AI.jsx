import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AI() {
    const [ai, setAi] = useState()
  
    useEffect(() => {
      const getNewsApi = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=artificial+intelligence+OR+AI&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
        .then((response) => {
            setAi(response ? response.data : {})
        })
        .catch(err => {
          console.log(err);
          
        })
        console.log(response);
        
      }
  
      getNewsApi()
    }, [])
  
  
    return (
      <div className='col-md-4 category'>
        <div className='border-b-2 border-black text-2xl mb-3 '>Artificial Intelligence</div>
            {
                ai
                &&
                <Link to={`/newspage/ai;4`} className='text-decoration-none'>
                    <div className='' key={ai.articles[4].url}>
                        <img src={ai.articles[4].urlToImage} alt={ai.articles[4].title} className='card-img-top'/>
                        <div className=''>
                            <h5 className='text-lg font-bold text-gray-600'>{ai.articles[4].title}</h5>
                            <div className='text-gray-500 desc'>{ai.articles[4].description}</div>
                            <label className='flex justify-center items-center text-gray-500 text-sm'><FaRegClock className='mr-1' /> {ai.articles[20].publishedAt}</label>
                        </div>
                    </div>
                </Link>
            }
            <div className='border-t-2 border-dotted border-gray-400 mb-3 mt-2'></div>
            <div className='category-body'>
                {
                  ai && ai.articles.slice(0,30).map((article,i) => (
                  article.title == "[Removed]"
                  ?
                  ""
                  :
                    <Link to={`/newspage/ai;${i}`} className='text-decoration-none '>
                      <div className='' key={article.url}>
                        {/* <img src={article.urlToImage} alt={article.title} className='card-img-top'/> */}
                        <div className=''>
                          <h5 className='text-lg font-bold text-gray-600'>{article.title}</h5>
                          <div className='text-gray-500 desc'>{article.description}</div>
                          <label className='flex justify-center items-center text-gray-500 text-sm mb-3 mt-2'><FaRegClock className='mr-1' /> {article.publishedAt}</label>
                        </div>
                      </div>
                    </Link>
                  ))
                }
            </div>
      </div>
    )
}

export default AI
