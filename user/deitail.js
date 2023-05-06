const url = new URL(document.URL);
const id = url.searchParams.get("id");
console.log(id);

function RenderDetail() {
    let Shoses = JSON.parse(localStorage.getItem("Shoses"));
    const elementDetail = document.querySelector(".content-detail");
    const elementImage = document.querySelector(".listimage-detail");
    let contentDetail = "";
    let contentImage = "";
    Shoses.forEach(element => {
        if (element.id == id) {
            contentDetail += `
            <div class="content-detail">
            <h2 class="text-danger">${element.name}</h2>
            <h4 class="fst-italic">${element.classify}</h4>
            <h6>${element.price} VND</h6>
        </div>
            `;

            contentImage += `

            <div class="col">
                <div class="card">
                    <img src="${element.image}" class="image-zoom" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image1}" class="image-zoom" alt="...">

                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image2}" class="image-zoom" alt="...">

                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="${element.image3}" class="image-zoom" alt="...">
                </div>
            </div>
            `;


        }
    });

    elementDetail.innerHTML = contentDetail;
    elementImage.innerHTML = contentImage;

} RenderDetail();
