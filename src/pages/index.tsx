import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SliderImages, SliderImagesBanner } from "@/constants/staticData";
import Card from "@/components/home/Card";
import Slider from "@/utils/Slider";
import { SliderInterface } from "@/interface/Interfaces";
import Tabs from "@/components/home/Tabs";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Slider SliderImages={SliderImages} />
      </main>

      <div className={styles.cardcontainer}>
        {SliderImagesBanner.map((item: SliderInterface, index: number) => {
          return <Card imageUrl={item.image} title={item.title} />;
        })}
      </div>
      <div>
        <Tabs />
      </div>
    </>
  );
}