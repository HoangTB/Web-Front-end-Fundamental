// Lấy về
let objectProduct = JSON.parse(localStorage.getItem("Shoses"));

// Render List Shoses
function renderProduct(objectProduct) {
  const listProduct = document.querySelector(".content-product");
  let contentProduct = "";
  objectProduct.forEach((object) => {
    contentProduct += `
        <tbody class="content-product">
        <tr>
            <td class="text-center pt-4" hidden>${object.id}</td>
            <td><img src="${object.image}" alt=""></td>
            <td class="pt-4"><b>Tên sản phẩm: </b> <span>${object.name}</span></td>
            <td class="pt-4"><b>Phân loại: </b> <span>${object.classify}</span></td>
            <td class="pt-4"><b>Giá: </b> <span>${object.price}</span></td>
            <td class="text-center pt-4">
                <button onclick="handleEdit(${object.id})">Edit</button>
                <button onclick="handleDelete(${object.id})">Delete</button>
            </td>
        </tr>
    </tbody>
        `;
  });

  listProduct.innerHTML = contentProduct;
}
renderProduct(objectProduct);

// Search
function objectSearch(value) {
  alert("aaa");
  const search = objectProduct.filter((object) =>
    object.name.toLowerCase().includes(value.toLowerCase())
  );
  renderProduct(search);
}

// Xóa dữ liệu khi array rỗng
function handleDelete(id) {
  let objectProduct = JSON.parse(localStorage.getItem("Shoses"));
  objectProduct.forEach((object, index) => {
    if (object.id == id) {
      alert("Ban có muốn xóa sản phẩm này không ?");
      objectProduct.splice(index, 1);

    }
  });
  localStorage.setItem("Shoses", JSON.stringify(objectProduct));
  renderProduct(objectProduct);
}


// Điều kiện để show formAdd
function handelAdd() {
  const formAdd = document.getElementById("formAdd");

  if (formAdd.style.display === "none" || !formAdd.style.display) {
    formAdd.style.display = "block";
  } else {
    formAdd.style.display = "none";
  }
}
// Lưu dữ liệu mới
function handelSave() {
  const formAdd = document.getElementById("formAdd");
  const imageAdd = document.querySelector("#image");
  const nameAdd = document.querySelector("#name");
  const classifyAdd = document.querySelector("#classify");
  const priceAdd = document.querySelector("#price");
  const newObject = {};
  newObject.id = listShoses[listShoses.length - 1].id + 1;
  newObject.image = "../image/" + imageAdd.value.slice(12);
  newObject.name = nameAdd.value;
  newObject.classify = classifyAdd.value;
  newObject.price = priceAdd.value;
  listShoses.push(newObject);
  formAdd.style.display = "none";
  localStorage.setItem("Shoses", JSON.stringify(listShoses));
  renderProduct(listShoses);

}

// Điều kiện để show form Edit

function handleEdit(id) {
  let objectProduct = JSON.parse(localStorage.getItem("Shoses"));
  const formEdit = document.getElementById("formEdit");
  if (formEdit.style.display === "none" || !formEdit.style.display) {
    formEdit.style.display = "block";

  } else {
    formEdit.style.display = "none";
  };

  // Lấy dữ liệu từ Edit
  objectProduct.forEach(object => {
    if (object.id == id) {
      const idEdit = document.querySelector("#idEdit");
      const nameEdit = document.querySelector("#nameEdit");
      const classifyEdit = document.querySelector("#classifyEdit");
      const priceEdit = document.querySelector("#priceEdit");
      idEdit.value = object.id;
      nameEdit.value = object.name;
      classifyEdit.value = object.classify;
      priceEdit.value = object.price;
      console.log(object.image);
    }
  })

}

// Update 
function handelUpdate() {
  let objectProduct = JSON.parse(localStorage.getItem("Shoses"));
  const idEdit = document.querySelector("#idEdit");
  const imageEdit = document.querySelector("#imageEdit");
  const nameEdit = document.querySelector("#nameEdit");
  const classifyEdit = document.querySelector("#classifyEdit");
  const priceEdit = document.querySelector("#priceEdit");
  Update = {
    id: Number(idEdit.value),
    image: "../image/" + imageEdit.value.slice(12),
    name: nameEdit.value,
    classify: classifyEdit.value,
    price: priceEdit.value,
  };
  objectProduct.forEach((object, index) => {
    if (object.id == Update.id) {
      objectProduct.splice(index, 1, Update);
    }
  })
  console.log(objectProduct);
  localStorage.setItem("Shoses", JSON.stringify(objectProduct));
  renderProduct(objectProduct);
}