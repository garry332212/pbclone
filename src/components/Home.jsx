import React from "react";
import Navbar from "./Navbar";
import "./CSS/Home.css";
import Content from "./Content";

const Home = () => {
  return (
    <>
      <Navbar
        home={"Brands"}
        aboutUs={"Promotions"}
        testo={"🔥Hot Deals"}
        contact={"New Arrivals"}
      />

      <div className="cover">
        <h1>This Is The Demo Version</h1>
        <img
          src="https://images.pexels.com/photos/1235542/pexels-photo-1235542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      <Content />

      <br />
      <br />
    </>
  );
};

export default Home;
