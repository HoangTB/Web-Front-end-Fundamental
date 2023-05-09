// let User = JSON.parse(localStorage.getItem("User"));
let Acount = JSON.parse(localStorage.getItem("Acount"));
let User = JSON.parse(localStorage.getItem("User"));
// console.log(User);

function renderManagerUser() {
    let UserContent = document.querySelector(".user-content");
    let contentLoad = "";

    Acount.forEach(user => {
      console.log(user);
      if(user.email===User.email){
        contentLoad += `
        <tr>
        <th scope="row">1</th>
        <td>${user.email}</td>
        <td><input type="text" value="${user.password}" class="edit-password"></td>
        <td><input type="text" value="${user.address || []}" class="edit-address"></td>
        <td><input type="text" value="${user.phone || []}" class="edit-phone"></td>
        <td><button class = "edit-User" onclick="handleUpateUser()">Cập nhật thông tin</button></td>
      </tr>
        `;
      }


    })


    UserContent.innerHTML = contentLoad;

}
renderManagerUser();


function handleUpateUser() {
  let Acount = JSON.parse(localStorage.getItem("Acount"));
let User = JSON.parse(localStorage.getItem("User"));
let editPassword = document.querySelector(".edit-password");
let editAddress = document.querySelector(".edit-address");
let editPhone = document.querySelector(".edit-phone");
updateUser = {
    email: User.email,
    password: editPassword.value,
    address: editAddress.value,
    phone: editPhone.value,
    active: true,
}

Acount.forEach((user, index) => {
  
  if(User.email === user.email){
    console.log(user.email);
    Acount.splice(index,1,updateUser);
  }
});



 
  localStorage.setItem("Acount", JSON.stringify(Acount));
  // localStorage.setItem("User", JSON.stringify(updateUser));
  alert("Đã Update User");
} 
//  renderManagerUser(Acount);




// Render để không mất số trên thanh Bag
function renderCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
      document.querySelector(".position-absolute").textContent = productNumber;
  }
}
renderCartNumber();

