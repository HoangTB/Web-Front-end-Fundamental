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
    if (b > max){
        alert(b + " Là số nguyên có giá trị lớn nhất" );
    } if (c > max){
        alert(c + " Là số nguyên có giá trị lớn nhất" ); 

    } else alert(a + " Là số nguyên có giá trị lớn nhất" );
}

