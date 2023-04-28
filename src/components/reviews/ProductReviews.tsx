import Rating from "@/utils/Stars";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductReviews = () => {
  return (
    <>
      <div className="flex row items-center content-center justify-between mt-4 mb-4">
        <div className="flex row items-center content-center">
          <Rating rating={3.5} /> <div>1 Review </div>
          <div>^</div>
        </div>
        <div>
          <button>Write a Review</button>
        </div>
      </div>
      <div className="flex flex row">
        <Card sx={{ minWidth: 275, width: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Khalid K.
            </Typography>
            <Typography variant="h5" component="div">
              <Rating rating={3.5} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              The order came on time and the sandal ordered fitted very well.
              The product was also reasonably good in quality
            </Typography>
            <Typography variant="body2">
              Item type:
              <br />
            </Typography>
            <Typography variant="body2">
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
