import React, { useEffect, useState, useCallback, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Posts from '../components/Posts'
import axios from 'axios'

const Homepage = () => {
  const [ allPosts, setAllPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
      // responseType: 'stream'
    })
    .then((res) => {
      if(res.status === 200){
        setAllPosts(res.data);
        setLoading(false);
      }
    })
    .catch(err => {
      console.log("err", err);
      setLoading(false);
    });
  }

  const handleLogs = () => {
    console.log("i am rendering");
  }

  const handleLogsCallback = useCallback(() => handleLogs, []);
  const postsMemo = useMemo(() => allPosts, [])

  return (
    <div 
      style={{height: "100vh"}}
      className='flex flex-col justify-between'
    >
        <Header />
       {loading ? <p className='text-center my-4 text-xl font-semibold'>Loading....</p> : !loading &&  <div 
         
          style={{
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr 1fr",
            // gap:15,
            // padding: "20px 40px"
          }}
        >
          {allPosts.length > 0 ? <div className="grid grid-cols-3 gap-4 my-4 mx-6">
           {allPosts.map((posts, index) => {
            return (
              <Posts 
                post={posts}
                key={index}
                onClick={handleLogs}
              />
            )
          })}
          </div>  : <div className='flex justify-center my-6'><p className='text-xl font-semibold'>No posts found</p></div>}
        </div>}
{/* 
        <div
          className="flex h-[150px]"
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <div className='h-[100px] w-[100px] bg-[#7F0002]'>

          </div>
          <div className='h-[100px] w-[100px] bg-[#0028b4]'>

          </div>

          <div className='h-[100px] w-[100px] bg-[#008024]'>

          </div>
        </div> */}
        
        <Footer />
    </div>
  )
}

export default Homepage