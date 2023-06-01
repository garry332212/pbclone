import React from "react";
import ImageSlider from "./ImageSlider";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      link: "https://www.pbtech.co.nz/imgad/aib/CommonX_20230406222546.webp",

      saleLink:
        "https://www.pbtech.co.nz/promotions/samsung-galaxy-a-series-launch-bonus-2023?qr=banner_common_space_x_11300",
    },

    {
      id: 2,
      link: "https://www.pbtech.co.nz/imgad/aib/CX_20230406222354.webp",
      saleLink:
        "https://www.pbtech.co.nz/promotions/oneplus-11?qr=banner_common_space_x_11299",
    },
    {
      id: 3,
      link: "https://www.pbtech.co.nz/imgad/aib/CommonX_20230404152710.webp",
      saleLink:
        "https://www.pbtech.co.nz/promotions/next-level-deals-on-xbox-controllers?qr=banner_common_space_x_11291",
    },

  
    {
      id: 4,
      link: "https://www.pbtech.co.nz/imgad/aib/TourM2CX_20230328224046.webp",
      saleLink:
        "https://www.pbtech.co.nz/product/HSTJBL5692360/JBL-Tour-One-M2-Wireless-Over-Ear-Noise-Cancelling?qr=banner_common_space_x_11270",
    },
 
  ];

  return (
    <>
      <ImageSlider pictures={slides} saleLink={slides} />
    </>
  );
};

export default Carousel;
