function handelAdd(){
    const addForm = document.getElementById("formAdd");


    if(addForm.style.left==="-50%"){
        addForm.style.left = "25%";
    }else{
        addForm.style.left = "-50%";
    }  
}

function handelSave() {
    const idAdd = document.querySelector("#id");
    const imageAdd = document.querySelector("#image");
    const nameAdd = document.querySelector("#name");
    const sloganAdd = document.querySelector("#slogan");
    const vehiclesAdd = document.querySelector("#vehicles");
    const seatAdd = document.querySelector("#seat");
    const distanceAdd = document.querySelector("#distance");
    const speedAdd = document.querySelector("#speed");
    const priceAdd = document.querySelector("#price");
    let isDulicate = false;
    objectProduct.forEach((object) => {
        if(object.id === idAdd){
            isDulicate = true;
            return;
        }
    });
    if (isDulicate || !idAdd){
        return alert("ID trùng hoặc trống");
    }
    const Newobject = {};
    Newobject.id = objectProduct[objectProduct.length-1].id + 1;
    Newobject.image = "./images/" + imageAdd.value.slice(12);
    Newobject.name = nameAdd.value;
    Newobject.slogan = sloganAdd.value;
    Newobject.vehicles = vehiclesAdd.value;
    Newobject.seat = seatAdd.value;
    Newobject.distance = distanceAdd.value;
    Newobject.speed = speedAdd.value;
    Newobject.price = priceAdd.value;
    objectProduct.push(Newobject);  
    
    console.log(objectProduct);
    localStorage.setItem("object",JSON.stringify(objectProduct));
    renderProducts(objectProduct); 
}