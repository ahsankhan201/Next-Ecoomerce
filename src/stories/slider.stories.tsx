import TopSallersSlides from "../components/topSallers/TopSallersSlides";
import { responsive } from "../constants/carousalResponsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@mui/material";

export default {
  title: "TopSaller",
  component: TopSallersSlides,
};

const topSallerData = [
  {
    id: "1",
    title: "Men's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHPI-Z7KOgBBmcHEwnk7s8LnU5R6o4nNAUA&usqp=CAU",
    price: "$100",
    oldPrice: "$150",
    discount: "33%",
    rating: "4.5",
    ratingCount: "100",
    description: "Lorem ipsum dolor sit amet,",
    color: "Black/White",
    size: "10",
    quantity: "1",
    brand: "Nike",
    category: "Mens",
  },
  {
    id: "2",
    title: "Women's Sneakers",
    image:
      "https://media.istockphoto.com/id/1034457896/photo/stylish-woman-wearing-black-summer-shoes-with-straw-sole-outdoors-comfortable-sandals-beauty.jpg?s=612x612&w=0&k=20&c=3sTprSCmzloWCysMqRjOITEdfUmhuM-TKre30nL2-TU=",
    price: "$80",
    oldPrice: "$100",
    discount: "20%",
    rating: "4.8",
    ratingCount: "50",
    description: "Lorem ipsum dolor sit amet,",
    color: "Pink/White",
    size: "7",
    quantity: "1",
    brand: "Adidas",
    category: "Womens",
  },
  {
    id: "3",
    title: "Kids' Sandals",
    image:
      "https://ae01.alicdn.com/kf/S7157982097654359ac7874ba3c3f02acw/2022-Summer-Kids-Sandals-Boys-Fashion-Sandalias-Childrens-Shoes-Non-slip-Soft-Bottom-Leather-Boy-Sandals.jpg",
    price: "$25",
    oldPrice: "$30",
    discount: "17%",
    rating: "4.2",
    ratingCount: "20",
    description: "Lorem ipsum dolor sit amet, ",
    color: "Blue",
    size: "12",
    quantity: "1",
    brand: "Crocs",
    category: "Kids",
  },
  {
    id: "4",
    title: "Men's Dress Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FwuJdCl3puyI94LeW1jmUgTI9NY9YYlarbNfGBXduOuoalzoEZhaL9Rfs7wzCS5p21A&usqp=CAU",
    price: "$120",
    oldPrice: "$150",
    discount: "20%",
    rating: "4.7",
    ratingCount: "80",
    description: "Lorem ipsum dolor sit amet,",
    color: "Brown",
    size: "9",
    quantity: "1",
    brand: "Clarks",
    category: "Mens",
  },
  {
    id: "5",
    title: "Women's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGSUpyeajgZZ5nPBsHcFIYYB-l6dZkNHngQ&usqp=CAU",
    price: "$90",
    oldPrice: "$110",
    discount: "18%",
    rating: "4.6",
    ratingCount: "60",
    description: "Lorem ipsum dolor sit amet,",
    color: "Gray/Pink",
    size: "8",
    quantity: "1",
    brand: "New Balance",
    category: "Womens",
  },
  {
    id: "6",
    title: "Men's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHPI-Z7KOgBBmcHEwnk7s8LnU5R6o4nNAUA&usqp=CAU",
    price: "$100",
    oldPrice: "$150",
    discount: "33%",
    rating: "4.5",
    ratingCount: "100",
    description: "Lorem ipsum dolor sit amet,",
    color: "Black/White",
    size: "10",
    quantity: "1",
    brand: "Nike",
    category: "Mens",
  },
  {
    id: "7",
    title: "Women's Sneakers",
    image:
      "https://media.istockphoto.com/id/1034457896/photo/stylish-woman-wearing-black-summer-shoes-with-straw-sole-outdoors-comfortable-sandals-beauty.jpg?s=612x612&w=0&k=20&c=3sTprSCmzloWCysMqRjOITEdfUmhuM-TKre30nL2-TU=",
    price: "$80",
    oldPrice: "$100",
    discount: "20%",
    rating: "4.8",
    ratingCount: "50",
    description: "Lorem ipsum dolor sit amet,",
    color: "Pink/White",
    size: "7",
    quantity: "1",
    brand: "Adidas",
    category: "Womens",
  },
  {
    id: "8",
    title: "Kids' Sandals",
    image:
      "https://ae01.alicdn.com/kf/S7157982097654359ac7874ba3c3f02acw/2022-Summer-Kids-Sandals-Boys-Fashion-Sandalias-Childrens-Shoes-Non-slip-Soft-Bottom-Leather-Boy-Sandals.jpg",
    price: "$25",
    oldPrice: "$30",
    discount: "17%",
    rating: "4.2",
    ratingCount: "20",
    description: "Lorem ipsum dolor sit amet, ",
    color: "Blue",
    size: "12",
    quantity: "1",
    brand: "Crocs",
    category: "Kids",
  },
  {
    id: "9",
    title: "Men's Dress Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FwuJdCl3puyI94LeW1jmUgTI9NY9YYlarbNfGBXduOuoalzoEZhaL9Rfs7wzCS5p21A&usqp=CAU",
    price: "$120",
    oldPrice: "$150",
    discount: "20%",
    rating: "4.7",
    ratingCount: "80",
    description: "Lorem ipsum dolor sit amet,",
    color: "Brown",
    size: "9",
    quantity: "1",
    brand: "Clarks",
    category: "Mens",
  },
  {
    id: "10",
    title: "Women's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGSUpyeajgZZ5nPBsHcFIYYB-l6dZkNHngQ&usqp=CAU",
    price: "$90",
    oldPrice: "$110",
    discount: "18%",
    rating: "4.6",
    ratingCount: "60",
    description: "Lorem ipsum dolor sit amet,",
    color: "Gray/Pink",
    size: "8",
    quantity: "1",
    brand: "New Balance",
    category: "Womens",
  },
];

export const withDataSlides = () => (
  <TopSallersSlides topSallerData={topSallerData} activeTab="saller1" />
);

export const withoutDataSlides = () => (
  <TopSallersSlides topSallerData={[]} activeTab="saller1" />
);

export const withLoaderSlides = () => (
  <TopSallersSlides topSallerData={[]} activeTab="saller1" loading={true} />
);
