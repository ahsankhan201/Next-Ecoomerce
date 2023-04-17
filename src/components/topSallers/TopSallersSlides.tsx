import "keen-slider/keen-slider.min.css";
import styles from "../../styles/Home.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopSallersSlides = ({ topSallerData, activeTab, loading }: any) => {
  console.log("topSallerData", activeTab);

  const [loaded1, setLoaded1] = useState(false);

  const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider: any) {
      // setCurrentSlide(slider.details().relativeSlide);
    },
    created() {
      setLoaded1(true);
    },
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 4,
      spacing: 5,
    },
  });

  const SallerhandlePrevClick = () => {
    if (instanceRef1.current) {
      instanceRef1.current.prev();
    }
  };

  const SallerhandleNextClick = () => {
    if (instanceRef1.current) {
      instanceRef1.current.next();
    }
  };

  return (
    <>
      {topSallerData.length == 0 && loading == false ? (
        <div className={styles.loader}>No Data Found</div>
      ) : null}

      {loading == true ? (
        <div className={styles.loader}>Loading Please Wait</div>
      ) : (
        <div
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
      </div>
    </>
  );
};

export default TopSallersSlides;
