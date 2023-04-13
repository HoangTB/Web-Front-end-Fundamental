let objectCar = [{
    id: 1,
    image: "./images/vf5.png",
    name: "VF 5 Plus",
    slogan:"Kiến tạo xu thế mới",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:">300 Km",
    price: "458.000.000 VNĐ",
},
{
    id: 2,
    image: "./images/vf34.gif",
    name: "VF e34",
    slogan:"Cùng bạn bứt phá mọi giới hạn",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:"~285 Km",
    price: "710.000.000 VNĐ",
},
{
    id: 3,
    image: "./images/vf8.png",
    name: "VF 8",
    slogan:"Hơn cả sự hứng khởi",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:"~420 Km",
    price: "1.129.000.000 VND",
},
{
    id: 4,
    image: "./images/vf9.png",
    name: "VF 9",
    slogan:"Hơn cả sự tận hưởng",
    vehicles:"SUV",
    seat:"6-7 chỗ",
    distance:"~438 Km",
    price: "1.491.000.000 VND",
},
{
    id: 5,
    image: "./images/lux.gif",
    name: "LUX A2.0",
    slogan:"Tận hưởng từng khoảnh khắc",
    vehicles:"SEDAN",
    seat:"5 chỗ",
    distance:"~6.9l/100 Km",
    price: "1.115.120 VND",
},
,
{
    id: 6,
    image: "./images/luxsa.png",
    name: "LUX SA2.0",
    slogan:"Mãnh liệt chinh phục mọi con đường",
    vehicles:"SUV",
    seat:"7 chỗ",
    distance:"~7.9l/100 Km",
    price: "2.115.120 VND",
},
{
    id: 1,
    image: "./images/vf5.png",
    name: "VF 5 Plus",
    slogan:"Kiến tạo xu thế mới",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:">300 Km",
    price: "458.000.000 VNĐ",
},
{
    id: 2,
    image: "./images/vf34.gif",
    name: "VF e34",
    slogan:"Cùng bạn bứt phá mọi giới hạn",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:"~285 Km",
    price: "710.000.000 VNĐ",
},
{
    id: 3,
    image: "./images/vf8.png",
    name: "VF 8",
    slogan:"Hơn cả sự hứng khởi",
    vehicles:"SUV",
    seat:"5 chỗ",
    distance:"~420 Km",
    price: "1.129.000.000 VND",
},
{
    id: 4,
    image: "./images/vf9.png",
    name: "VF 9",
    slogan:"Hơn cả sự tận hưởng",
    vehicles:"SUV",
    seat:"6-7 chỗ",
    distance:"~438 Km",
    price: "1.491.000.000 VND",
},
{
    id: 5,
    image: "./images/lux.gif",
    name: "LUX A2.0",
    slogan:"Tận hưởng từng khoảnh khắc",
    vehicles:"SEDAN",
    seat:"5 chỗ",
    distance:"~6.9l/100 Km",
    price: "1.115.120 VND",
},
,
{
    id: 6,
    image: "./images/luxsa.png",
    name: "LUX SA2.0",
    slogan:"Mãnh liệt chinh phục mọi con đường",
    vehicles:"SUV",
    seat:"7 chỗ",
    distance:"~7.9l/100 Km",
    price: "2.115.120 VND",
},
]
renderProducts(objectCar);
function renderProducts(object){
     const table = document.querySelector(".contentCar");
     let contentTable = "";

     object.forEach((objectCar, index) => {
        contentTable += 
       `
        <table id="form">
        <tr>
            <td colspan="3" class="formImage"><img src="${objectCar.image}" alt=""></td>
        </tr>
        <tr>
            <td colspan="3" class="name"><h3>${objectCar.name}</h3></td>
        </tr>
        <tr>
            <td colspan="3" class="solgan">${objectCar.slogan}</td>
        </tr>
        <tr>
            <td>
            <p><b>Dòng xe</b></p>
                <p>${objectCar.vehicles}</p>
            </td>
            <td>
                <p><b>Số chỗ ngồi</b></p>
                <p>${objectCar.seat}</p>
            </td>
            <td>
                <p><b>Quãng đường</b></p>
                <p>${objectCar.distance}</p>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="price"><p><b>${objectCar.price}</b></p></td>
        </tr>
        <tr>
            <td colspan="3" class="buttonForm"><button>Đặt cọc</button> <button>Xem chi tiết</button></td>
        </tr>
    </table>
        `   
    });
    table.innerHTML = contentTable;
}





function handelSearch(object){
       // b1:Lấy giá trị của input search
       const valueSearch = document.querySelector('#search').value;
       console.log("Kiểm tra search",valueSearch);

       const dataSearch = [];
       objectCar.forEach((objectCar) => {
           if (
            objectCar.name.toLowerCase().includes(valueSearch.toLowerCase())
           ) {
               dataSearch.push(objectCar);
           }
       });
       console.log("",dataSearch);
       renderProducts(dataSearch);
}