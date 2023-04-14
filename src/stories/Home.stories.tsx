import React,{FunctionComponent } from "react";
import Home from "../pages/index";
import { action } from "@storybook/addon-actions";
import styles from "./../../styles/Home.module.scss";
import { SpotlightData, brandsImages } from "../constants/staticData";
import Card from "../components/home/Card";
import Slider from "@/utils/Slider";
import TopSallers from "../components/topSallers/TopSallers";
import MegaDiscount from "../components/megaDiscount/MegaDiscount";
import AllBrands from "../components/home/brands/AllBrands";
export default {
    title: "Home",
    component: Home,
  };
  
  const Template = (args: any) => <Home {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};
  

