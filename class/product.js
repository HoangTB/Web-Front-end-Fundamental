const input = [];
function addList() {
    const textInput = document.querySelector("#textInput").value;
    input.push(textInput);
    console.log(input);
    renDer(input);

}

renDer(input);
function renDer(data) {
    const table = document.querySelector("table");
    let contenTables =
        `<tr>
                <th>Stt</th>
                <th>Name</th>
                <th colspan ="2">Action</th>
        </tr>`

        data.forEach((input, index) => {

            contenTables += `
            <tr>
            <td>${index +1}</td>
            <td><input value="${input}" readonly id="input-${index}"></td>
            <td><input type="button" value="Edit" onclick="editList(${index})"></td>
            <td><input type="button" value="Delete" onclick="deleteList(${index})"></td>
            </tr>`;
            
        });
        table.innerHTML = contenTables;
}


function editList (index){
    const textEdit = document.querySelector("#textInput");
    textEdit.value = input[index];
    textUpdate = document.querySelector("textUpdate");

}