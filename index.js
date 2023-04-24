// Lấy về 
const objectDB = JSON.parse(localStorage.getItem("object"));


// Render và View ra
renderProducts(objectDB);
// renderProducts1(objectMotoDB);
// Render objectProduct
function renderProducts(objectDB) {
    const table = document.querySelector(".contentCar");
    let contentTable = "";
    objectDB.forEach((object,index) => {
        contentTable +=
            `
        <table id="form">
        <tr>
        <td colspan="4" class="id" hidden><p>${object.id}</p></td>
         </tr>
        <tr  class="image_form">
            <td colspan="4" class="formImage"><img src="${object.image}" alt=""></td>
        </tr>
        <tr>
            <td colspan="4" class="name"><h4>${object.name}</h4></td>
        </tr>
        <tr >
            <td colspan="4" class="solgan">${object.slogan}</td>
        </tr class = "center">
        <tr>
            <td class="vehicles">
            ${object.vehicles&&"<p><b>Dòng xe</b></p>"+object.vehicles+"</p>"}
            </td>
            <td>
            ${object.seat&&"<p><b>Số chỗ ngồi</b></p>"+object.seat+"</p>"}
            </td>
            <td>

                <p><b>Quãng đường</b></p>
                <p class="distance">${object.distance}</p>
            </td>
            <td>
            ${object.speed&&"<p><b>Tốc độ</b></p><p>"+object.speed+"</p>"}
            </td>
        </tr>
        <tr>
            <td colspan="4" class="price"><p><b>${object.price}</b></p></td>
        </tr>
        <tr class="buttonForm">
            <td colspan="4" class="buttonForm"><button class ="buy" onclick="handleDelete(${index})">Delete</button> <button class="edit" onclick="handleEdit('${object.id}')">Editt</button></td>
        </tr>
    </table>
        `
    }); table.innerHTML = contentTable;

}

// Search
function objectSearch(value){
    const search = objectDB.filter(
        (object) =>
        object.name.toLowerCase().includes(value.toLowerCase())
    );
    renderProducts(search);
}


//  Admin => Delete => Product(storage)
function handleDelete(index) {
    alert("Ban có muốn xóa không");
    objectDB.splice(index, 1);
    localStorage.setItem("object",JSON.stringify(objectDB));
    renderProducts(objectDB);
    console.log(index);
}