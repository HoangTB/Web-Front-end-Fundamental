// Hiển thị từ 1 đến 99

function ex1(){
for (let i = 1 ; i < 100; i ++) {
    console.log(i);
} if (i = 99){
    alert("Đã Hoàn Thành");
}
}

// Kiểm tra nhiệt độ

function ex2(){
    const n = document.getElementById("temperature").value;
    do {    
        if(n > 30){
            document.getElementById("outputResult").innerHTML="Vui lòng giảm nhiệt độ";
            break;
        } else if (n < 20) {
            document.getElementById("outputResult").innerHTML="Vui lòng tăng nhiệt độ";
            break;

        } else{
           
            document.getElementById("outputResult").innerHTML =  "Nhiệt độ đã ổn định";
        }
    } while ( n > 30 || n < 20)
}



function ex3(){
    const n = document.getElementById("prime").value;
    let isPrime = true;
    if (n < 2){
        isPrime = false;
    } else{
        for(let i = 2 ; i < n ; i++){
            if (n % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime){
        document.getElementById("outputPrime").innerHTML= n + " là số nguyên tố";
    } else  {
        document.getElementById("outputPrime").innerHTML= n + " không là số nguyên tố";
}
  
}


 function ex5(){
    const totalPrime = document.getElementById("prime_2").value;
    let countPrime = 0;
    let n = 2;
    let primeString="";

while(countPrime < totalPrime ){
    let isPrime= true;
    for (let i = 2; i < n; i++){
        if (n%i==0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        countPrime++;
        primeString = primeString + " " +""+ " " + n;
    }
    n++;
}
document.getElementById("outputPrime").innerHTML= primeString;

}

function ex6(){
    const n = document.getElementById("prime_3").value;
    let m = " ";
    for (let i = 1 ; i <= n ; i++ ){
        if(n % i == 0){
            m = m + i + ",";

        } 

    } document.getElementById("outputPrime_2").innerHTML= "Ước là " + m ;
}



function ex7(){
    const n = document.getElementById("prime_4").value;
    sum = 0;
    
    for (i=1;i<n; i++){
         if (n % i == 0){
            sum = sum + i;
         }
    }
    if (sum-n== 0) {
        document.getElementById("outputPrime_3").innerHTML= n + " là số hoàn hảo";

    } else document.getElementById("outputPrime_3").innerHTML= n + " không phải là số hoàn hảo";
}

function ex8() {
    let input_num = document.getElementById("prime_5");
    let N = 7;
    let total = 0;
    let num = input_num.value;
    for (let i = 0; i < num; ) {
      if (N % 7 == 0) {
        total= total + N;
        i++;
      }
      N++;
    }
    document.getElementById("outputPrime_4").innerHTML=total;
  }

  function ex9() {
    let n = Number(document.getElementById("prime_6").value);
    let a = 0;
    let b = 1;
    let fibo = 0;
    let s = '';
    let sum = ''
    for (i = 0; i < n; i++ ) {
        fibo = a + b;
        a = b;
        b = fibo;
        s = s + fibo + ',';
      }    

    
      document.getElementById("outputPrime_5").innerHTML=s;

    }
    function ex10() {
        let n = Number(document.getElementById("prime_7").value);
        s = '';
        for (i = 1  ; i <= n; i++ ) {
            if (i % 3 == 0){
                s = s + "Fizz" + " - ";
         
                
            }if (i % 5 == 0){
                s = s + "Buzz" + " - ";
             
             
            }if (i % 3 == 0 && i % 5 == 0){
                s = s + "FizzBuzz" + " - ";
            } 
          }    
    
        
     document.getElementById("outputPrime_6").innerHTML=s;
    
        }
        
        function ex11() {
            let n = Number(prompt("Mời bạn nhập số ngẫu nhiên từ 1 đến 5"));
            let  random = getRandom(1, 5);
             
                if(n == random){
                    console.log(n);
                    console.log("số ngẫu nhiên là " + random);
                    document.getElementById("outputPrime_7").innerHTML = "Chúc mừng bạn";

                } else {
                    console.log(n);
                    console.log("số ngẫu nhiên là " + random);
                    document.getElementById("outputPrime_7").innerHTML = "Sai rồi nhập lại";
                }
                
            

    }
 function getRandom(min, max){
     return Math.floor(Math.random() * (max-min+1)) + min;
 }



// function ex13() {

//     let N=6;
//     for ( let i = 1 ; i <= N; i++){
        
//         for(j = 1 ; j < i; j++){
//             document.write("*");

//         } document.write("<br>");
    
//     }
    

// }
        



// function ex14() {

//     let N=6;
    
//         for(i = 1 ; i <= N; i++){
            
//             for(j = 6 ; j > i; j--){
//                 document.write("*");
//             }document.write("<br>");

//         } 
    
    

// }


// function ex15() {

//     let N=5;

//     for ( let i = 1 ; i <= N; i++){
       
   
//         for(j = 1 ; j <= i-1; j++){
//             document.write("&nbsp;&nbsp;");
          
//             }  for(k = 1 ; k <= 5-i+1; k++){
//                 document.write("*");
                
        
            

//         } document.write("<br>");


    
//     }

// }


// function ex16() {

//     let N=5;

//     for ( let i = N ; i >=1 ; i--){
       
   
//         for(j = 1 ; j <= i-1; j++){
//             document.write("&nbsp;&nbsp;");
          
//             }  for(k = 1 ; k <= 5-i+1; k++){
//                 document.write("*");
                
        
            

//         } document.write("<br>");


    
//     }

// }

    
function ex12() {
    let content = "";
    const start = "*";
    const space = "&nbsp;&nbsp;";
    const n = Number(document.getElementById("prime_8").value);
  
    for (let i = 1; i <= n; i++) {
      content += space.repeat(n - i);
      content += start.repeat(i);
      content += "<br>";
    }
    const printTriangle = document.querySelector("#print-triangle");
    printTriangle.innerHTML = content;
  }       

  function ex13() {
    let content = "";
    const start = "*";
    const space = "&nbsp;&nbsp;";
    const n = Number(document.getElementById("prime_8").value);
  
    for (let i = 1; i <= n; i++) {
    content += start.repeat(i);
      content += space.repeat(n - i);
      
      content += "<br>";
    }
    const printTriangle = document.querySelector("#print-triangle");
    printTriangle.innerHTML = content;
  }       

  function ex14() {
    let content = "";
    const start = "*";
    const space = "&nbsp;&nbsp;";
    const n = Number(document.getElementById("prime_8").value);
  
    for (let i = n; i > 0; i--) {
      content += space.repeat(n - i);
      content += start.repeat(i);
      content += "<br>";
    }
    const printTriangle = document.querySelector("#print-triangle");
    printTriangle.innerHTML = content;
  }  
        

  function ex15() {
    let content = "";
    const start = "*";
    const space = "&nbsp;&nbsp;";
    const n = Number(document.getElementById("prime_8").value);
  
    for (let i = n; i > 0; i--) {
    content += start.repeat(i);
      content += space.repeat(n - i);
      
      content += "<br>";
    }
    const printTriangle = document.querySelector("#print-triangle");
    printTriangle.innerHTML = content;
  }  
     
  
  function ex16() {
    let content = "";
    const start = "*";
    const space = "&nbsp;&nbsp;";
    
    const h = Number(document.getElementById("prime_8").value);
    const w = h * 4; 
    for (let col = 1; col <= h; col++) {

        for(let row = 1 ; row <= w; row++){
            if(col == 1 || row == 1 || col == h|| row == w){
            content += start;
        } else{
            content += space;
        }

            }content += "<br>";
        }

           
        


    const printTriangle = document.querySelector("#print-triangle");
    printTriangle.innerHTML = content;
  }  
        
