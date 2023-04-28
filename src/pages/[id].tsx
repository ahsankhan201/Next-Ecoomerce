import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";
import { DetailPageTabs, topSallerData } from "../constants/staticData";
import { useEffect, useMemo, useState } from "react";
import Tabs from "../components/home/Tabs";
import RecentlyViewed from "@/components/recentlyviewed/RecentlyViewed";
import ProductReviews from "@/components/reviews/ProductReviews";
import ReactImageMagnify from "react-image-magnify";
const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = topSallerData.filter((item) => item.id === id)[0];

  useMemo(() => {
    id ? setProduct(filteredProducts) : setProduct(null);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-2xl font-bold text-gray-500 ">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-3 mb-3">
      {/* <h2 className="text-lg font-serif text-center">{product.name}</h2> */}
      <div className="flex row content-between border-2" >
        <div className="border-2 w-1/2">
          <img src={product.image} alt="image" width={400} height={500} />
          <div className="flex row mt-4 mb-4">
            {product.sampleImages.map((images: string, inx: number) => {
              return (
                <img
                  className="mr-1 ml-1 border-2 border-black
                rounded
                "
                  src={images}
                  alt="image"
                  width={100}
                  height={100}
                />
              );
            })}
          </div>
          <Tabs DetailPageTabs={DetailPageTabs} />
        </div>
        <div className="ml-3 w-2/5 mr-3">
          <p className="text-lg font-serif text-center mt-2 mb-12">
            {product.title}
          </p>
          <div className="mt-3 mb-3 ">
            <div className="flex row justify-around mt-2 mb-2">
              <p className="text-sm font-serif w-64 text-left">Brand</p>
              <p className="text-sm font-serif">{product.brand}</p>
            </div>
            <div className="flex row justify-around mt-2 mb-2">
              <p className="text-sm font-serif w-64 text-left">Product Code</p>
              <p className="text-sm font-serif text-center w-1/2">
                M-AT-BOX-0001:NVY/GRY:40/6
              </p>
            </div>
          </div>
          <p className="text-2xl font-serif">Rs. {product.price}</p>
          <div>
            <ul className="flex row">
              {product.size.map((size: string, idx: number) => (
                <li
                  key={idx}
                  className="p-2 m-1 border-2 border-black cursor-pointer hover:bg-gray-100 active:bg-gray-300"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700 font-medium">Quantity</p>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition duration-150 ease-in-out"
            >
              <FaPlus />
            </button>
            <input
              type="number"
              value={quantity}
              className="w-12 text-center text-gray-700"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              onClick={() => {
                setQuantity(Math.max(1, quantity - 1));
              }}
              className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition duration-150 ease-in-out"
            >
              <FaMinus />
            </button>
          </div>
          <button className="mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
      <RecentlyViewed loading1={false} topSallerData={topSallerData} />
      <ProductReviews />
    </div>
  );
};

export default ProductDetail;








  {/* <ReactImageMagnify
            style={{
              cursor: "crosshair",
              width: "277px",
              height: "216px",
              position: "relative",
            }}
            {...{
              smallImage: {
                alt: "Wristwatch by Versace",
                isFluidWidth: true,
                src: product.image,
                width: 300,
                height: 200,
                srcSet: product.image,
              },
              largeImage: {
                src: product.image,
                width: 300,
                height: 200,
                srcSet: product.image,
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
            }}
          /> */}