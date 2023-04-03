function ex1(){
    const a = Number(prompt("Nhập số a"));
    const b = Number(prompt("Nhập số b"));
    if (a % b == 0){
        alert(a + " chia hết cho " + b);
    }else alert (a +" không chia hết cho" + b);
}

function ex2(){
    const eyes = Number(prompt("Nhập tuổi của bạn"));
    if (eyes >= 16){
        alert("Đủ điều kiện ");
    }else alert ("Không đủ điều kiện");
}

function ex3(){
    const n = Number(prompt("Nhập số nguyên bất kì"));
    if (n > 0){
        alert(n +" Lớn hơn 0" );
    }else alert(n +" Nhỏ hơn 0");
}

function ex4(){
    const a = Number(prompt("Nhập số nguyên a"));
    const b = Number(prompt("Nhập số nguyên b"));
    const c = Number(prompt("Nhập số nguyên c"));
    const max = a ;
    if (a > b && a > c){
        alert(a + " Là số nguyên có giá trị lớn nhất" );
    } else if (b > a && b > c){
        alert(b + " Là số nguyên có giá trị lớn nhất" ); 

    } else alert(c + " Là số nguyên có giá trị lớn nhất" );
}


function ex5(){
    const a = Number(prompt("Nhập điểm bài kiểm tra"));
    const b = Number(prompt("Nhập điểm thi giữa kỳ"));
    const c = Number(prompt("Nhập điểm thi cuối kỳ"));
    if ((a + b + c)/3 >= 8){
        alert(" Xếp hạng giỏi");
    } else if ((a + b + c)/3 >= 7){
        alert( " Xếp hạng khá" ); 

    } else alert(" Xếp hạng trung bình" );
}


function ex6(){
    const n = Number(prompt("Nhập doanh thu năm nay"));
    if (n ==  100000000){
        alert("Hoa hồng của bạn là: " + n*0.05);
    } else if ( n == 110000000){
        alert( " Hoa hồng của bạn là: " + n*0.07); 

    } else if (n > 110000000){
        alert( " Hoa hồng của bạn là: " + n*0.1); 
    }else alert( "Không đủ chỉ tiêu");
}

