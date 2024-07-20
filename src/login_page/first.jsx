import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import React, { useState } from 'react';
import '../App.css';
const FirstPage = () => {
  // const [template, setTemplate] = useState(0);

  const settings = {
    dots: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const slides = [
    { img: "https://i2.wp.com/www.resumeshoppe.com/wp-content/uploads/2014/11/Megan-Robertson_Resume_A4-1.jpg" },
    { img: "https://resumekraft.com/wp-content/uploads/2023/12/Credit-Control-Officer-CV-Example.jpg" },
    { img: "https://www.docdroid.net/file/view/jaRyGGn/resumecritique.jpg" },
    { img: "https://imgs.search.brave.com/G3J3_J1MmTHrRFitOGKbpzcKLXlcgyV-VNqgQaBwwQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kLm5v/dm9yZXN1bWUuY29t/L2ltYWdlcy9kb2Mv/aXQtcmVzdW1lLXRl/bXBsYXRlLnBuZw" },
    { img: "https://cdn4.geckoandfly.com/wp-content/uploads/2019/05/microsoft-cv-resume-template-24.jpg" }
  ];

  return (
    <div className='h-sreen w-screen flex justify-center gap-8 items-center bg-violet-200'>
     <div className='bg-violet-500 h-60 w-1/3'>
     <h1>Create own resume</h1>
         <Link to="/login">Login</Link>e
     </div>
      <div className="w-1/2">
      <Slider {...settings} className='w-full'>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt={`img-${index}`}
            className="w-auto max-h-screen justify-center"
          />
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default FirstPage;
