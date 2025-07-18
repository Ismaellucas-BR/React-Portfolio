import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Data from "../../../data/projects.json";

function MostRecentWork() {
  const [slidePerView, setSlidePerView] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 1024 ? setSlidePerView(1) : setSlidePerView(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = (image) => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const mostRecentProject = Data[Data.length - 2];

  return (
    <section className="most-recent-work w-full max-w-full flex flex-col items-center gap-5 pt-10  bg-fixed bg-cover bg-no-repeat bg-center py-20 md:p-10 lg:pb-20 lg:max-w-[1500px]">
      <motion.h2
        className="font-inter text-4xl text-center font-bold text-white underline-half2 relative pb-3"
        initial={{ x: -200 }}
        animate={{ x: [-200, 15, 0] }}
        transition={{ duration: 2, ease: "easeInOut" }}>
        Trabalho mais <span className="text-light-green">recente</span>
      </motion.h2>

      <div className="w-[420px] md:w-[620px] lg:w-[1000px]">
        <Swiper
          className="w-full mt-8 min-h-[15rem] md:min-h-[65vh] lg:min-h-[85vh] xl:min-h-[75vh]"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={slidePerView}
          navigation
          pagination={{ clickable: true }}
          onSwiper={() => ""}
          onSlideChange={() => ""}>
          {mostRecentProject.imageToSlider.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center items-center p-5">
                <img
                  className="rounded-md hover:cursor-pointer"
                  src={image}
                  width={800}
                  height={800}
                  alt={mostRecentProject.alt || `Imagem ${index + 1}`}
                  onClick={() => openModal(image)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage}
              width={800}
              height={800}
              alt="Imagem Ampliada"
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default MostRecentWork;
