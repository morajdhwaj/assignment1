import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([]);

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
    <div>
      {data.map((item) => {
        return <h1 key={item.id}>{item.category}</h1>;
      })}
    </div>
  );
};

export default Category;
