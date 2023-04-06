function ex1() {
    const listNumber = [];
    const result_1 = document.querySelector("#result_1");
    const result_Number = "";
  

  for (let i = 0; i < 10; i++) {
    const input = parseInt(prompt(`Nhập phần tứ thứ ${i + 1}`));
    listNumber.push(input);
  }
  let count = 0;
  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 10) {
      count ++;
    
     

    }
  }
  result_1.innerHTML = "Có " + count + " số lớn hơn hoặc bằng 10";
  
}
