import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BlockChain() {
  const [blockChain, setBlockChain] = useState()
  
  useEffect(() => {
    const getNewsApi = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=blockchain&language=en&apiKey=${process.env.REACT_APP_NEWS_API}`)
      .then((response) => {
          // console.log(response);
          setBlockChain(response ? response.data : {})
      })
      .catch(err => {
        console.log(err);
        
      })
    }

    getNewsApi()
  }, [])

//   console.log(blockChain);

  return (
    <div className='col-md-4 category'>
      <div className='border-b-2 border-black text-2xl mb-3 '>Blockchain</div>
          {
            blockChain
            && 
            <Link to={`/newspage/blockchain;20`} className='text-decoration-none'>
              <div className='' key={blockChain.articles[20].url}>
                <img src={blockChain.articles[20].urlToImage} alt={blockChain.articles.title} className='card-img-top'/>
                <div className=''>
                  <h5 className='text-lg font-bold text-gray-600'>{blockChain.articles[20].title}</h5>
                  <div className='text-gray-500 desc'>{blockChain.articles[20].description}</div>
                  <label className='flex justify-center items-center text-gray-500 text-sm'><FaRegClock className='mr-1' /> {blockChain.articles[20].publishedAt}</label>
                </div>
              </div>
            </Link>
          }
          <div className='border-t-2 border-dotted border-gray-400 mb-3 mt-2'></div>
          <div className='category-body'>
            {
              blockChain && blockChain.articles.slice(0,30).map((article,i) => (
              article.title == "[Removed]"
              ?
              ""
              :
                <Link to={`/newspage/blockchain;${i}`} className='text-decoration-none '>
                  <div className='' key={article.url}>
                    {/* <img src={article.urlToImage} alt={article.title} className='card-img-top'/> */}
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

export default BlockChain
