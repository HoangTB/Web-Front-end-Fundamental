



const url = new URL(document.URL);
const id = url.searchParams.get("id");


function RenderDetail() {
    let Shoses = JSON.parse(localStorage.getItem("Shoses"));
    const elementDetail = document.querySelector(".content-detail");
    const elementImage = document.querySelector(".listimage-detail");
    let contentDetail = "";
    let contentImage = "";
    Shoses.forEach(element => {
        if (element.id == id) {
            let priceSale = element.pricesale ?? [] ;
            contentDetail += `
            <div class="content-detail">
            <h2 class="text-danger">${element.name}</h2>
            <h4 class="fst-italic">${element.classify}</h4>
            <h6 class = "text-danger text-decoration-line-through"> ${priceSale.toLocaleString("de-DE")+" VND"}</h6>
            <h6>${element.price.toLocaleString("de-DE")} VND</h6>

           
        </div>
            `;

            contentImage += `

            <div class="col">
                <div class="card">
                    <img src="${element.image}" class="image-zoom" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image1}" class="image-zoom" alt="...">

                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image2}" class="image-zoom" alt="...">

                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image3}" class="image-zoom" alt="...">
                </div>
            </div>
            `;


        }
    });

    elementDetail.innerHTML = contentDetail;
    elementImage.innerHTML = contentImage;

} RenderDetail();



// Add to cart
// Lấy dữ liệu từ button cart
let carts = document.querySelectorAll("#add-cart");
let userCart = localStorage.getItem("User");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        if (userCart === null) {
            alert("Hãy đăng nhập tài khoản !");
            window.location = '/user/login-register.html';
        } else {

            listShoses.forEach(element => {
                if (element.id == id) {
                    cartsNumber(element);
                    totalCost(element);
                }
            })

        }

    })
}
// Render để không mất số trên thanh Bag
function renderCartNumber() {
    let productNumber = localStorage.getItem("cartNumber");
    if (productNumber) {
        document.querySelector(".position-absolute").textContent = productNumber;
    }
}
//  Điều kiện để số nhảy trên thanh Bag
function cartsNumber(element) {
    let productNumber = localStorage.getItem("cartNumber");
    productNumber = parseInt(productNumber);
    if (productNumber) {
        localStorage.setItem("cartNumber", productNumber + 1);
        // let positionab = document.querySelector(".position-absolute");
        // let renderNum = "";
        // renderNum += `
        // <span class="position-absolute">${productNumber + 1}</span>
        // `;
        // positionab.innerHTML = renderNum;

        document.querySelector(".position-absolute").textContent = productNumber + 1;
    } else {
        localStorage.setItem("cartNumber", 1);
        document.querySelector(".position-absolute").textContent = 1;
    }

    setItem(element);

}
//Tạo ProductIncart
function setItem(element) {
    let cartItems = localStorage.getItem("ProductIncart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {

        if (cartItems[element.name] == undefined) {
            cartItems = {
                ...cartItems,
                [element.name]: element
            }

        }
        cartItems[element.name].inCart += 1;
    } else {
        element.inCart = 1;
        cartItems = {
            [element.name]: element
        }
    }

    localStorage.setItem("ProductIncart", JSON.stringify(cartItems));

}
//Tạo Cost
function totalCost(element){
    let cartCost = localStorage.getItem("totalCost");
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost += element.price);
    } else{
        localStorage.setItem("totalCost", element.price);
    }
}


renderCartNumber();







