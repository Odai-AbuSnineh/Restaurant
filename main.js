"use strict";

let startingNumber = 1;

// Function to generate a random ID
let creatingId = function creatingId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Create constructor
function FoodList(foodName, foodType, foodPrice) {
  this.foodId = 0;
  this.foodName = foodName;
  this.foodType = foodType;
  this.foodPrice = foodPrice;
  this.foodNumber = function () {
    this.foodId = startingNumber;
    startingNumber = this.foodId + 1;
  };
}

// Add static part of table
let result = document.getElementById("containerResult");
let tableResult = document.createElement("table");
tableResult.style.backgroundColor = "#9573737e";
tableResult.style.color = "#321313";
result.appendChild(tableResult);

let tableCaption = document.createElement("caption");
tableCaption.textContent = " Food list results ";
tableResult.appendChild(tableCaption);

let trbold = document.createElement("tr");
tableResult.appendChild(trbold);

let thId = document.createElement("th");
thId.textContent = "ID";
trbold.appendChild(thId);

let thName = document.createElement("th");
thName.textContent = "Name";
trbold.appendChild(thName);

let thType = document.createElement("th");
thType.textContent = "Type";
trbold.appendChild(thType);

let thPrice = document.createElement("th");
thPrice.textContent = "Price";
trbold.appendChild(thPrice);

// Add dynamic part of table
FoodList.prototype.finalResults = function () {
  let trInput = document.createElement("tr");
  tableResult.appendChild(trInput);

  let tdIdInput = document.createElement("td");
  tdIdInput.textContent = this.foodId;
  trInput.appendChild(tdIdInput);

  let tdNameInput = document.createElement("td");
  tdNameInput.textContent = this.foodName;
  trInput.appendChild(tdNameInput);

  let tdTypeInput = document.createElement("td");
  tdTypeInput.textContent = this.foodType;
  trInput.appendChild(tdTypeInput);

  let tdPriceInput = document.createElement("td");
  tdPriceInput.textContent = ` ${this.foodPrice} $ `;
  trInput.appendChild(tdPriceInput);
};

function handler(event) {
  event.preventDefault();

  let foodName = document.getElementById("name").value;
  let foodType = document.getElementById("type").value;
  let foodPrice = document.getElementById("price").value;

  let inputResults = new FoodList(foodName, foodType, foodPrice);

  inputResults.foodNumber();
  inputResults.finalResults();

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";
}

let saveResults = document.getElementById("foodForm");
saveResults.addEventListener("submit", handler);
