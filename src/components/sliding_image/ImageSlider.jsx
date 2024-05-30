import React from 'react'
import 'react-slideshow-image/dist'
import { Fade, Zoom, Slide } from 'react-slideshow-image'


const slideImage =[
  
  {
    //url:<img src="./image/ImageSlider1.png" alt="" />
    url:"https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?t=st=1716745911~exp=1716749511~hmac=f95f8a5a38c4f7f5bcf0811164c64bd1bc871aca9c14a3c54633250e5ba182a5&w=740"
  },
  {
    url:<img src="./image/ImageSlider2.png" alt="" />
  },
  {
    url:<img src="./image/ImageSlider3.png" alt="" />
  },
  {
    url:<img src="./image/ImageSlider4.png" alt="" />
  },
  {
    url:<img src="./image/ImageSlider5.png" alt="" />
  },






]
const divStyle={
  display:'flex',
  alignItems:"center",
  justifyContent:"center",
  height:"400px",
  backgroundSize:'cover',
  //  width:"200px"
}

const ImageSlider = () => {
  return (
    <div className=' slide-container'>
      <Fade>
        {slideImage.map((image,index) => (
          <div key ={index}>
            <div style={{ ...divStyle, backgroundImage:`url(${image.url })`}}>
              <span></span>

            </div>

          </div>


        )




      )}
      </Fade>
      
    </div>
  )
}

export default ImageSlider
