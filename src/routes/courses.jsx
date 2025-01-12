import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PictureComponent from '../components/PictureComponent'
import axios from 'axios'

const Courses = () => {
  const [ allImages, setAllImages ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    handleFetchImages();
  }, []);

  const handleFetchImages = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(response=> {
      if(response.status === 200) {
        console.log("res", response.data);
        setAllImages(response.data)
      }
    })
    .catch(error => {
      console.log("errr", error);
      
    })
  }
  return (
    <>  
      <Header />
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10}}>
        {allImages.length > 0 && allImages.map((images, index) => {
            return (
              <PictureComponent 
                key={index}
                imageDetails={images}
              />
            )
          })}
      </div>
        
      <Footer />
      <Outlet />
    </>
   
  )
}

export default Courses