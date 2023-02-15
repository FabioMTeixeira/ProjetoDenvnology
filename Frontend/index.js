import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App/>, document.getElementById("root"));

const form = document.getElementById("add-link-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;
    console.log("Title:", title);
    console.log("Link:", link);
});

