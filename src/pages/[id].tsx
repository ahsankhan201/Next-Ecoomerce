import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../constants/carousalResponsive";
import { Dialog } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";
import { DetailPageTabs, sideDataClone } from "../constants/staticData";
import { useMemo, useState } from "react";
import Tabs from "../components/home/Tabs";
import RecentlyViewed from "@/components/recentlyviewed/recentlyreviewed";
import ProductReviews from "@/components/reviews/productreviews";
import { addToCart } from "../slices/CartSlice";
import { useDispatch } from "react-redux";
import SizeChart from "@/utils/sizechart";
interface CartItem {
  name: string;
  quantity: number;
  sku: string;
  id: string;
  price: string;
}

const ProductDetail = () => {
  console.log("welocme")
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [sku, setSku] = useState("");
  const filteredProducts = sideDataClone.filter(
    (item: any) => item.id == id
  )[0];
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useMemo(() => {
    if (id && filteredProducts) {
      setProduct(filteredProducts);
      setSku(filteredProducts.variants[0].sku);
      setSelectedImage(filteredProducts.featured_image);
    } else {
      setProduct(null);
      setSku("");
      setSelectedImage("");
    }
  }, [id, filteredProducts]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-2xl font-bold text-gray-500 ">
        Loading...
      </div>
    );
  }

  const addToCardItem = (
    name: string,
    quantity: number,
    sku: string,
    id: string,
    price: string
  ) => {
    const cartItem: CartItem = {
      name,
      quantity,
      sku,
      id,
      price,
    };
    dispatch(addToCart(cartItem));
    console.log("cartItem", cartItem);
  };

  return (
    <div className="mt-3 mb-3">
      <div className="flex row content-between ">
        <div className="w-1/2">
          <img src={selectedImage} alt="image" width={400} height={500} />
          <div className="mt-4 mb-4">
            <Carousel
              focusOnSelect={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {product?.images.map((slides: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="w-32 h-32"
                    onClick={() => {
                      handleClick(slides);
                    }}
                  >
                    <img src={slides} alt="image" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <Tabs DetailPageTabs={DetailPageTabs} product={product} />
        </div>
        <div className="ml-3 w-2/5 mr-3">
          <p className="text-lg font-serif text-center mt-2 mb-12">
            {product.title}
          </p>
          <div className="mt-3 mb-3 ">
            <div className="flex row justify-around mt-2 mb-2">
              <p className="text-sm font-serif w-64 text-left">Brand</p>
              <p className="text-sm font-serif">{product.vendor}</p>
            </div>
            <div className="flex row justify-around mt-2 mb-2">
              <p className="text-sm font-serif w-64 text-left">Product Code</p>
              <p className="text-sm font-serif text-center w-3/2">{sku}</p>
            </div>
          </div>
          <p className="text-2xl font-serif mt-5 mb-3 ml-2">
            Rs.{" "}
            {product.compare_at_price == product.price ? (
              product.price
            ) : (
              <div>
                <span
                  className="text-red-500 line-through"
                  style={{ textDecoration: "strike" }}
                >
                  {product.compare_at_price}
                </span>
                &nbsp;&nbsp;
                <span>{product.price}</span>
              </div>
            )}
          </p>
          <p onClick={handleOpen}>Size Chart</p>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <SizeChart handleClose={handleClose} />
          </Dialog>
          <h3>Colors</h3>
          <div>
            <ul className="flex row">
              {product.variants.map((color: any, inx: number) => {
                return (
                  <>
                    {color?.featured_media && (
                      <li key={inx} className="mr-2">
                        <img
                          src={color?.featured_media?.preview_image?.src}
                          alt="image"
                          width={50}
                          height={50}
                          onClick={() =>
                            setSelectedImage(
                              color?.featured_media?.preview_image?.src
                            )
                          }
                        />
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
          <div className="mb-4 mt-4">
            <ul className="flex row">
              {product.variants.map((variant: any, idx: number) => (
                <button
                  disabled={!variant.available}
                  onClick={() => setSku(variant.sku)}
                  className={
                    !variant.available
                      ? "m-1 p-2 border-2 border-black w-12 rounded-2xl h-12 flex flex-row justify-center cursor-not-allowed"
                      : `m-1 p-2 border-2 border-black w-12 rounded-2xl h-12 flex flex-row justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-300 text-sm 
                `
                  }
                >
                  <li key={idx} className="text-sm">
                    {variant.title}
                  </li>
                </button>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-700 font-medium ml-3 text-lg">Quantity</p>
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
          <button
            className="mt-4 mb-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 ml-3 rounded-full transition duration-150 ease-in-out"
            onClick={() =>
              addToCardItem(
                product.title,
                quantity,
                sku,
                product.id,
                product.price
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <RecentlyViewed loading1={false} topSallerData={sideDataClone} />
      <ProductReviews />
    </div>
  );
};

export default ProductDetail;



