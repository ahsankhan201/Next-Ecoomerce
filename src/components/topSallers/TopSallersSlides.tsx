import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress, LinearProgress } from "@mui/material";
import { responsive } from "../../constants/carousalResponsive";

const TopSallersSlides = ({ topSallerData, activeTab, loading }: any) => {
  const [loading1, setLoading] = useState(loading);

  return (
    <>
      {topSallerData.length == 0 && loading1 == false ? (
        <div className={styles.loader}>No Data Found</div>
      ) : null}
      {loading1 == true ? (
        <CircularProgress />
      ) : (
        <Carousel
          focusOnSelect={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {topSallerData.map((slides: any, index: number) => {
            return (
              <div key={index}>
                <img
                  src={slides.image}
                  alt="image"
                  className={styles.TabsliderImg}
                />
                <div className="mb-12">
                  <p className="text-white text-center">{slides.brand}</p>
                  <p className="text-white text-center">{slides.description}</p>
                  <p className="text-white text-center">Rs.{slides.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default TopSallersSlides;

{
  /* {topSallerData.length == 0 && loading == false ? (
        <div className={styles.loader}>No Data Found</div>
      ) : null}

      {loading == true ? (
        <div className={styles.loader}>Loading Please Wait</div>
      ) : (
        <divP
          ref={sliderRef1}
          className="keen-slider"
          style={{ position: "relative", margin: "10px 0px" }}
        >
          {topSallerData.map((slides: any, index: number) => {
            return (
              <div key={index} className="keen-slider__slide number-slide1">
                <img
                  src={slides.image}
                  alt="image"
                  className={styles.TabsliderImg}
                />
                <div>
                  <p>{slides.brand}</p>
                  <p>{slides.description}</p>
                  <p>Rs.{slides.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

      <div className={styles.topSallerControler}>
        <button
          onClick={SallerhandlePrevClick}
          className={styles.sliderControlsPrevious1}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={SallerhandleNextClick}
          className={styles.sliderControlsNext1}
        >
          <FaArrowRight />
        </button>
      </div> */
  // const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({
  //   initial: 0,
  //   slideChanged(slider: any) {
  //     // setCurrentSlide(slider.details().relativeSlide);
  //   },
  //   created() {
  //     setLoaded1(true);
  //   },
  //   mode: "free-snap",
  //   loop: true,
  //   slides: {
  //     origin: "center",
  //     perView: 4,
  //     spacing: 5,
  //   },
  // });
  // import { useKeenSlider } from "keen-slider/react";
  // const SallerhandlePrevClick = () => {
  //   if (instanceRef1.current) {
  //     instanceRef1.current.prev();
  //   }
  // };
  // const SallerhandleNextClick = () => {
  //   if (instanceRef1.current) {
  //     instanceRef1.current.next();
  //   }
  // };
}
