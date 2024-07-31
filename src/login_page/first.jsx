// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

const FirstPage = () => {
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
    <div className='h-auto w-screen flex flex-col justify-center gap-8 items-center bg-orange-100 text-gray-800'>
      <div className='p-3 bg-orange-400 w-screen justify-center items-center '>RESUME</div>
      <div className="w-full tablet:w-4/5 sm:w-3/4">
        <Slider {...settings} className='w-full'>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`img-${index}`}
              className="w-full max-h-screen"
            />
          ))}
        </Slider>
      </div>
      <h2 className='text-2xl font-bold text-gray-800 mt-4'>Pick Template</h2>

      <img
        src='../public/images/temp1.png'
        alt='Pick Template'
        className='w-3/4 h-auto rounded-lg shadow-md '
      />

      <h2 className='text-2xl font-bold text-gray-800 mb-4'>Customize the Template</h2>


      <img
        src='../public/images/temp3.png'
        alt='Customize Template'
        className='w-3/4 h-auto rounded-lg shadow-md'
      />

      <h2 className='text-2xl font-bold text-gray-800 mb-4'>Hits and Download</h2>
      <img
        src='../public/images/temp2.png'
        alt='Hits and Download'
        className='w-full h-auto rounded-lg shadow-md'
      />

    </div>

  );
};

export default FirstPage;
