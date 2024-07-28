import { Link } from 'react-router-dom';
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
    <div className='h-auto w-screen flex flex-col justify-center gap-8 items-center bg-violet-200'>
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
      <div className='bg-violet-500 h-4/5 w-full flex flex-col items-center justify-center rounded-lg tablet:w-3/4 sm:bg-green'>
        <Link to="/login" className='flex justify-center items-center w-full'>
          <img src='../public/images/undraw.png' alt='logo' className='w-1/2 h-auto rounded-full m-10 sm:w-1/5' />
        </Link>
        <h1 className='flex flex-col justify-center items-center rounded-lg m-5 font-get text-3xl'>
          Craft your personalized resume effortlessly on this platform
        </h1>
        <Link to="/login" className='m-10 bg-violet-300 h-auto p-5 rounded-lg w-1/2 flex flex-col items-center font-get text-2xl sm:w-3/4'>
          Get Start
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
