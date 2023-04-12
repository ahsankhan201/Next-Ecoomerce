import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Slider.module.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

const Slider = ({ SliderImages }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider: any) {
      // setCurrentSlide(slider.details().relativeSlide);
    },
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    loop: true, // Make the slider infinite
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
  });

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ position: "relative", margin: "10px 0px" }}
      >
        {SliderImages.map((image: string, index: number) => (
          <div key={index} className="keen-slider__slide number-slide1">
            <img src={image} alt="image" className={styles.sliderImg} />
          </div>
        ))}
      </div>
      {loaded && (
        <div className={styles.sliderControls}>
          <button
            onClick={handlePrevClick}
            className={styles.sliderControlsPrevious}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className={styles.sliderControlsNext}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Slider;
