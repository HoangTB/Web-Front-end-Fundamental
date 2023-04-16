let objectCar = [{
    id: 1,
    image: "./images/vf5.png",
    name: "VF 5 Plus",
    slogan: "Kiến tạo xu thế mới",
    vehicles: "SUV",
    seat: "5 chỗ",
    distance: ">300 Km",
    price: " Từ 458.000.000 VNĐ",
},
{
    id: 2,
    image: "./images/vf34.gif",
    name: "VF e34",
    slogan: "Cùng bạn bứt phá mọi giới hạn",
    vehicles: "SUV",
    seat: "5 chỗ",
    distance: "~285 Km",
    price: " Từ 710.000.000 VNĐ",
},
{
    id: 3,
    image: "./images/vf8.png",
    name: "VF 8",
    slogan: "Hơn cả sự hứng khởi",
    vehicles: "SUV",
    seat: "5 chỗ",
    distance: "~420 Km",
    price: " Từ 1.129.000.000 VND",
},
{
    id: 4,
    image: "./images/vf9.png",
    name: "VF 9",
    slogan: "Hơn cả sự tận hưởng",
    vehicles: "SUV",
    seat: "6-7 chỗ",
    distance: "~438 Km",
    price: " Từ 1.491.000.000 VND",
},
{
    id: 5,
    image: "./images/lux.gif",
    name: "LUX A2.0",
    slogan: "Tận hưởng từng khoảnh khắc",
    vehicles: "SEDAN",
    seat: "5 chỗ",
    distance: "~6.9l/100 Km",
    price: "Từ 1.115.120 VND",
},
    ,
{
    id: 6,
    image: "./images/luxsa.png",
    name: "LUX SA2.0",
    slogan: "Mãnh liệt chinh phục mọi con đường",
    vehicles: "SUV",
    seat: "7 chỗ",
    distance: "~7.9l/100 Km",
    price: "Từ 2.115.120 VND",
},
{
    id: 7,
    image: "./images/fadil.png",
    name: "FALDI",
    slogan: "Hệ thống an toàn vượt trội nhất phân khúc",
    vehicles: "SEDAN",
    seat: "5 chỗ",
    distance: "~5,8l/100km",
    price: "Từ 558.000.000 VNĐ",
},
{
    id: 8,
    image: "./images/president.png",
    name: "PRESIDENT",
    slogan: "Đồng hành cùng chủ nhân bứt phá & chinh phục hành trình đi tới thành công",
    vehicles: "SUV",
    seat: "7 chỗ",
    distance: "~15,83l/100km",
    price: "Từ 4.710.000.000 VNĐ",
},]


let objectMoto = [{
    id: 1,
    image: "./images/ludo.png",
    name: "LUDO",
    distance: "Lên tới 75km/ 1 lần sạc",
    speed: "Lên tới 35km/h",
    price: "Giá từ 12.950.000 VND",
},
{
    id: 2,
    image: "./images/tempest.png",
    name: "TEMPEST",
    distance: "Lên tới 80km/ 1 lần sạc",
    speed: "Lên tới 49km/h",
    price: "Giá từ 19.350.000 VND",
},
{
    id: 3,
    image: "./images/evo.png",
    name: "EVO",
    distance: "Lên tới 203km/ 1 lần sạc",
    speed: "Lên tới 70km/h",
    price: "Giá từ 22.350.000 VND",
},
    ,
{
    id: 4,
    image: "./images/klaras.png",
    name: "KLARAS",
    distance: "Lên tới 194km/ 1 lần sạc",
    speed: "Lên tới 78km/h",
    price: "Giá từ 36.950.000 VND",
},
    ,
{
    id: 5,
    image: "./images/felizs.png",
    name: "FELIZS",
    distance: "Lên tới 198km/ 1 lần sạc",
    speed: "Lên tới 78km/h",
    price: "Giá từ 29.950.000 VND",
},
    ,
{
    id: 6,
    image: "./images/ventos.png",
    name: "VENTOS",
    distance: "Lên tới 160km/ 1 lần sạc",
    speed: "Lên tới 89km/h",
    price: "Giá từ 56.350.000 VND",
},
    ,
{
    id: 7,
    image: "./images/theon.png",
    name: "THEON",
    distance: "Lên tới 200km/ 1 lần sạc",
    speed: "Lên tới 90km/h",
    price: "Giá từ 63.950.000 VND",
},
    ,
{
    id: 8,
    image: "./images/theons.png",
    name: "THEON S",
    distance: "Lên tới 220km/ 1 lần sạc",
    speed: "Lên tới 90km/h",
    price: "Giá từ 69.950.000 VND",
},
]


renderProducts(objectCar);
function renderProducts(objectCar) {
    const table = document.querySelector(".contentCar");
    let contentTable = "";
    objectCar.forEach((objectCar,index) => {
        contentTable +=
            `
        <table id="form">
        <tr>
        <td colspan="3" class="id" hidden><p>${objectCar.id}</p></td>
         </tr>
        <tr>
            <td colspan="3" class="formImage"><img src="${objectCar.image}" alt=""></td>
        </tr>
        <tr>
            <td colspan="3" class="name"><h4>${objectCar.name}</h4></td>
        </tr>
        <tr>
            <td colspan="3" class="solgan">${objectCar.slogan}</td>
        </tr>
        <tr>
            <td>
            <p><b>Dòng xe</b></p>
                <p  class="vehicles">${objectCar.vehicles}</p>
            </td>
            <td>
                <p><b>Số chỗ ngồi</b></p>
                <p class="seat">${objectCar.seat}</p>
            </td>
            <td>
                <p><b>Quãng đường</b></p>
                <p class="distance">${objectCar.distance}</p>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="price"><p><b>${objectCar.price}</b></p></td>
        </tr>
        <tr>
            <td colspan="3" class="buttonForm"><button class ="buy">Đặt cọc</button> <button onclick="handleEditProduct(${index+1})" class="edit">Xem chi tiết</button></td>
        </tr>
    </table>
        `
    }); table.innerHTML = contentTable;
}

renderProducts1(objectMoto);
function renderProducts1(objectMoto) {
    const table1 = document.querySelector(".contentMoto");
    let contentTable1 = "";
    objectMoto.forEach((objectMoto,index) => {
        contentTable1 += `
        <table id="form">
        <tr>
        <td colspan="3" class="id" hidden><p>${objectMoto.id}</p></td>
         </tr>
        <tr>
            <td colspan="3" class="formImage"><img src="${objectMoto.image}" alt=""></td>
        </tr>
        <tr>
            <td colspan="3" class="name"><h4>${objectMoto.name}</h4></td>
        </tr>
        <tr>
            <td>
                <p><b>Quãng đường</b></p>
                <p>${objectMoto.distance}</p>
            </td>
            <td>
                <p><b>Tốc độ</b></p>
                    <p>${objectMoto.speed}</p>
                </td>
        </tr>
        <tr>
            <td colspan="3" class="price"><p><b>${objectMoto.price}</b></p></td>
        </tr>
        <tr>
            <td colspan="3" class="buttonForm"><button class ="buy">Đặt cọc</button> <button onclick="handleEditProduct(${index +1})">Xem chi tiết</button></td>
        </tr>
    </table>
         `

    }); table1.innerHTML = contentTable1;
}


// function handleSearch() {
//     // b1:Lấy giá trị của input search
//     const valueSearch = document.querySelector('#search').value;
//     const dataSearch = [];
//     objectCar.forEach((objectCar) => {
//         if (
//             objectCar.name.toLowerCase().includes(valueSearch.toLowerCase())
//         ) {
//             dataSearch.push(objectCar);

//         }
//     });renderProducts(dataSearch);
//     objectMoto.forEach((objectMoto) => {
//         if (
//             objectMoto.name.toLowerCase().includes(valueSearch.toLowerCase())
//         ) {
//             dataSearch.push(objectMoto);

//         }
//     });renderProducts(dataSearch);
//         console.log(111,dataSearch);

// }



function objectSearch(value){
    const search = objectCar.filter(
        (object) =>
        object.name.toLowerCase().includes(value.toLowerCase())
    );return renderProducts(search); 
}


function handleOto(){
    const formMoto = document.querySelector(".contentMoto");
    if (formMoto.style.display === "grid"){
       formMoto.style.display = "none";

    }
    else {
        formMoto.style.display = "grid";
    }
    

}

function handleMoto(){
    const formOto = document.querySelector(".contentCar");
    if (formOto.style.display === "grid"){
        formOto.style.display = "none";
    } else {
        formOto.style.display = "grid";
    }
    

}


 function handleEditProduct(id)
{   const idEdit = document.querySelector(".id");
    const imageEdit = document.querySelector(".formImage");
    const nameEdit = document.querySelector(".name");
    const sloganEdit = document.querySelector(".solgan");
    const vehiclesEdit = document.querySelector(".vehicles");
    const seatEdit = document.querySelector(".seat");
    const distanceEdit = document.querySelector(".distance");
    const priceEdit = document.querySelector(".price");
    const btnUpdate = document.querySelector(".edit");
    objectCar.forEach((objectCar)=>{
        if(id==objectCar.id)
        {
            idEdit.value = objectCar.id;
            // imageEdit.value = objectCar.image;
            nameEdit.value = objectCar.name;
            sloganEdit.value = objectCar.slogan;
            vehiclesEdit.value = objectCar.vehicles;
            seatEdit.value = objectCar.seat;
            distanceEdit.value = objectCar.distance;
            priceEdit.value = objectCar.price;
            // printImage.innerHTML = `<img id="printImage" src='${product.image}' >`
            // console.log(printImage);
            btnUpdate.setAttribute("onclick", `handleUpdateProduct('${objectCar.id}')`);
        }
    });
}