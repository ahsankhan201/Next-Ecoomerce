import { topSallerData } from "@/constants/staticData";
import React, { useMemo } from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
const Serach = ({ search }: any) => {
  const router = useRouter();
  const searchResult = useMemo(() => {
    return topSallerData.filter((item: any) => {
      return item.category.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  function handleClick(slides: any) {
    window.location.href = `/${slides.id}`;
  }

  return (
    <div>
      <h2>YOUR SEARCH FOR "{search}*" REVEALED THE FOLLOWING:</h2>
      <div className={styles.searchContainer}>
        {searchResult.map((slides: any, index: number) => {
          return (
            <Link href={`${slides.id}`}>
              <div
                key={index}
                className={styles.searchContainer1}
                onClick={() => handleClick(slides)}
              >
                <img
                  src={slides.image}
                  alt="image"
                  className={styles.TabsliderImg}
                  onMouseEnter={(e) => {
                    if (slides.hoverImage) {
                      e.currentTarget.src = slides.hoverImage;
                      e.currentTarget.classList.add(styles.TabsliderImg);
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.src = slides.image;
                  }}
                />
                <div className={styles.detail}>
                  <p>{slides.brand}</p>
                  <p>{slides.description}</p>
                  <p>Rs.{slides.price}</p>
                </div>
                <div className={styles.Sizes}>
                  <ul className={styles.list}>
                    {slides.size.map((size: string, idx: number) => (
                      <li key={idx}>{size}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Serach;
