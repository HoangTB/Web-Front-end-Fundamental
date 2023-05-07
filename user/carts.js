
// Render để không mất số trên thanh Bag
function renderCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".position-absolute").textContent = productNumber;
  }
}
renderCartNumber();


// Mở ra tag Cart
function handelCarts() {
  window.location = "../user/carts.html";
}

// Mở ra tag Đăng kí
function handelLogin() {
  window.location = "../user/login-register.html";
}



// cart

let btn_add = document.querySelectorAll("#btn-addcart");
for (let i = 0; i < btn_add.length; i++) {
  btn_add[i].addEventListener("click", () => {
    cartNumber(listShoses[i]);
    totalcost(listShoses[i]);
  })
}

// Load lại trang sản phẩm không mất
function onLoadCartNumber() {
  let productNumber = localStorage.getItem("Shoses");
  console.log(productNumber);
  if (productNumber) {
    document.querySelector(".fa-cart-plus").textContent = productNumber;
  }
}

// Thêm sản phẩm, sản phẩm sẻ nhảy lên icon card
function cartNumber(listShoses) {

  console.log(listShoses);
  let productNumber = localStorage.getItem("Shoses");

  productNumber = parseInt(productNumber);

  if (productNumber) {
    localStorage.setItem("Shoses", productNumber + 1);
    document.querySelector(".fa-cart-plus").textContent = productNumber + 1;
  } else {
    localStorage.setItem("Shoses", 1);
    document.querySelector(".fa-cart-plus").textContent = 1;
  }

  // setItems(product);
  pushOnUser();
}

renderCart();
function renderCart() {
  let cartItems = JSON.parse(localStorage.getItem("ProductIncart"));
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  let productNumber = localStorage.getItem("cartNumber");
  let productCart = document.querySelector(".items");
  let productTotal = document.querySelector(".total-Cart");
  let productCartContent = "";
  let productTotalContent = "";
  
  if(cartItems === null){
    productTotalContent += `
    <div class="content-total">
      <h3>Total</h3>
       <div class=""><span class="text">Số lượng:</span><span
       class="price">0 Sản phẩm</span></div>
        <div class=""><span class="text ">Tổng số tiền:</span><span class="price">0 VND </span></div>
         <button type="button" class="btn-cost">Thanh Toán</button>
         </div>
`;
  } else{
    productTotalContent += `
    <div class="content-total">
      <h3>Total</h3>
       <div class=""><span class="text">Số lượng:</span><span
       class="price">${productNumber} Sản phẩm</span></div>
        <div class=""><span class="text">Tổng số tiền:</span><span class="price">${cartCost.toLocaleString("de-DE")} VND </span></div>
         <button type="button" class="btn-cost">Thanh Toán</button>
         </div>
`;
  }


  if (cartItems && productCart) {
    Object.values(cartItems).map(item => {
      productCartContent += `
      <div class="row">     
      <div><i class="fa-solid fa-trash fs-5 "></i></div>
          <div class="col-md-3 m-3">         
              <img class="img-fluid mx-auto d-block image" src="${item.image}" style="width: 60%;">
          </div>
          <div class="col-md-8">
              <div class="info pt-4">
                  <div class="row">
                      <div class="col-md-5 product-name">
                          <div class="product-name">
                              <a href="#">${item.name}</a>
                              <div class="product-info">
                                  <div>Classify: <span class="value">${item.classify}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 quantity">
                          <label for="quantity">Quantity:</label>
                          <input id="quantity" type="number" value="${item.inCart}"
                              class="form-control quantity-input">
                      </div>
                      <div class="col-md-3 price fw-bold">
                          <span>${item.price.toLocaleString("de-DE")} VND</span>
                      
                      </div>
               
                  </div>
              </div>
          </div>
      </div>
     

  
      `;
     
    });


  }
  productCart.innerHTML = productCartContent;
  productTotal.innerHTML = productTotalContent;
}
// Push carts vào dữ liệu

function pushOnUser(){
  let cartNumber = JSON.parse(localStorage("cartNumber"));
  console.log(cartNumber);
}