  // Tạo một đối tượng Date để lấy ngày hiện tại
  var currentDate = new Date();

  // Lấy thông tin ngày, tháng và năm từ đối tượng Date
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Tháng trong JavaScript được đánh số từ 0 đến 11, vì vậy cần cộng thêm 1
  var year = currentDate.getFullYear();
  
  // Tạo chuỗi ngày tháng để in ra
  var dateStr = day + "/" + month + "/" + year;
  handelHistory()
  function handelHistory() {
      const OrderHistory = JSON.parse(localStorage.getItem("Order"));
      console.log(OrderHistory  );
      const User = JSON.parse(localStorage.getItem("User"));
      let contentHistory = document.querySelector(".content-history");
      let onLoadHistory = "";
      OrderHistory.forEach((element, index) => {
        element.forEach((value) => { 
          
          if(value.email === User.email){
            onLoadHistory += `
            <tr>
            <td class="text-center pt-4">${index+1}</td>
            <td class="pt-4"><b>Email: </b> <span>${value.email}</span>
            <td class="pt-4"><b>Ngày mua hàng: </b> <span>${dateStr}</span></td>
            <td class="pt-4"><b>Số lượng: </b> <span>${value.cartnumber}</span></td>
            <td class="pt-4"><b>Tổng Giá: </b> <span>${value.totalprice.toLocaleString("de-DE")+" VND"}</span></td>
            <td><button>Chi tiết</button></td>
        </tr>
            `;
      
          }

          });
          contentHistory.innerHTML = onLoadHistory;
  
  
      });
  
  }
  

  