import React, { Component } from "react";

export default class Token extends Component {
  componentDidMount() {
    const baseUrl = "https://shop-for-men.herokuapp.com";
    const secret = "";

    fetch(`${baseUrl}/token/generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ secret }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("token", data.data.token);
      });
    /*
    fetch("https://shop-for-men.herokuapp.com/login", {
      method: "POST",
      headers: { "content-type": "application/json", authToken: "token" },
      body: JSON.stringify({ username: "Martha", password: "martha" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("token", data.data.token);
      });

      */
    // fetch("https://shop-for-men.herokuapp.com/login", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     username: "Martha",
    //     password: "martha",
    //   }),
    // }).then((response) => {
    //   response.json().then((result) => {
    //     console.warn("result", result);
    //     localStorage.setItem(
    //       "login",
    //       JSON.stringify({ login: true, token: result.token })
    //     );
    //   });
    // });
  }
  render() {
    return <div></div>;
  }
}
