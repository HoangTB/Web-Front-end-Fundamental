let objectPlayer = [{
    id: "1",
    image: "./images/ronaldo.jpg",
    first: "Cristiano",
    last: "Ronaldo",
    username: "ronaldo@gmail.com",

},
{
    id: "2",
    image: "./images/mbappe.jpg",
    first: "Kylian",
    last: "Mbappe",
    username: "kilianmbappe@gmail.com"

},
{
    id: "3",
    image: "./images/foden.jpg",
    first: "Phil",
    last: "Foden",
    username: "findfoden@gmail.com"

},
{
    id: "4",
    image: "./images/rashford.jpg",
    first: "Marcus",
    last: "Rashford",
    username: "rashford@gmail.com",

},
{
    id: "5",
    image: "./images/kevin.jpg",
    first: "Kevin",
    last: "De bruyne",
    username: "kevin@gmail.com",

},
{
    id: "6",
    image: "./images/neymar.jpg",
    first: "JR",
    last: "Neymar",
    username: "neymar@gmail.com",


},
{
    id: "7",
    image: "./images/messi.jpg",
    first: "Lionel",
    last: "Messi",
    username: "messi@gmail.com",


}
]
function clickSave() {
    const avatarAdd = document.querySelector("#image");
    const firstAdd = document.querySelector("#first");
    const latsAdd = document.querySelector("#lats");
    const usernameAdd = document.querySelector("#username");
    console.log(avatarAdd,firstAdd,latsAdd,usernameAdd);
    const NewobjectPlayer = {};
    NewobjectPlayer.id = objectPlayer[objectPlayer.length-1].id+1;
    NewobjectPlayer.image = avatarAdd.value;
    NewobjectPlayer.first = firstAdd.value;
    NewobjectPlayer.last = latsAdd.value;
    NewobjectPlayer.username = usernameAdd.value;
    objectPlayer.push(NewobjectPlayer);
    console.log(NewobjectPlayer);
    renderProducts(objectPlayer);  
}

renderProducts(objectPlayer);
function renderProducts(data) {
    const table = document.querySelector("table");
    let contentTable = ` <tr>
    <th>#</th>
    <th>Avatar</th>
    <th>First</th>
    <th>Last</th>
    <th>UserName</th>
    <th>Action</th>
</tr>`;
    data.forEach((objectPlayer, index) => {
        contentTable += `<tr>
      <td>${index + 1}</td>
      <td><img src="${objectPlayer.image}" alt=""></td>
      <td>${objectPlayer.first}</td>
      <td>${objectPlayer.last}</td>
      <td>${objectPlayer.username}</td>
      <td><button id="editUser" onclick="editUser('${objectPlayer.id}')">Edit</button> 
      <button id="deleteUser" onclick="deleteUser('${objectPlayer.id}')">Delete</button></td>

    </tr>`;
    });
    table.innerHTML = contentTable;
}
console.log(objectPlayer);


// Tìm kiếm
function searchUser(value) {
    const searchPlayer = objectPlayer.filter(
        (data) =>
            data.first.toLowerCase().includes(value.toLowerCase()) ||
            data.last.toLowerCase().includes(value.toLowerCase()) ||
            data.username.toLowerCase().includes(value.toLowerCase())
    );
    renderProducts(searchPlayer);
    console.log(searchPlayer);
}
// Delete
function deleteUser(id) {
    console.log(id);
    objectPlayer.forEach((data, index) => {
        if (data.id === id){
            objectPlayer.splice(index, 1);
        }
    });
    renderProducts(objectPlayer);

}

// Create
function handleAdd() {
    updateForm = document.querySelector("#form");

    saveUser = document.querySelector("#saveUser");
    saveUser.style.display = "block";
    updateUser = document.querySelector("#updateUser");
    updateUser.style.display = "none";
    if(!updateForm.style.display||updateForm.style.display === "none"){
        updateForm.style.display = "block";

    } else{
        updateForm.style.display = "none";
    }
}  

// Edit
function editUser(){
    updateForm = document.querySelector("#form");
    updateUser = document.querySelector("#updateUser");
    updateUser.style.display = "block";
    saveUser = document.querySelector("#saveUser");
    saveUser.style.display = "none";
    if(!updateForm.style.display||updateForm.style.display === "none"){
        updateForm.style.display = "block";
    } else{
        updateForm.style.display = "none";
    }
    const idAdd = document.querySelector("#id").value;
    const avatarAdd = document.querySelector("#image").value;
    const firstAdd = document.querySelector("#first").value;
    const latsAdd = document.querySelector("#lats").value;
    const usernameAdd = document.querySelector("#username").value;
    const NewobjectPlayer = {};
    NewobjectPlayer.id = "user_"+idAdd;
    NewobjectPlayer.image = avatarAdd;
    NewobjectPlayer.first = firstAdd;
    NewobjectPlayer.last = latsAdd;
    NewobjectPlayer.username = usernameAdd;
    
}


