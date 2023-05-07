//Render lại khi đăng nhập thành công
let objectUser = JSON.parse(localStorage.getItem("User"));
function renderHeader() {
    const shoses = document.querySelector(".menu-right");
    let userLogin = "";
    if (objectUser === null) {

        userLogin += `
        <div class="right-search">
                <input type="text" placeholder="tìm kiếm ...">
                <i class="fa-solid fa-magnifying-glass fa-fade"></i>
            </div>
            <i class="fa-solid fa-user fa-fade i-user" onclick="handelLogin()"></i>
            <i class="fa-sharp fa-solid fa-bag-shopping fa-fade position-relative" onclick="handelCarts()"><span
                    class="position-absolute">0</span></i>`

    } else {
        userLogin += `
        <div class="right-search">
        <input type="text" placeholder="tìm kiếm ...">
        <i class="fa-solid fa-magnifying-glass fa-fade"></i>
    </div>
    <button class="user-email"><span class="text-black-50">Hi,</span>${objectUser.email.split("@")[0]}</button>
    <button class="btn-logout" onclick="handelLogout()">Đăng Xuất</button>
    <i class="fa-sharp fa-solid fa-bag-shopping fa-fade position-relative" onclick="handelCarts()"><span
            class="position-absolute">0</span></i>
        `
    }
    shoses.innerHTML = userLogin;
} renderHeader();



//Render lại khi đăng nhập thành công trang ADMIN
// let objectAdmin = JSON.parse(localStorage.getItem("Admin"));
// console.log(objectAdmin);
// function renderHeaderAdmin() {
//     const admin = document.querySelector(".navbar");
//     let adminLogin = "";
//     if (objectAdmin === null) {

//         adminLogin += `
//         <nav class="navbar">
//         <div class="container-fluid">
//             <button class="fa-solid fa-rectangle-list" id="sidebarToggle"></button>

//             <div class="item-search">
//                 <input type="search" name="" id="" placeholder="Tìm Kiếm">
//                 <i class="fas fa-search"></i>
//             </div>
//         </div>
//     </nav>`
//     } else {
//         adminLogin += `
//         <nav class="navbar">
//         <div class="container-fluid">
//             <button class="fa-solid fa-rectangle-list" id="sidebarToggle"></button>
//         </div>
//     </nav>
//         `
//     }
//     admin.innerHTML = adminLogin;
// } renderHeaderAdmin();

// Mở ra tag Đăng kí
function handelLogin() {
    window.location = "../user/login-register.html";
}

// Mở ra tag Cart
function handelCarts() {
    window.location = "../user/carts.html";
}


// Lấy về
let objectDB = JSON.parse(localStorage.getItem("Shoses"));
// Render List Shoses
renderData(objectDB);
function renderData(objectDB) {
    const shoses = document.querySelector(".tableRender");
    const shosesBest = document.querySelector(".tableRender-best");
    const shosesSale = document.querySelector(".tableRender-sale");
    let contentShoses = "";
    let contentShosesBest = "";
    let contentShosesSale = "";
    objectDB.forEach((object) => {
        contentShoses += `
        <div class="col">
    <div class="card shoes-list">
        <img src="${object.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="shoes-list-1 shoes-best-sale">
                <p class="card-text fw-light fs-4">${object.name}</p>
                <p class="card-text fst-italic">${object.classify}</p>
                <p class="card-text">${object.price.toLocaleString("de-DE")} VND</p>
            </div>
            <div class="icon-carts" onclick="handelDetail('${object.id}')">
            <i class="fa-solid fa-magnifying-glass-plus search-lop"></i>
            </div>
        </div>
    </div>
    </div>
        `;
        if(object.price > 1400000){
            contentShosesBest += `
        <div class="col">
    <div class="card shoes-list">
        <img src="${object.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="shoes-list-1 shoes-best-sale">
                <p class="card-text fw-light">${object.name}</p>
                <p class="card-text fst-italic">${object.classify}</p>
                <p class="card-text">${object.price.toLocaleString("de-DE")} VND</p>
            </div>
            <div class="icon-carts">
                <i class="fa-solid fa-heart text-danger"></i>
            </div>
            <div class="icon-carts" onclick="handelDetail('${object.id}')">
            <i class="fa-solid fa-magnifying-glass-plus search-lop"></i>
            </div>
        </div>
    </div>
    </div>
        `;

        }
        if(object.pricesale != null){

            contentShosesSale += `
            <div class="col">
            <div class="card shoes-list-sale">
                <img src="${object.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="shoes-list-1 shoes-best-sale">
                        <p class="card-text fw-light">${object.name}</p>
                        <p class="card-text fst-italic">${object.classify}</p>
                        <p class="text-decoration-line-through text-danger">${object.pricesale.toLocaleString("de-DE")} VND</p>
                        <p class="card-text">${object.price.toLocaleString("de-DE")} VND</p>
                    </div>

                </div>
         
                <span class="onsale fa-beat-fade">Sale!</span>
                <div class="icon-carts" onclick="handelDetail('${object.id}')">
                <i class="fa-solid fa-magnifying-glass-plus search-lop"></i>
                </div>
            </div>

        </div>
            `;
        }
       
    });
    shoses.innerHTML = contentShoses;
    shosesBest.innerHTML = contentShosesBest;
    shosesSale.innerHTML = contentShosesSale;
}



// Hiện menu List
function handelList() {
    const showList = document.querySelector(".navi-center");

    if (showList.style.display === "none" && showList.style.width <= "875px") {
        showList.style.display = "block";
    } else {
        showList.style.display = "none";
    }

}

// Đăng xuất
function handelLogout() {
    localStorage.removeItem("User");

    alert("Bạn có muốn đăng xuất tài khoản này?")
    
    window.location = '/';

}

// Tạo ID cho ảnh
function handelDetail(id) {
    window.location = `./user/detail.html?id=${id}`;
}

// Lên đầu trang
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

document.getElementById('myBtn').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// Render Giày Naｍ
let listNam = JSON.parse(localStorage.getItem("Shoses"));
document.getElementById('list-nam').addEventListener("click", function () {
    listNam.forEach(element => {

        if (element.classify === "Giày Nam") {
            // Render List Shoses
            renderData();
            function renderData() {
                const contentH3 = document.querySelector(".content-h3");
                const contentShoses = document.querySelector(".tableRender");

                let renderH3 = "";
                let renderShoses = "";
                renderH3+= `
                <div class="content-h3">
                <h3 id="h3">_GIÀY NAM_</h3>
                </div> `;
                listNam.forEach(object => {
                    if(object.classify === "Giày Nam"){

                        renderShoses+= `
                        <div class="col">
                        <div class="card shoes-list">
                            <img src="${object.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="shoes-list-1 shoes-best-sale">
                                    <p class="card-text fw-light fs-4">${object.name}</p>
                                    <p class="card-text fst-italic">${object.classify}</p>
                                    <p class="card-text">${object.price} VND</p>
                                </div>
                                <div class="icon-carts" onclick="handelDetail('${object.id}')">
                                <i class="fa-solid fa-magnifying-glass-plus search-lop"></i>
                                </div>
                            </div>
                        </div>
                        </div>`;
                    }
                })
                   contentShoses.innerHTML = renderShoses;
                    contentH3.innerHTML = renderH3;

            }
        }
    })
});


// Render Giày Nữ
let listNu = JSON.parse(localStorage.getItem("Shoses"));
document.getElementById('list-nu').addEventListener("click", function () {
    listNu.forEach(element => {

        if (element.classify === "Giày Nữ") {
            // Render List Shoses
            renderData();
            function renderData() {
                const contentH3 = document.querySelector(".content-h3");
                const contentShoses = document.querySelector(".tableRender");

                let renderH3 = "";
                let renderShoses = "";
                renderH3+= `
                <div class="content-h3">
                <h3 id="h3">_GIÀY NỮ_</h3>
                </div> `;
                listNam.forEach(object => {
                    if(object.classify === "Giày Nữ"){

                        renderShoses+= `
                        <div class="col">
                        <div class="card shoes-list">
                            <img src="${object.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="shoes-list-1 shoes-best-sale">
                                    <p class="card-text fw-light fs-4">${object.name}</p>
                                    <p class="card-text fst-italic">${object.classify}</p>
                                    <p class="card-text">${object.price} VND</p>
                                </div>
                                <div class="icon-carts" onclick="handelDetail('${object.id}')">
                                <i class="fa-solid fa-magnifying-glass-plus search-lop"></i>
                                </div>
                            </div>
                        </div>
                        </div>`;
                    }
                })
                   contentShoses.innerHTML = renderShoses;
                    contentH3.innerHTML = renderH3;

            }
        }
    })
});


// Render Giày Trẻ Em
let listKit = JSON.parse(localStorage.getItem("Shoses"));
document.getElementById('list-kit').addEventListener("click", function () {
    listNu.forEach(element => {

        if (element.classify === "Giày Nữ") {
            // Render List Shoses
            renderData();
            function renderData() {
                const contentH3 = document.querySelector(".content-h3");
                const contentShoses = document.querySelector(".tableRender");

                let renderH3 = "";
                let renderShoses = "";
                renderH3+= `
                <div class="content-h3">
                <h3 id="h3">_GIÀY TRẺ EM_</h3>
                </div> `;
                listNam.forEach(object => {
                    if(object.classify === "Giày Trẻ Em"){

                        renderShoses+= `
                        <div class="col">
                        <div class="card shoes-list">
                            <img src="${object.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="shoes-list-1 shoes-best-sale">
                                    <p class="card-text fw-light fs-4">${object.name}</p>
                                    <p class="card-text fst-italic">${object.classify}</p>
                                    <p class="card-text">${object.price} VND</p>
                                </div>
                                <div class="icon-carts" onclick="handelDetail('${object.id}')">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                                </div>
                            </div>
                        </div>
                        </div>`;
                    }
                })
                   contentShoses.innerHTML = renderShoses;
                    contentH3.innerHTML = renderH3;

            }
        }
    })
});


// Render để không mất số trên thanh Bag
function renderCartNumber() {
    let productNumber = localStorage.getItem("cartNumber");
    if (productNumber) {
        document.querySelector(".position-absolute").textContent = productNumber;
    }
}
renderCartNumber();