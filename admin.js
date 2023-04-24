// Lấy về
const objectDB = JSON.parse(localStorage.getItem("object"));

// Render và View ra
renderProducts(objectDB);
function renderProducts(objectDB) {
  const table = document.querySelector(".formContent");
  let contentTable = "";
  objectDB.forEach((object, index) => {
    contentTable += `
        <table id="form">
        <tr>
        <td colspan="2" class="id" hidden><p>${object.id}</p></td>
         </tr>
        <tr  class="image_form">
            <td colspan="2" class="formImage"><img src="${object.image}" alt=""></td>
        </tr>
        <tr>
            <td colspan="2" class="name"><h4>${object.name}</h4></td>
        </tr>   
        <tr>
            <td class="vehicles">
                <p><b>Dòng xe</b></p>
                <P>${object.vehicles}</p>
            </td>
            <td>
                <p><b>Quãng đường</b></p>
                <p class="distance">${object.distance}</p>
            </td>
        </tr>
        <tr>
        <td colspan="2" class="detail"><p><b>Tính năng nổi bật</b></p>
                        <p class="distance">${object.detail}</p>      
        </td>
        </tr>
        <tr>
            <td colspan="2" class="price"><p><b>${object.price}</b></p></td>
        </tr>
        <tr class="buttonForm">
            <td colspan="2" class="buttonForm"><button class ="buy" onclick="handleDelete(${object.id})">Delete</button> <button class="edit" onclick="handleEdit(${object.id})">Edit</button></td>
        </tr>
    </table>
        `;
  });
  table.innerHTML = contentTable;
}

// Search
function objectSearch(value) {
  const search = objectDB.filter((object) =>
    object.name.toLowerCase().includes(value.toLowerCase())
  );
  renderProducts(search);
}
//  Admin => Delete => Product(storage)
// function handleDelete(index) {
//   alert("Ban có muốn xóa không ?");
//   objectDB.splice(index, 1);
//   localStorage.setItem("object", JSON.stringify(objectDB));
//   renderProducts(objectDB);

// }
// Xóa dữ liệu khi array rỗng
function handleDelete(id) {
  const objectDB = JSON.parse(localStorage.getItem("object"));
  objectDB.forEach((object, index) => {
    if (object.id === id) {
      alert("Ban có muốn xóa không ?");
      objectDB.splice(index, 1);
    }
  });
  localStorage.setItem("object", JSON.stringify(objectDB));
  renderProducts(objectDB);
}
// Điều kiện để show formAdd
function handelAdd() {
  const formAdd = document.getElementById("formAdd");

  if (formAdd.style.display === "none") {
    formAdd.style.display = "block";
  } else {
    formAdd.style.display = "none";
  }
}
// Lưu dữ liệu mới
function handelSave() {
  const imageAdd = document.querySelector("#image");
  const nameAdd = document.querySelector("#name");
  const vehiclesAdd = document.querySelector("#vehicles");
  const distanceAdd = document.querySelector("#distance");
  const detailAdd = document.querySelector("#detail");
  const priceAdd = document.querySelector("#price");
  const Newobject = {};
  Newobject.id = objectProduct[objectProduct.length - 1].id + 1;
  Newobject.image = "./images/" + imageAdd.value.slice(12);
  Newobject.name = nameAdd.value;
  Newobject.vehicles = vehiclesAdd.value;
  Newobject.distance = distanceAdd.value;
  Newobject.detail = detailAdd.value;
  Newobject.price = priceAdd.value;
  objectProduct.push(Newobject);
  console.log(objectProduct);
  localStorage.setItem("object", JSON.stringify(objectProduct));
  renderProducts(objectProduct);
  console.log(objectProduct);
}
// Điều kiện để show form Edit

function handleEdit(id) {
  const formEdit = document.getElementById("formEdit");
  if (formEdit.style.display === "none") {
    formEdit.style.display = "block";
  } else {
    formEdit.style.display = "none";
  }
  // Edit
  objectDB.forEach(object => {
    if (object.id == id) {
      const idEdit = document.querySelector("#idEdit");
      const nameEdit = document.querySelector("#nameEdit");
      const vehiclesEdit = document.querySelector("#vehiclesEdit");
      const distanceEdit = document.querySelector("#distanceEdit");
      const detailEdit = document.querySelector("#detailEdit");
      const priceEdit = document.querySelector("#priceEdit");
      idEdit.value = object.id;
      nameEdit.value = object.name;
      vehiclesEdit.value = object.vehicles;
      distanceEdit.value = object.distance;
      detailEdit.value = object.detail;
      priceEdit.value = object.price;
    }
  })
 

}
// Update 

function handelUpdate() {
  const idEdit = document.querySelector("#idEdit");
  const nameEdit = document.querySelector("#nameEdit");
  const imageEdit = document.querySelector("#imageEdit");
  const vehiclesEdit = document.querySelector("#vehiclesEdit");
  const distanceEdit = document.querySelector("#distanceEdit");
  const detailEdit = document.querySelector("#detailEdit");
  const priceEdit = document.querySelector("#priceEdit");
  Update = {
    id : Number(idEdit.value),
    image : "./images/" + imageEdit.value.slice(11),
    name : nameEdit.value,
    vehicles : vehiclesEdit.value,
    distance : distanceEdit.value,
    detail : detailEdit.value,
    price : priceEdit.value,
  };
  objectDB.forEach((object, index) => {
    if (object.id == Update.id) {
      objectDB.splice(index, 1, Update);
    }
  })
  console.log(objectDB);
  localStorage.setItem("object", JSON.stringify(objectDB));
  renderProducts(objectDB);
}

// Form Sign in sign up

function handelSign(id) {
  const formSign = document.getElementById("formSign");
  if (formSign.style.display === "none") {
    formSign.style.display = "block";
  } else {
    formSign.style.display = "none";
  }
}
// Show signUp
function ShowsignUp(){
  const formSign = document.getElementById("formSign");
  const formUp = document.getElementById("formUp");
  if (formSign.style.display === "block") {
    formUp.style.display = "block";
    formSign.style.display = "none";
  } else {
    formUp.style.display = "none";
    formSign.style.display = "none";
  }
}
//Create SignUp
const formLocal = JSON.parse(localStorage.getItem("users")) || [];
const formCreate = document.querySelector("#formUp");
formCreate.addEventListener("submit", (e) => {
    e.preventDefault();       
    const emailError = document.querySelector("#error-email");
    const passwordError = document.querySelector("#error-password");
    const repeatPasswordError = document.querySelector("#error-repeat-password");
    const signUpInfo = {
        email: e.target[0].value.trim().toLowerCase(),
        password: e.target[1].value.trim(),
        repeatPassword: e.target[2].value.trim(),
    };

    const checkValidator = validator(signUpInfo);
    if (checkValidator.isError) {
        emailError.innerHTML = checkValidator.errorEmail;
        passwordError.innerHTML = checkValidator.errorPassword;
        repeatPasswordError.innerHTML = checkValidator.errorRepeatPassword;

    } else {
        formLocal.push(signUpInfo);  
        alert("Đăng kí thành công");
    }
    localStorage.setItem("users", JSON.stringify(formLocal));
    function validator(user) {
        let error = {
            isError: false,
            errorEmail: "",
            errorPassword: "",
            errorRepeatPassword: "",        
        };
        const regxEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!user.email.match(regxEmail)) {
            error.isError = true;
            error.errorEmail = "Email không đúng định dạng, vui lòng nhập lại";
        }
        formLocal.forEach(item =>
        {
            if(item.email == user.email){
                error.isError = true;
                error.errorEmail = "Email đã được đăng ký";
                return;
            }
        }) ;

        if (user.password < 5) {
            error.isError = true;
            error.errorPassword = "Password phải nhập trên 5 kí tự";
        }
        if (user.repeatPassword !== user.password) {
            error.isError = true;
            error.errorRepeatPassword = "Mật khẩu không trùng với mật khẩu phía trên";
        } 
        return error;

    }
});

 // Create SignIn
// B1. Lấy element của form
const userLocal = JSON.parse(localStorage.getItem("users"))|| [];
const formElement = document.querySelector("#formSign");
const Login = document.querySelector(".showBtn");
const AddLogout = document.querySelector(".hiddenBtn");
const Showmail = document.querySelector(".showmail");
const ShowTable = document.querySelector(".content");
// B2. Lắng nghe sự kiện submit
formElement.addEventListener("submit", (event) => {
  
  // Chặn action
  event.preventDefault();
  console.log(event);
  //   B3. Đặt biến user chứa thông tin người dùng nhập
  const user = {
    email: event.target[0].value.trim(), // trim() bỏ dấu space ở 2 bên giá trị
    password: event.target[1].value.trim(),
  };

  let isLogin = false;
  // B4. So sánh user với dữ liệu
  userLocal.forEach((item) => {
    console.log();
    if (item.email === user.email && item.password === user.password) {
      isLogin = true;
      alert("Đăng nhập thành công");
      localStorage.setItem("user", JSON.stringify(user));
      formElement.style.display = "none";
      Login.style.display = "none";
      AddLogout.style.display = "block";
      ShowTable.style.display = "block";
      Showmail.innerHTML = user.email;
      return;
    }
  });
  if (!isLogin) {
    alert("Email hoặc mật khẩu không đúng");
    
  }
});

function handelLogout(){
  localStorage.removeItem("user");
  confirm("Bạn có muốn đăng xuất không ?")
  Login.style.display = "block";
  AddLogout.style.display = "none";
  ShowTable.style.display = "none";
}