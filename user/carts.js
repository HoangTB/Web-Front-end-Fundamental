

// Mở ra tag Cart
function handelCarts() {
  window.location = "../user/carts.html";
}

// Mở ra tag Đăng kí
function handelLogin(){
  window.location="../user/login-register.html";
}



// cart

let btn_add = document.querySelectorAll("#btn-addcart");
for(let i = 0; i < btn_add.length; i++) {
    btn_add[i].addEventListener("click", () =>{
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
    
    if(productNumber) {
      localStorage.setItem("Shoses",productNumber + 1);
      document.querySelector(".fa-cart-plus").textContent = productNumber + 1;
    }else {
      localStorage.setItem("Shoses",1);
      document.querySelector(".fa-cart-plus").textContent = 1;
    }

    setItems(product);
}

// function setItems(product) {
//   let cartItem = localStorage.getItem("productsInCart");
//   cartItem = JSON.parse(cartItem);
//   if(cartItem != null) {
//       if (cartItem[product.tag] == undefined) {
//         cartItem = {
//             ...cartItem,
//             [product.tag]: product
//         }
//       }
//       cartItem[product.tag].inCart += 1;
//   } else {
//     product.inCart = 1;
//     cartItem = {
//       [product.tag]: product
//     }
//   }
//   localStorage.setItem("productsInCart",JSON.stringify(cartItem));
// }

// function totalcost(product) {
//   let cartCost = localStorage.getItem("totalcost");
 
//   if (cartCost != null) {
//     cartCost = parseInt(cartCost);
//     localStorage.setItem("totalcost",cartCost + product.price);
//   } else {
//     localStorage.setItem("totalcost",product.price);
//   }
    
// }

// function displayCart() {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
  
//   let productContainer = document.querySelector(".products");
//   let cartCost = localStorage.getItem("totalcost");
//   if (cartItems && productContainer) {
//     productContainer.innerHTML = "";
//     Object.values(cartItems).map(item => {
//         productContainer.innerHTML += `
//            <div class="box-items">
//                 <i class="fa-sharp fa-solid fa-circle-xmark"></i>
//                 <img src="${item.tag}">
//                 <span>${item.name}</span>
//                 <div class="price">$${item.price}</div>
//                 <div class="quantity">
//                     <i class="fa-solid fa-backward-step"></i>
//                     <span>${item.inCart}</span>
//                     <i class="fa-solid fa-forward-step"></i>
//                 </div>
//                 <div class="total">$${item.inCart * item.price},00</div>
//            </div>
//         `;
//     });
//     productContainer.innerHTML += `
//         <div class="basketTotalContainer">
//             <h4 class="basketTotalTitle">
//                 Basket Total
//             </h4>
//             <h4 class="basketTotal">
//                 $${cartCost},00
//             </h4>
//         </div>
//     `;
//   }
// }

// displayCart();
// onLoadCartNumber();