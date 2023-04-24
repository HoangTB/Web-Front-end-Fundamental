

//Render
render();
function render() {
    const dataDB = JSON.parse(localStorage.getItem("data")) ?? [];
    const table = document.querySelector(".table");
    let contentTable = "";
    dataDB.forEach((data, index) => {
        contentTable += `
    <tbody class="table">
    <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td><input type="button" name="" id="" value="Edit" onclick="handelEdit('${data.id}')"> <input type="button" name="" id="" value="Delete" onclick="handelDelete('${data.id}')">
        </td>
    </tr>
    </tbody>

        `;
    });
    table.innerHTML = contentTable;
}

// Create
function handelSubmit() {
    const dataDB = JSON.parse(localStorage.getItem("data")) ?? [];
    const idAdd = document.querySelector("#id").value;
    const nameAdd = document.querySelector("#name").value;
    const priceAdd = document.querySelector("#price").value;
    const newData = {
        id: idAdd,
        name: nameAdd,
        price: priceAdd,
    };

    let isDulicate = false;
    dataDB.forEach((data) => {
        if (data.id === idAdd) {
            isDulicate = true;
        }
    });

    if (isDulicate) {
        alert("ID trùng");
        return;
    }
    dataDB.push(newData);
    localStorage.setItem("data", JSON.stringify(dataDB));
    render();

}
// Edit
function handelEdit(id) {
    const dataDB = JSON.parse(localStorage.getItem("data"));
    elementData = {};
    dataDB.forEach((item) => {
        if (item.id === id) {
            elementData = item;
        }
    });
    const idElement = document.querySelector("#id");
    const nameElement = document.querySelector("#name");
    const priceElement = document.querySelector("#price");
    idElement.value = elementData.id;
    nameElement.value = elementData.name;
    priceElement.value = elementData.price;
};

// Update
function handelUpdate(){
    const dataDB = JSON.parse(localStorage.getItem("data"));
    const idEdit = document.querySelector("#id").value;
    const nameEdit = document.querySelector("#name").value;
    const priceEdit = document.querySelector("#price").value;
console.log(dataDB);
    const dataEdit ={
        id:idEdit,
        name:nameEdit,
        price:priceEdit,
    };

    dataDB.forEach((item, index)=>{
        if (item.id == dataEdit.id){
            dataDB.splice(index, 1, dataEdit);
        }
    });
    localStorage.setItem("data", JSON.stringify(dataDB));
    render();
}

// Delete

function handelDelete(id){
    const dataDB = JSON.parse(localStorage.getItem("data"));
    dataDB.forEach((item, index)=>{
        if(item.id == id ){
            dataDB.splice(index, 1);
        }
    });
    localStorage.setItem("data", JSON.stringify(dataDB));
    render();
}
// Search

function handelSearch() {
    const dataDB = JSON.parse(localStorage.getItem("data"));
    const elementData = document.querySelector("#search").value;
    const search = dataDB.filter((item) =>
    item.name.toLowerCase().includes(elementData.toLowerCase())
    );
    render(search);
  }
  
