//   Xây sản phẩm lấy dữ liệu từ array

const products = [];

function handleAdd() {
    const valueInput = document.querySelector("#add-product").value;
    products.push(valueInput);
    console.log("Kiem tra products", products);
    // Render sau mỗi lần add
    renderProducts(products);
}

renderProducts(products);
function renderProducts(data) {
    // Đặt ID để lấy đúng table mong muốn
    const table = document.querySelector("table");
    let contentTable = `<tr>
      <th>NO</th>
      <th>Product name</th>
      <th colspan="2">Action</th>
    </tr>`;
    data.forEach((product, index) => {
        contentTable += `<tr>
      <td>${index + 1}</td>
      <td><input value="${product}" readonly id="product-${index}"/></td>
      <td><button onclick="handleEdit(${index})">Edit</button></td>
      <td><button onclick="handleDelete(${index})">Delete</button></td>
    </tr>`;
    });
    table.innerHTML = contentTable;
}

function handleEdit(index) {
    const inputProduct = document.querySelector("#add-product");
    inputProduct.value = products[index];
    updateElement = document.querySelector("#btn-update");
    addElement = document.querySelector("#btn-add");
    updateElement.style.display = "inline-block";
    updateElement.setAttribute("onclick", `handleUpdate(${index})`);
   
}

function handleUpdate(index) {
    const inputProduct = document.querySelector("#add-product");
    console.log(index, "update");
    products.splice(index, 1, inputProduct.value);
    renderProducts(products);
}

function handleDelete(index) {
    products.splice(index, 1);
    renderProducts(products);
}


