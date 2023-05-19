import FilterationSideBar from "@/components/filterationSidebar/filtersidebar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sideDataClone } from "../../constants/staticData";
import styles from "../../styles/Home.module.scss";

import Link from "next/link";
const initialFilters: any = {
  brands: [],
  gender: [],
  sizes: [],
};

const SpecificCollections = () => {
  const router = useRouter();
  const { query } = router.query;
  const [products, setProducts] = useState<any>(sideDataClone);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setProducts([]);
    console.log(query);
    sideDataClone.forEach((item: any) => {
      console.log(item);
      if (
        filters.brands.every(
          (brand: string) => brand === "" || brand === item.vendor
        ) &&
        filters.sizes.every(
          (size: string) => size === "" || item.options[0].values.includes(size)
        )
      ) {
        setProducts((prevProducts: any) => [...prevProducts, item]);
      }
    });
  }, [filters]);

  return (
    <>
      <div className="flex row">
        <div className="w-1/4  ml-5">
          <FilterationSideBar
            sideDataClone={sideDataClone}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
        <div
          style={{
            marginLeft: "30px",
            color: "white",
          }}
        >
          <p className="uppercase text-lg font-bold">{query}</p>
          <div className="flex row flex-wrap">
            {products.map((slides: any, index: number) => {
              return (
                <Link href={`/${slides.id}`}>
                  <div key={index}>
                    <img
                      src={slides.images[0]}
                      alt="image"
                      className={styles.TabsliderImg}
                    />
                    <div className="mb-12">
                      <p className=" text-center">{slides.vendor}</p>
                      <p className=" text-center">{slides.title}</p>
                      <p className=" text-center">
                        Rs.{slides.price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificCollections;
