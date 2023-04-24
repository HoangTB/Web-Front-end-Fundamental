const usersDB = JSON.parse(localStorage.getItem("acount")) ?? [];
// Render

render(usersDB);
function render(usersDB){
    const form = document.querySelector(".form");
    let contentForm = "";
    usersDB.forEach((data, index) => {
        contentForm += `
        <tbody class="form">
        <tr>
            <td>${index+1}</td>
            <td>${data.name}</td>
            <td>${data.year}</td>
            <td>${data.sex}</td>
            <td><input type="button" name="" id="edit" value="Edit" onclick="handelEdit('${data.id}')"> <input type="button" name="" id="delete" value="Delete" onclick="handelDelete('${data.id}')"></td>
        </tr>
    </tbody>
        `;
    });
    form.innerHTML = contentForm;
}

// Create

function handelAdd(){
    const addId = document.querySelector("#id").value;
    const addName = document.querySelector("#name").value;
    const addYear = document.querySelector("#year").value;
    const addSex= document.querySelector("#sex").value;
    const user ={
        id:addId,
        name:addName,
        year:addYear,
        sex:addSex, 
    }
    let isDulicate = false;
    usersDB.forEach((data)=>{
        if(data.id === addId){
            isDulicate = true;
        }
    });
    if(isDulicate){
        alert("ID trùng");
        return;
    }
    usersDB.push(user);
    localStorage.setItem("acount", JSON.stringify(usersDB));
    render(usersDB);
}

// Edit

function handelEdit(id){
    dataEdit = {};
    usersDB.forEach((item) => {
        if(item.id === id){
            dataEdit = item;
        }
    });
    
    const editId = document.querySelector("#id");
    const editName = document.querySelector("#name");
    const editYear = document.querySelector("#year");
    const editSex = document.querySelector("#sex");
    editId.value = dataEdit.id;
    editName.value = dataEdit.name;
    editYear.value = dataEdit.year;
    editSex.value = dataEdit.sex;
    const btnUpdate = document.querySelector("#update");
    if (btnUpdate.style.display === "none"){
        btnUpdate.style.display = "block";
    } else {
        btnUpdate.style.display = "none";
    }
}

// Update

function handelUpdate(){
    const updateId = document.querySelector("#id").value;
    const updateName = document.querySelector("#name").value;
    const updateYear = document.querySelector("#year").value;
    const updateSex = document.querySelector("#sex").value;
    const dataUpdate = {
        id:updateId,
        name:updateName,
        year:updateYear,
        sex:updateSex,
    }

    usersDB.forEach((data, index) => {
        if(data.id === dataUpdate.id){
            usersDB.splice(index, 1, dataUpdate);
        }
    });
    localStorage.setItem("acount", JSON.stringify(usersDB));
    render(usersDB);
}

// Delete

function handelDelete(id){
    usersDB.forEach((data, index) =>{
        if(data.id === id){
            usersDB.splice(index, 1);
        }
    });
    localStorage.setItem("acount", JSON.stringify(usersDB));
    render(usersDB);
}

// Search

function handelSearch(){
    const contentSearch = document.querySelector("#search").value;
    const search = usersDB.filter((data) => 
    data.name.toLowerCase().includes(contentSearch.toLowerCase()));
    render(search);
}