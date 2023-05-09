
let objectUser = JSON.parse(localStorage.getItem("Acount"));

renderUser(objectUser);
function renderUser(objectUser) {
    const listUser = document.querySelector(".content-user");
    let contentUser = "";
    objectUser.forEach((object, index) => {


        if(object.active === true){
          contentUser += `
 
                    <tr>
                        <td class="text-center">${index+1}</td>
                        <td class=""><b>Email: </b> <span>${object.email}</span></td>
                        <td class=""><b>Active: </b> <span class="text-primary active-User">Đang hoạt động</span></td>
                        <td class="text-center">
                            <button onclick="handleBlock('${object.email}')">Block</button>
                        </td>
                    </tr>
  
        `;
        } else {
          contentUser += `

                    <tr>
                        <td class="text-center">${index+1}</td>
                        <td class=""><b>Email: </b> <span>${object.email}</span></td>
                        <td class=""><b>Active: </b> <span class="text-danger active-User">Đang bị khóa</span></td>
                        <td class="text-center">
                            <button onclick="handleBlock('${object.email}')">Unblock</button>
                        </td>
                    </tr>
       
        `;
        }
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
function handleBlock(email) {
    let objectUser = JSON.parse(localStorage.getItem("Acount"));
    objectUser.forEach((object) => {
      if(object.email == email){
        if (object.active === true) {
          object.active = false;
        } 
        else{
          object.active = true;
        }

      }

    });
    localStorage.setItem("Acount", JSON.stringify(objectUser));
    renderUser(objectUser);
  }