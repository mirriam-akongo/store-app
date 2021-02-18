import React, { useEffect } from "react";

export default function Crud() {
  useEffect(() => {
    fetch("https://shop-for-men.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => console.log(data));

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "content-type": "application/json; charset=UTF-8" },
    //   body: JSON.stringify({
    //     categoryId: 1,
    //     name: "Lether",
    //     description: "wowowowooww",
    //     category: "shoes",
    //     price: 3800,
    //     number_in_stock: 11,
    //   }),
    // };
    // fetch("https://shop-for-men.herokuapp.com/inventory", requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // fetch("https://shop-for-men.herokuapp.com/5ef254419af67d0004676a60", {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    /**Retrieving category */
    fetch("https://shop-for-men.herokuapp.com/inventory/category")
      .then((res) => res.json())
      .then((category) => console.log(category));

    fetch("https://shop-for-men.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        username: "Martha",
        password: "martha",
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((data) => {
        console.warn("token", data);
        sessionStorage.setItem("login", data);
      });

    /**Retrieving a given categoryId */
    fetch("https://shop-for-men.herokuapp.com/inventory/4")
      .then((res) => res.json())
      .then((category) => console.log(category));

    /**Retrieving items in a given categoryId */
    fetch("https://shop-for-men.herokuapp.com/inventory/4/item")
      .then((res) => res.json())
      .then((category) => console.log(category));

    /**Retrieving an item by ItemIds in a given categoryId */
    fetch("https://shop-for-men.herokuapp.com/inventory/1/item/Lether")
      .then((res) => res.json())
      .then((itemId) => console.log(itemId));

    // /**Deleting an item by ItemIds in a given categoryId */
    // fetch("https://shop-for-men.herokuapp.com/inventory/1/item/Lether", {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    /**Using the inventory id to update a given inventory */
    // fetch("https://shop-for-men.herokuapp.com/5ef24aaf9af67d0004676a56", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     categoryId: 1,
    //     name: "Autom boots",
    //     description: "Keep your feet dry all day",
    //     category: "shoes",
    //     price: 69000,
    //     number_in_stock: 29,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })

    // fetch("https://shop-for-men.herokuapp.com/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     firstname: "Martha",
    //     lastname: "Ageno Ageno",
    //     username: "Martha",
    //     email: "martha@gmail.com",
    //     password: "martha",
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);

  return <div></div>;
}
