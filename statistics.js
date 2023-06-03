"use strict";



let creatingId = function creatingId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let startingNumber = creatingId(2000, 9999);

let listArray = [];

// creating constructor to generate a food object
function FoodList(foodName, foodType, foodPrice) {
  this.foodId = 0;
  this.foodName = foodName;
  this.foodType = foodType;
  this.foodPrice = foodPrice;
  this.foodNumber = function () {
    this.foodId = startingNumber;
    startingNumber++;
  };

  listArray.push(this);
}


// create a render prototype method to render each food name with their information from the form on the home page as a table
// Add static part of table
let result = document.getElementById("statistics");
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


  // create an instance each time you submit the form
  let inputResults = new FoodList(foodName, foodType, foodPrice);

  inputResults.foodNumber();
  inputResults.finalResults();

  storeInLocalStorage()

  // to avoid empty value
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";


}
readFromLocalStorage()


// // add an event listener to get the data from the form instead of having hard-coded data. 
// let saveResults = document.getElementById("foodForm");
// saveResults.addEventListener("submit", handler);



// console.log(listArray)


function storeInLocalStorage() {
  let stringArray = JSON.stringify(listArray);
  window.localStorage.setItem("Food", stringArray);
}

function readFromLocalStorage() {
  let jsonArray = window.localStorage.getItem("Food");

  if (jsonArray) {
    let objArray = JSON.parse(jsonArray);

    for (let i = 0; i < objArray.length; i++) {
      let inputResults = new FoodList(
        objArray[i].foodName,
        objArray[i].foodType,
        objArray[i].foodPrice
      );
      inputResults.foodId = objArray[i].foodId;
      inputResults.finalResults();
    }
  } else {
    console.log("List is empty");
  }
}





// the end _-_