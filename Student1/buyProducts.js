// create an array to store data that we need to obtain
const productList = [
   {
      id: 101001,
      name: "Red-Black Size 5",
      price: 1500,
   },
   {
      id: 101002,
      name: "Red-White Size 4",
      price: 1650,
   },
   {
      id: 101003,
      name: "Home Mini Football",
      price: 2950,
   },
   {
      id: 101004,
      name: "Red-White Size 1",
      price: 3000,
   },
   {
      id: 101005,
      name: " Shirt-Red ",
      price: 1490,
   },
   {
      id: 101006,
      name: "Shirt-White & Black ",
      price: 1500,
   },
   {
      id: 101007,
      name: "Shirt-Gray-female",
      price: 2000,
   },
   {
      id: 101008,
      name: "Shirt-Gray-Male",
      price: 1290,
   },
   {
      id: 101009,
      name: "Goal 5 X 4",
      price: 15000,
   },
   {
      id: 101010,
      name: "Goal 12 X 6",
      price: 30000,
   },
   {
      id: 101011,
      name: "Goal 8 X 6",
      price: 17000,
   },
   {
      id: 101012,
      name: "Goal 12 X 4",
      price: 27000,
   },
   {
      id: 101013,
      name: "Jacket-Black",
      price: 3500,
   },
   {
      id: 101014,
      name: "Jacket-Maroon",
      price: 4500,
   },
   {
      id: 101015,
      name: "Jacke-Black-Kid",
      price: 3700,
   },
   {
      id: 101016,
      name: "Jacket-Orange",
      price: 4200,
   },
   {
      id: 101017,
      name: "David De Gea wear Adidas X 18.1",
      price: 4000,
   },
   {
      id: 101018,
      name: "Eric Bailly wear Nike Tiempo Legend XII",
      price: 4900,
   },
   {
      id: 101019,
      name: "Romenlu Lukaku wear Puma ONE",
      price: 3800,
   },
   {
      id: 101020,
      name: "Marcus Rashford wear Nike Hypervenom Pthanthom III",
      price: 4800,
   },
   {
      id: 101021,
      name: "White Short",
      price: 1400,
   },
   {
      id: 101022,
      name: "Gray Short-1",
      price: 1300,
   },
   {
      id: 101023,
      name: "Gray Short-2",
      price: 1490,
   },
   {
      id: 101024,
      name: "Black Short",
      price: 1250,
   },
];

let totalPrice = 0;
function clickHandler1() {
   //pass the personal Information to variables from html document
   const userFirstName = document.getElementById("userFirstName").value;   //getting and setting the text in an input text field is done by using the value property of the input field
   const userLastName = document.getElementById("userLastName").value;
   const userShippingAddress = document.getElementById("userShippingAddress").value;
   const userContactNumber = document.getElementById("contactNumber").value;
   const userEmail = document.getElementById("userEmail").value;

   //check if user forgot to enter user Name or user Email
   if (userFirstName === "") {
      alert("Please enter your First Name");
      return;
   }
   if (userLastName === "") {
      alert("Please enter your Last Name");
      return;
   }
   if (userEmail === "") {
      alert("Please enter your email");
      return;
   }
   if (userShippingAddress === "") {
      alert("Please enter your Shipping Address");
      return;
   }
   if (userContactNumber === "") {
      alert("Please enter your Contact Number");
      return;
   }


   //pass personal Information to the variables called personal Information Lables from html document
   const userFirstNameLable = document.getElementById("userFirstNameLable");
   const userLastNameLable = document.getElementById("userLastNameLable");
   const userShippingAddressLable = document.getElementById("shippingAddressLable");
   const userContactNmuberLable = document.getElementById("contactNumberLable");
   const userEmailLable = document.getElementById("emailLable");


   userFirstNameLable.innerHTML = userFirstName;
   userLastNameLable.innerHTML = userLastName;
   userShippingAddressLable.innerHTML = userShippingAddress;
   userContactNmuberLable.innerHTML = parseInt(userContactNumber);
   userEmailLable.innerHTML = userEmail;

   //pass product Information to the variables from html document
   const productNumber = document.getElementById("productNumber").value;
   const productQuantity = document.getElementById("productQuantity").value;

   //check if user forgot to enter product number or product quantity
   if (productNumber === "") {
      alert("Please enter a product numer");
      return;
   }
   if (productQuantity === "") {
      alert("Please enter a product quantity");
      return;
   }
   //create a function to access product list items
   function findSelectedProduct(product) {
      return product.id === parseInt(productNumber);
   }
   const selectedProduct = productList.find(findSelectedProduct);

   //check user enter wrong product number and when it's wrong popup msg will display and clear it
   if (selectedProduct === undefined) {
      alert("No such product found!");
      console.log("dd")
      productNumber.value = "";
      productQuantity.value = "";
   }
   else {

      // Find a <table> element with id="product-invoice-table":
      const invoiceTable = document.getElementById("productInvoiceTable");

      // Create an empty <tr> element and add it to the 1st position of the table:
      const row = invoiceTable.insertRow(1);
      // Insert new cells (<th> elements) at the 1st,2nd,3rd,4th position of the "new" <tr> element:
      const prodNo = row.insertCell(0);
      const prodName = row.insertCell(1);
      const prodQuantity = row.insertCell(2);
      const prodUnitPrice = row.insertCell(3);
      const prodSubTotal = row.insertCell(4);

      // Add elements to the new cells:
      prodNo.innerHTML = productNumber;
      prodName.innerHTML = selectedProduct.name;
      prodQuantity.innerHTML = parseInt(productQuantity);
      prodUnitPrice.innerHTML = selectedProduct.price;
      prodSubTotal.innerHTML = parseInt(productQuantity) * selectedProduct.price;

      const totalPriceLabel = document.getElementById("totalBill");
      // calculating the total price:
      totalPrice = totalPrice + (parseInt(productQuantity) * selectedProduct.price);
      // updating the total price fields
      totalPriceLabel.innerHTML = totalPrice;

      // to clear the product number and quantity input fields
      productNumber.value = "";
      productQuantity.value = "";
   }
}

//pass Add to cart Button's id to avariable called addPersonalInfoBtn
const addToCartBtn = document.getElementById("placeOrderBtn");

//add listener to take items form both 2 lables
addToCartBtn.addEventListener("click", clickHandler1);

//creat a function to Purchase
function clickHandler2() {
   alert("Thanks for Purchase");
}
//call the function and pass it in to Event Listener
const purchasetBtn = document.getElementById("purchaseBtn");
purchaseBtn.addEventListener("click", clickHandler2);