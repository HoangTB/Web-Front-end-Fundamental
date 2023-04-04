let content = "";
for ( let m = 1 ; m <= 10; m++){
    content += "<tr>";
    for( let n = 2; n <= 10 ; n++ ){

        content += `<td> ${n}  x  ${m} = ${m*n} </td>`;
    }
    content += "</tr>";
}
const table = document.querySelector("table");
table.innerHTML = content;