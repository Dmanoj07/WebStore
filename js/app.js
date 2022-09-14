/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Manoj Dhami
 *      Student ID: 121613202
 *      Date:       7/18/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

//table data

categories.forEach((category) => {
  const navBtn = document.createElement("button");
  navBtn.innerText = category.name;
  navBtn.setAttribute("style", "margin: 0 .25rem; width:100px; border-radius:4px;");
  navBtn.addEventListener("click", () => {
    createProductCard(category);
    console.log(category);
  });
  document.getElementById("menu").appendChild(navBtn);
});

function createProductCard(selectedCategory_) {
  document.querySelector("#selected-category").innerHTML = selectedCategory_.name + "'s Wear";
  const newCard = document.createElement("div");
  products
    .filter((product) => {
      return product.category.indexOf(selectedCategory_.id) >= 0 && !product.discontinued;
    })
    .forEach((product) => {
      const cardContent = document.createElement("article");
      const childDiv = document.createElement("div");
      const img_Div = document.createElement("div");
      img_Div.setAttribute("class","card_Img");
      childDiv.setAttribute("class", "child");
      cardContent.setAttribute("class", "card");
      const img_ = document.createElement("img");
      img_.src = product.image;
      img_Div.appendChild(img_);
      cardContent.appendChild(img_Div);
      const itemName_ = document.createElement("h3");
      itemName_.innerText = product.name;
      childDiv.appendChild(itemName_);
      const card_description = document.createElement("p");
      card_description.innerText = product.description;
      const cardData_price = document.createElement("footer");
      cardData_price.innerText = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      }).format(product.price);
      cardData_price.setAttribute("id","footer");

      childDiv.appendChild(card_description);
      childDiv.appendChild(cardData_price);
      cardContent.appendChild(childDiv);
      newCard.appendChild(cardContent);
    });
    const cards = document.getElementsByClassName("cards");
    console.log(cards);
    cards[0].replaceWith(newCard);
    newCard.setAttribute("class", "cards");
}
window.addEventListener("load", () => {
  console.log("loaded successfully");
  createProductCard(categories[0]);
});
