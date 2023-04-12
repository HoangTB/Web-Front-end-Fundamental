let objectDrink = [{
    id: "1",
    image: "./images/ex_1.jpg",
    name: "Trà sữa Hồng",
    price: "50000",
},
{
    id: "2",
    image: "./images/ex_2.jpg",
    name: "Trà sữa Gongcha",
    price: "30000",
},
{
    id: "3",
    image: "./images/ex_3.jpg",
    name: "Trà sữa Baba",
    price: "40000",
},
{
    id: "4",
    image: "./images/ex_4.jpg",
    name: "Trà sữa Haha ",
    price: "30000",
},
{
    id: "5",
    image: "./images/ex_5.jpg",
    name: "Trà sữa Lala",
    price: "60000",
},
{
    id: "6",
    image: "./images/ex_6.jpg",
    name: "Trà sữa Trắng",
    price: "30000",
},
{
    id: "7",
    image: "./images/ex_7.jpg",
    name: "Trà sữa Lá Cây",
    price: "40000",
},]
renderProducts(objectDrink);
function renderProducts(object){
     const table = document.querySelector(".content_table");
     let contentTable = `
     <tr>
     <th>Stt</th>
     <th>Ảnh minh họa</th>
     <th>Tên sản phẩm</th>
     <th>Giá thành</th>
     <th colspan="2">Ghi chú</th>
    </tr>
     `;

     object.forEach((objectDrink, index) => {
        contentTable += 
        `
        <tr>
        <td>${index+1}</td>
        <td><img src="${objectDrink.image}" alt=""></td>
        <td>${objectDrink.name}</td>
        <td>${objectDrink.price}</td>
        <td><button onclick="handelEdit('${objectDrink.id}')">Edit</button> <button id="detele_Drink" onclick="handelDelete('${objectDrink.id}')">Delete</button></td>
    </tr>
        `   
    });
    table.innerHTML = contentTable;
}

function searchDrink(value){
    const search = objectDrink.filter(
        (object) =>
        object.name.toLowerCase().includes(value.toLowerCase()) 
    );
    renderProducts(search);
    console.log(search);
}

function add_drink(){
    const addForm = document.getElementById("form1");

    if(addForm.style.left==="-100%"){
        addForm.style.left = "35%";
       

    }else{
        addForm.style.left = "-100%";
    }  
}

function handelSave() {
    const idAdd = document.querySelector("#idDrink");
    const imageAdd = document.querySelector("#imageDrink");
    const nameAdd = document.querySelector("#nameDrink");
    const priceAdd = document.querySelector("#priceDrink");
    let isDulicate = false;
    objectDrink.forEach((object) => {
        if(object.id === idAdd){
            isDulicate = true;
            return;
        }
    });
    if (isDulicate|| !idAdd){
        return alert("ID trùng hoặc trống, vui lòng đặt ID mới");
    }
    const NewobjectDrink = {};
    NewobjectDrink.id = idAdd.value;
    NewobjectDrink.image = "./images/" + imageAdd.value.slice(12);
    NewobjectDrink.name = nameAdd.value;
    NewobjectDrink.price = priceAdd.value;
    objectDrink.push(NewobjectDrink);
    console.log(NewobjectDrink);
    renderProducts(objectDrink);  
}

function handelEdit(){
    const addForm2 = document.getElementById("form2");
    if(addForm2.style.left==="-100%"){
        addForm2.style.left = "21%";

    }else{
        addForm2.style.left = "-100%";
    }  


    let objectEdit;
    objectDrink.forEach((object) => {
        if(object.id === id){
            objectEdit = object;
            return;
        }
    });

    const idEdit = document.querySelector("#editId");
    const imageEdit = document.querySelector("#editimage");
    const nameEdit = document.querySelector("#editName");
    const priceEdit = document.querySelector("#editPrice");
    idEdit.value = objectEdit.id;
    imageEdit.value = objectEdit.image;
    nameEdit.value = objectEdit.name;
    priceEdit.value = objectEdit.price;
}


function handelDelete(id){
    objectDrink.forEach((object, index) => {
        if(object.id === id){
            objectDrink.splice(index, 1);
        }
    })
    renderProducts(objectDrink);
}