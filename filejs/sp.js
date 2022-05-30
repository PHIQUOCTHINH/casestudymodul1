let matHang = []
let gia = []
let image = []
function hienThi(matHang) {
    let s = "<table>";
    for (let i = 0; i < matHang.length; i++) {
            s += "<td>"
            s += "<img alt='lỗi' width='150px'height='150px' src="  + matHang[i].image  + " /> "
            // s += "<img alt='lỗi' width='150px'height='150px' src='../filehtml/新しいフォルダー/725b18bc1901d85f8110.jpg' /> "
            s += "<h2>" + matHang[i].name + "</h2>"
            s += "<h2>" + gia[i] + "</h2>"
            s += "<h2>" + image[i] + "</h2>"
            s += "<p>Giá: " + matHang[i].gia + " VND</p>"
            s = s + (i + 1) + ". " + matHang[i] + "<button onclick=\"edit(" + i + ")\"> Edit</button>\n" +
                "<button onclick=\"xoa(" + i + ")\">Delete</button>\n" + "<button onclick=\"addCart(" + i + ")\">+Cart</button>\n" + "<br>";
        }

    console.log(s)
    document.getElementById("ds").innerHTML = s
}





function add() {

        let newMatHang = document.getElementById("them").value
        let newGia = document.getElementById("them1").value
        let newImage = document.getElementById("them2").value

        matHang.push(newMatHang);
        gia.push(newGia)
        gia.push(newImage)


        hienThi(matHang, gia,image);


}

function edit(index) {
    let newMatHang = prompt("Nhập tên mặt hàng thay thế: ");
    let newGia = prompt("Nhập tên mặt hàng thay thế: ");

    matHang[index] = newMatHang;
    gia[index] = newGia;

    hienThi(matHang, gia );
    // let name = document.getElementById("name").value;
    // let price = document.getElementById("price").value;
    // let image = document.getElementById("image").value;

}
function xoa(index) {
    matHang.splice(index, 1);
    hienThi(matHang);
}



class Product {
    name;
    image;
    gia;

    constructor(name, image, gia) {
        this.name = name;
        this.image = image;
        this.gia=gia
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }
    getGia() {
        return this.gia;
    }


    setName(name) {
        this.name = name;
    }

    setImage(image) {
        this.image = image;
    }

    setGia(gia) {
        this.gia=gia;
    }

}

let dh1 = new Product("Đồng hồ 1","https://ucollection.itembox.design/product/023/000000002398/000000002398-01-xl.jpg?t=20220526114909",200.000)
let dh2 = new Product("Đồng hồ 2","https://ucollection.itembox.design/product/023/000000002397/000000002397-01-xl.jpg?t=20220526114909", 200.000)
let dh3 = new Product("Đồng hồ 3","https://ucollection.itembox.design/product/023/000000002399/000000002399-01-l.jpg?t=20220526114909", 200.000)
let dh4 = new Product("Đồng hồ 4",  "https://ucollection.itembox.design/product/023/000000002392/000000002392-01-l.jpg?t=20220526114909",200.000)
let dh5 = new Product("Đồng hồ 5", "https://ucollection.itembox.design/product/023/000000002380/000000002380-01-l.jpg?t=20220526114909",200.000)
let dh6 = new Product("Đồng hồ 6","https://ucollection.itembox.design/product/023/000000002368/000000002368-01-l.jpg?t=20220526114909",200.000)
let arraydh = [dh1, dh2, dh3, dh4, dh5, dh6];
hienThi(arraydh)