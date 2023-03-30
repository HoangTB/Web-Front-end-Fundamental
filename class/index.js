// Tính điểm trung bình của Toán, Lý, Hóa và tổng của nó

function bai_1(){
    // Number là method để chuyển đổi giá trị
    const mathMark = Number(prompt('Vui lòng nhập điểm Toán'))
    const chemMark = Number(prompt('Vui lòng nhập điểm Hóa'))
    const physMark = Number(prompt('Vui lòng nhập điểm Lý'))

    const averageMark =(mathMark+chemMark+physMark)/3;
    console.log('Tổng điểm trung bình 3 mông là:' , averageMark);
    console.log('Tổng điểm 3 môn là:', averageMark*3);
}
// Chuyển đổi đọ C sang F
function bai_2(){
    const C= prompt('Vui lòng nhập vào độ C');
    const F=(C*9) / 5+32;
    console.log(C+'độ C bằng' + F + 'Độ F');
}

// Diện tích hình tròn
function bai_3(){
    const r= prompt ('Nhập bán kính hình tròn');
    const PI= 3.14;
    const S=PI*r*r;
    // thuộc tính làm tròn toFixed
    console.log('Diện tích hình trong là:', S.toFixed(2));
}

// Chu vi hình tròn

function bai_4(){
    const r= prompt ('Nhập bán kính hình tròn');
    const PI= 3.14;
    const S=(2*r)*PI;
    // thuộc tính làm tròn toFixed
    console.log('Bán kính hình tròn là:', S.toFixed(2));
}