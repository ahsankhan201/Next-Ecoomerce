import Card from "../components/home/cards/card";
import Slider from "../utils/slider";
import { SliderInterface } from "../interface/Interfaces";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product.services";
import dynamic from "next/dynamic";
import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import {
  SliderImages,
  SliderImagesBanner,
  MegaDiscountDela,
} from "../constants/staticData";
import MegaDiscount from "@/components/home/megaDiscount/MegaDiscount";

const inter = Inter({ subsets: ["latin"] });
const TopSallers = dynamic(() => import("../components/topSallers/topsaller"));
const Brands = dynamic(() => import("../components/home/brands/brands"));

export default function Home() {
  const [products, isproducts] = useState<any>([]);
  const getProducts = async () => {
    const data = await getAllProducts();
    console.log("all products", data)
    isproducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce Soloto Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-4  xl:mx-auto">
        <div className={styles.fisrtSlideContainer}>
          <Slider SliderImages={SliderImages} />
        </div>
        <div className={styles.cardcontainer}>
          {SliderImagesBanner.map((item: SliderInterface, index: number) => {
            return <Card key={index} item={item} />;
          })}
        </div>
        <TopSallers ProductData={products} />
        <MegaDiscount MegaDiscountDela={MegaDiscountDela} />
        <Brands />
      </main>
    </>
  );
}
