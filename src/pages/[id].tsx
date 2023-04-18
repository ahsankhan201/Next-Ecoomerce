import { FaPlus, FaMinus } from 'react-icons/fa';
import { useRouter } from "next/router";
import { DetailPageTabs, topSallerData } from "../constants/staticData";
import { useEffect, useState } from "react";
import Tabs from "../components/home/Tabs";
import RecentlyViewed from "@/components/recentlyviewed/RecentlyViewed";
import ProductReviews from "@/components/reviews/ProductReviews";
const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("id", id);
    if (id) {
      const filteredProduct: any = topSallerData.filter(
        (item) => item.id === id
      )[0];
      setProduct(filteredProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3 mb-3">
      <h2 className="text-lg font-serif text-center">{product.name}</h2>
      <div className="flex row">
        <div>
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
          <p className="text-lg font-serif text-center mt-2 mb-2">
            {product.title}
          </p>
          <div className="mt-3 mb-3 ">
            <div className="flex row justify-between mt-2 mb-2">
              <p className="text-sm font-serif">Brand</p>
              <p className="text-sm font-serif">{product.brand}</p>
            </div>
            <div className="flex row justify-between mt-2 mb-2">
              <p className="text-sm font-serif">Product Code</p>
              <p className="text-sm font-serif text-center">
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
              className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex    items-center justify-center hover:bg-gray-300 transition duration-150 ease-in-out"
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
