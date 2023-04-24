const data = [

];

const objectDBlist = JSON.parse(localStorage.getItem("data")); 
if(!objectDBlist){
    localStorage.setItem("data", JSON.stringify(data));
}

