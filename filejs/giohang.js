let gioHang= [];
function displayGiohang(gioHang){
    let d = "<table>";
    d += "<tr><td>Product's Name</td><td>Quantity</td><td>Price</td><td>Action</td></tr>"
    for (let j = 0; j < gioHang.length; j ++){
        d += "<tr>"
        d += "<td><h2>" + gioHang[j] + "</h2></td>"
        d += "<td><p>Price: " + gioHang[j] + "</p></td>"
        d += "<td><p>Giá: " + gioHang[j] + " VND</p></td>"
        d += "<td><button id='1' onclick=\"remove(" + (j +1) + ")\"> Remove</button></td></tr>"
    }
    // console.log(d)
    document.getElementById("ds1").innerHTML = d

}

displayGiohang(gioHang)
function addCart(index){
    gioHang.push(matHang[index])
    displayGiohang(gioHang)
}
function remove(index){
    gioHang.splice(index, 1);
    displayGiohang(gioHang)
}
//
// let dh1 = new Product("Đồng hồ 1","https://ucollection.itembox.design/product/023/000000002398/000000002398-01-xl.jpg?t=20220526114909",200.000)
// let dh2 = new Product("Đồng hồ 2","https://ucollection.itembox.design/product/023/000000002397/000000002397-01-xl.jpg?t=20220526114909", 200.000)
// let dh3 = new Product("Đồng hồ 3","https://ucollection.itembox.design/product/023/000000002399/000000002399-01-l.jpg?t=20220526114909", 200.000)
// let dh4 = new Product("Đồng hồ 4",  "https://ucollection.itembox.design/product/023/000000002392/000000002392-01-l.jpg?t=20220526114909",200.000)
// let dh5 = new Product("Đồng hồ 5", "https://ucollection.itembox.design/product/023/000000002380/000000002380-01-l.jpg?t=20220526114909",200.000)
// let dh6 = new Product("Đồng hồ 6","https://ucollection.itembox.design/product/023/000000002368/000000002368-01-l.jpg?t=20220526114909",200.000)
// let arraydh = [dh1, dh2, dh3, dh4, dh5, dh6];
// displayGiohang(arraydh)