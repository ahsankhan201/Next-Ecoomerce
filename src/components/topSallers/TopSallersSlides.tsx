import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@mui/material";
import { responsive } from "../../constants/carousalResponsive";
import Link from "next/link";

const TopSallersSlides = ({
  topSallerData,
  activeTab,
  loading,
  ProductData,
}: any) => {
  console.log("sssss", ProductData);
  const [loading1, setLoading] = useState(loading);

  return (
    <>
      {ProductData?.length == 0 && loading1 == false ? (
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
          {ProductData?.map((slides: any, index: number) => {
            console.log("slides", slides);
            return (
              <Link href={`/${slides.id}`}>
                <div key={index}>
                  <img
                    src={slides?.images[0]}
                    alt="image"
                    className={styles.TabsliderImg}
                  />
                  <div className="mb-12">
                    <p className="text-center">{slides?.brand}</p>
                    {/* <p className="text-center">{slides?.title}</p> */}
                    <p className="text-center">Rs.{slides?.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default TopSallersSlides;
