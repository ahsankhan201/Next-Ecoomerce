import Rating from "@/utils/Stars";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductReviews = () => {
  return (
    <>
      <div className="flex row items-center content-center justify-between mt-4 mb-4">
        <div className="flex row items-center content-center justify-center">
          <Rating rating={3.5} /> <div className="ml-3">1 Review </div>
          <div className="ml-3">^</div>
        </div>
        <div>
          <button
            className="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full
          transition
          duration-150
          ease-in-out

          "
          >
            Write a Review
          </button>
        </div>
      </div>
      <div className="flex flex row  mt-3 mb-3">
        <Card
          sx={{ minWidth: 275, width: 275 }}
          className="
        mr-4
          bg-gray-100
          border-2
          border-gray-300
          shadow-sm
          rounded-lg
        "
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, color: "white" }}
              color="white"
              gutterBottom
            >
              Khalid K.
            </Typography>
            <Typography variant="h5" component="div">
              <Rating rating={3.5} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="white" className="mt-1 mb-1">
              The order came on time and the sandal ordered fitted very well.
              The product was also reasonably good in quality
            </Typography>
            <Typography variant="body2" className="mt-1 mb-1">
              Item type:
              <br />
            </Typography>
            <Typography variant="body2" className="mt-1 mb-1">
              9/11
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductReviews;
