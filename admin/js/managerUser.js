
let objectUser = JSON.parse(localStorage.getItem("Acount"));

renderUser(objectUser);
function renderUser(objectUser) {
    const listUser = document.querySelector(".content-user");
    let contentUser = "";
    objectUser.forEach((object, index) => {
        console.log(object)
        console.log(index)
        contentUser += `
        <tbody class="content-user">
                    <tr>
                        <td class="text-center">${index+1}</td>
                        <td class=""><b>Email: </b> <span>${object.email}</span></td>
                        <td class=""><b>Active: </b> <span class="text-primary" >Đang hoạt động</span></td>
                        <td class="text-center">
                            <button onclick="handleDelete(${object.id})">Delete</button>
                        </td>
                    </tr>
                </tbody> 
        `;
    });
    listUser.innerHTML = contentUser;
  
}

// Search
function objectSearch(value) {
    const search = objectUser.filter((object) =>
      object.email.toLowerCase().includes(value.toLowerCase())
    );
    renderUser(search);
  }

  // Xóa dữ liệu
function handleDelete(id) {
    let objectUser = JSON.parse(localStorage.getItem("Users"));
    objectUser.forEach((object, index) => {
      if (object.id == id) {
        alert("Ban có muốn xóa User người dùng này không ?");
        objectUser.splice(index, 1);
  
      }
    });
    localStorage.setItem("Users", JSON.stringify(objectUser));
    renderUser(objectUser);
  }