import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import "../Components/Carousel.css";
import HeroImage from "../images/hero_image.png";
import "../index.css";
//import { use } from "../../backend/Routes/CreateUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <section className="home">
          <div className="main_container">
            <img src={HeroImage} alt="Main images" className="hero_image" />
            <div className="content">
              {/* <div className="discount">
              <h3>50% OFF All Products</h3>
            </div> */}
              <div className="comment">
                <h1>Enjoy Your</h1>
                <h1>Delicious Food</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati blanditiis odio exercitationem dolorem asperiores
                dolores!
              </p>
              <div className="search_bar">
                <div className="d-flex" role="search">
                  <input
                    className="form-control me-2 search_box"
                    type="search"
                    placeholder="Search for dishes"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <button className="btn btn-success explore_btn" type="submit">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="cards conatiner" style={{ margin: "20px 60px" }}>
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((filterItem) => {
                        return (
                          <div
                            key={filterItem._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItem}
                              options={filterItem.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No Such Data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
