

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
         <button type="button" class="btn-cost" onclick="handleOrder()">Thanh Toán</button>
         </div>
`;
  } else{
    productTotalContent += `
    <div class="content-total">
      <h3>Total</h3>
       <div class=""><span class="text">Số lượng:</span><span
       class="price">${productNumber} Sản phẩm</span></div>
        <div class=""><span class="text">Tổng số tiền:</span><span class="price">${cartCost.toLocaleString("de-DE")} VND </span></div>
         <button type="button" class="btn-cost" onclick="handleOrder()">Thanh Toán</button>
         </div>
`;
  }


  if (cartItems && productCart) {
    Object.values(cartItems).map(item => {
      productCartContent += `
      <div class="row">     
      <div><i class="fa-solid fa-trash fs-5 " onclick="deleteCarts('${item.id}')"></i></div>
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
                      <div class="col-md-3 quantity">
                          <label for="quantity">Quantity:</label>

                          <input id="quantity" type="number" value="${item.inCart}"
                              class="form-control quantity-input">
                      </div>
                      <div class="col-md-4 price fw-bold">
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

// Xóa cart
function deleteCarts(){
      localStorage.removeItem("cartNumber");
      localStorage.removeItem("totalCost");
      localStorage.removeItem("ProductIncart");
      window.location='./carts.html';
}
Carts();
function Carts(){
  let existingCarts  = JSON.parse(localStorage.getItem("Carts")) || []; 
  let ProductIncart = JSON.parse(localStorage.getItem("ProductIncart")) || ""; 
  // const productIds = Object.values(ProductIncart).map(product => product.id);
  // const productName = Object.values(ProductIncart).map(product => product.name);
  let cartNumber = JSON.parse(localStorage.getItem("cartNumber")) || "";
  let totalCost = JSON.parse(localStorage.getItem("totalCost")) || "";
  let User = JSON.parse(localStorage.getItem("User"));


 let cart = {
    email:User.email,
    product: ProductIncart,
    cartnumber:cartNumber,
    totalprice:totalCost,
  };

  let emailExists = false;

  // Kiểm tra xem email đã tồn tại trong danh sách giỏ hàng hay chưa
  for (let i = 0; i < existingCarts.length; i++) {
    if (existingCarts[i].email === User.email) {
      // Email đã tồn tại, cập nhật thông tin giỏ hàng
      existingCarts[i].product = cart.product;
      existingCarts[i].cartnumber = cart.cartnumber;
      existingCarts[i].totalprice = cart.totalprice;
      emailExists = true;
      break;
    }
  }

  // Nếu email chưa tồn tại, thêm giỏ hàng mới vào danh sách
  if (!emailExists) {
    existingCarts.push(cart);
  }

  localStorage.setItem("Carts", JSON.stringify(existingCarts));

}


function renderCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
      document.querySelector(".position-absolute").textContent = productNumber;
  }
}
renderCartNumber()


function handleOrder(){
  const Order = JSON.parse(localStorage.getItem("Carts")) || [];
  const User = JSON.parse(localStorage.getItem("User"));
  const Carts = JSON.parse(localStorage.getItem("Carts"));
  let productCart = Object.values(Carts).map(product => product.product);
  console.log(111,productCart);
  let templeOrder = JSON.parse(localStorage.getItem("Order"))  || [];
  if(!localStorage.getItem("Order")){  
      localStorage.setItem("Order", JSON.stringify(templeOrder));
  }

  if (productCart !== null && productCart.length > 0 && productCart[0] !== '') {
    Order.forEach(item => {
      if (item.email === User.email) {
        templeOrder.push(Carts);
        localStorage.setItem("Order", JSON.stringify(templeOrder));
        alert("Cảm ơn bạn đã mua hàng !!");
        window.location = './carts.html';
      }
    });
  } else {
    alert("Vui lòng thêm sản phẩm");
    window.location = '/index.html#h3';
  }
  // Order.forEach(item => {
  //   if(item.email === User.email && productCart != null){
  //     templeOrder.push(Carts);
  //     localStorage.setItem("Order", JSON.stringify(templeOrder));
  //     alert("Cảm ơn bạn đã mua hàng !!")
  //   }

  // })

  // if(productCart === null){
  //   alert("Vui lòng thêm sản phẩm")
  //   window.location = '/index.html#h3';
  // }

  Carts.forEach((value, index) =>{
 
    if(value.email === User.email){
      Carts.splice(index, 1);
    }
  })

  localStorage.removeItem("totalCost");
  localStorage.removeItem("ProductIncart");
  localStorage.removeItem("cartNumber");
  localStorage.setItem("Carts", JSON.stringify(Carts));

 

}

function handelHistory(){
  window.location = '/user/carts-history.html';
}



