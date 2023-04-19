import dynamic from "next/dynamic";
import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import { SliderImages, SliderImagesBanner } from "../constants/staticData";
import Card from "../components/home/Card";
import Slider from "../utils/Slider";
import { SliderInterface } from "../interface/Interfaces";
import MegaDiscount from "../components/megaDiscount/MegaDiscount";
import AllBrands from "../components/home/brands/AllBrands";
const inter = Inter({ subsets: ["latin"] });
const TopSallers = dynamic(() => import("../components/topSallers/TopSallers"));


export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce Soloto Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.fisrtSlideContainer}>
          <Slider SliderImages={SliderImages} />
        </div>
        <div className={styles.cardcontainer}>
          {SliderImagesBanner.map((item: SliderInterface, index: number) => {
            return <Card key={index} item={item} />;
          })}
        </div>
        {/* <div className={styles.fisrtSlideContainer}> */}
          <TopSallers />
        {/* </div> */}
        <div>
          <MegaDiscount />
        </div>
          <AllBrands />
      </main>
    </>
  );
}
