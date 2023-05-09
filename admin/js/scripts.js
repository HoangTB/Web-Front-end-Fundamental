//  Render header Admin
let objectAdmin = JSON.parse(localStorage.getItem("Admin"));
function renderHeader() {

    const admin = document.querySelector(".icon-right");

    let adminLogin = "";
    if (objectAdmin === null) {

        adminLogin += `
            <div class="icon-right">
            <i class="fa-solid fa-user-secret" onclick="handelLogin()"></i>
            </div>

  `
    } else {

        adminLogin += `
        <div class="icon-right">
        <button class="user-email"><span class="text-black-50">Hi, </span>${objectAdmin.email.split("@")[0]}</button>
        <button class="btn-logout" onclick="handelLogout()">Đăng Xuất</button>
        </div>
        `
    }
    admin.innerHTML = adminLogin;
} renderHeader();


window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {

        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Đăng xuất
function handelLogout() {
    localStorage.removeItem("Admin");
    alert("Bạn có muốn đăng xuất trang Admin?")
    window.location = '/admin/index.html';
}


// Search
function objectSearch(value) {
    const search = objectProduct.filter((object) =>
        object.name.toLowerCase().includes(value.toLowerCase())
    );
    renderProduct(search);
}

// Login

function handelLogin() {
    window.location = '/user/login-register.html';
}

// Ẩn hiện quyền truy cập Admin 
const table = document.querySelector(".border-end");
const contentBig = document.querySelector(".content-big");
const btnAdd = document.querySelector(".btn-add");
let adminDB = JSON.parse(localStorage.getItem("Admin"));
if (adminDB === null) {
    table.style.display = "none";
    contentBig.style.display = "none";
    btnAdd.style.display = "none";

} else {
    table.style.display = "block";
    contentBig.style.display = "block";
    btnAdd.style.display = "block";
}

//
function handelUser() {
    window.location = '/';
}