import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@mui/material";
import { responsive } from "../../constants/carousalResponsive";
const RecentlyViewed = ({ topSallerData, loading1 }: any) => {
  return (
    <>
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
                 style={{
                    width:'200px',
                    height:'200px',
                    objectFit:'contain',
                    margin:'0 auto',
                    display:'block',
                 }}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default RecentlyViewed;