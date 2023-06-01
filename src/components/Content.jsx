import React from "react";
import "./CSS/Content.css";
import ItemsCard from "./ItemsCard";
import RecomendeItemCard from "./RecomendedItemCard";
import Carousel from "./Carousel";
import ViewAllBtn from "./ViewAllBtn";
import { departmentsLinks, recomendedLaptops } from "./ItemsData";

const Content = () => {
  return (
    <>
      <div className="heading">
        <img
          src="https://tochat.be/click-to-chat/wp-content/uploads/2020/09/sale-logo-download.png"
          alt="logo"
        />
        <h2>click & collect available today </h2>
      </div>
      <div className="line"></div> <br />
      <Carousel />
      <div className="infoBtn">
        <h1 className="subHeading">Departments </h1>
        <div className="btn">
          <ViewAllBtn
            name={"View All"}
            url={"https://www.pbtech.co.nz/site-directory"}
          />
        </div>
      </div>
      <div className="line2"></div>
      <div className="container">
        {departmentsLinks.map((link, id) => (
          <ItemsCard
            key={id}
            imgLink={link.imgLink}
            title={link.title}
            urlLinks={link.urlLinks}
            lists={link.list}
            allCatLink={link.allCatLink}
          />
        ))}
      </div>
      <br />
      <div className="infoBtn">
        <h1 className="subHeading">Recommended Laptops </h1>
        <div className="btn">
          <ViewAllBtn
            name={"View All Laptops"}
            url={"https://www.pbtech.co.nz/category/computers/laptops"}
          />
        </div>
      </div>
      <div className="line2"></div>
      <div className="container">
        {recomendedLaptops.map((link, id) => (
          <RecomendeItemCard
            key={id}
            imgLink={link.imgUrl}
            title={link.title}
            urlLinks={link.price}
            lists={link.moreInfo}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
