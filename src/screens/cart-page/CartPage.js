/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://dummyjson.com/products`,
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log("category", data);

  return (
    <div className="flex flex-wrap">
      {data.map((item) => {
        return (
          <div key={item.id} className="border p-2 m-2  h-70 w-60">
            <img src={item?.images[0]} className=" w-full h-28" />

            <h1> {item.title}</h1>
            <h1>{item.brand}</h1>
            <h1> Description-{item.description}</h1>
            <button
              onClick={() => {
                navigate("/product-details", { item: item });
              }}
            >
              click here
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
