

renderOrder()
function renderOrder() {
    const Order = JSON.parse(localStorage.getItem("Order"));
    let contentOrder = document.querySelector(".content-product");

    let onLoadOrder = "";
    Order.forEach((element) => {
        let productOder = Object.values(element).map(product => product.product);
            const productNames = Object.keys(productOder.reduce((result, obj) => ({ ...result, ...obj }), {}));
            console.log(productNames);
        element.forEach((value, key) => {
 
            onLoadOrder += `
        <tr>
        <td class="text-center pt-4">${key + 1}</td>
        <td class="pt-4"><b>Email: </b> <span>${value.email}</span>
        <td class="pt-4"><b>Tên sản phẩm: </b> <span>${productNames }</span></td>
        <td class="pt-4"><b>Số lượng: </b> <span>${value.cartnumber}</span></td>
        <td class="pt-4"><b>Tổng Giá: </b> <span>${value.totalprice.toLocaleString("de-DE")+" VND"}</span></td>
        <td class="text-center pt-4">
            <button>Trạng thái</button>
        </td>
    </tr>
        `
        })
        contentOrder.innerHTML = onLoadOrder;


    });

}
