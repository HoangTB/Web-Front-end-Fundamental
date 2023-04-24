const objectProduct = [
    {
    id: 1,
    image: "./images/vf5.png",
    name: "VF 5 Plus",
    vehicles: "Động cơ điện",
    distance: "> 300 Km", 
    detail:"VF 5 Plus sở hữu kế thiết kế hiện đại, trẻ trung, cá tính và nổi bật với 35 lựa chọn phối màu nội ngoại thất, đảm bảo cá nhân hoá theo phong cách sống, cá tính và sở thích của mỗi Khách hàng.",
    price: " Từ 458.000.000 VNĐ",
    
},
{
    id: 2,
    image: "./images/vf34.gif",
    name: "VF e34",
    vehicles: "Động cơ điện",
    detail:"VinFast ra mắt VF e34, mẫu C-SUV với thiết kế tinh tế, thân thiện với người dùng cùng loạt công nghệ thông minh hiện đại, hứa hẹn nâng tầm trải nghiệm Khách hàng.",
    distance: "~ 285 Km",
    price: " Từ 710.000.000 VNĐ",
},
{
    id: 3,
    image: "./images/vf8.png",
    name: "VF 8",
    vehicles: "Động cơ điện",
    detail:"VF 8 đạt đến sự kết hợp hoàn hoàn hảo giữa chất lượng và giá trị thông qua công nghệ cao cấp, kỹ thuật sản xuất đặc biệt và dịch vụ tận tâm.",
    distance: "~ 420 Km",
    price: " Từ 1.129.000.000 VND",
},
{
    id: 4,
    image: "./images/vf9.png",
    name: "VF 9",
    vehicles: "Động cơ điện",
    detail:"VF 9 là mẫu xe SUV 7 chỗ hàng đầu của VinFast. Với kiểu dáng tinh tế, công nghệ tiên tiến nhất và sự tỉ mỉ trong từng chi tiết, VF 9mang đến trải nghiệm đặc biệt cao cấp cho người sở hữu.",
    distance: "~ 438 Km",
    price: " Từ 1.491.000.000 VND",
},
{
    id: 5,
    image: "./images/lux.gif",
    name: "LUX A2.0",
    vehicles: "Động cơ xăng",
    detail:"Sự kết hợp giữa dáng vẻ khỏe khoắn và cấu trúc hoàn hảo của ngoại thất tạo nên điểm nhấn sang trọng nhưng vẫn đầy tinh tế cho LUX A2.0, thổi làn gió mới vào thiết kế đặc hữu của dòng sedan thông thường.",
    distance: "~ 6.9l/100 Km",
    price: "Từ 1.115.120 VND",
},

{
    id: 6,
    image: "./images/luxsa.png",
    name: "LUX SA2.0",
    vehicles: "Động cơ xăng",
    detail:"Đột phá trong từng đường nét thiết kế, đón đầu xu hướng thời thượng nhưng vẫn mang đậm bản sắc Việt, LUX SA2.0 hứa hẹn trở thành một hiện tượng mới trên đường phố, chinh phục mọi ánh nhìn.",
    distance: "~ 7.9l/100 Km",
    price: "Từ 2.115.120 VND",
},
{
    id: 7,
    image: "./images/fadil.png",
    name: "FALDI",
    vehicles: "Động cơ xăng",
    detail:"Các đường nét thiết kế mang hơi thở châu Âu hòa quyện cùng những điểm nhấn đặc trưng của tinh thần Việt tạo nên một mẫu hatchback lý tưởng cho đô thị, nhỏ gọn và thông minh, sẵn sàng chinh phục mọi cung đường thành phố.",
    distance: "~ 5,8l/100km",
    price: "Từ 558.000.000 VNĐ",
},
{
    id: 8,
    image: "./images/president.png",
    name: "PRESIDENT",
    vehicles: "Động cơ xăng",
    distance: "~ 15,83l/100km",
    detail:"President là chiếc SUV bề thế với thiết kế sang trọng cùng những đường gân dập nổi, lưới tản nhiệt hình kim cương ấn tượng và 18 lựa chọn màu sơn độc đáo để khẳng định khí chất riêng biệt của chủ nhân.",
    price: "Từ 4.710.000.000 VNĐ",
},

{
    id: 9,
    image: "./images/ludo.png",
    name: "LUDO",
    vehicles: "Động cơ điện",
    distance: "Lên tới 75km/ 1 lần sạc",
    detail:"Vóc dáng gọn nhẹ và hiện đại khẳng định chất riêng của giới trẻ thành thị.",
    price: "Giá từ 12.950.000 VND",
},
{
    id: 10,
    image: "./images/tempest.png",
    name: "TEMPEST",
    vehicles: "Động cơ điện",
    distance: "Lên tới 80km/ 1 lần sạc",
    detail:"Phong cách thiết kế hiện đại, năng động và trẻ trung cùng sự chấm phá độc đáo trong cách kết hợp màu sắc và họa tiết thân xe, Tempest tỏa ra khí chất riêng biệt, phá cách đầy sức hút.",
    price: "Giá từ 19.350.000 VND",
},
{
    id: 11,
    image: "./images/evo.png",
    name: "EVO",
    vehicles: "Động cơ điện",
    distance: "Lên tới 203km/ 1 lần sạc",
    detail:"Chinh phục quãng đường lên tới khoảng 203 km chỉ với một lần sạc (theo điều kiện tiêu chuẩn của VinFast).",
    price: "Giá từ 22.350.000 VND",
},

{
    id: 12,
    image: "./images/klaras.png",
    name: "KLARAS",
    vehicles: "Động cơ điện",
    distance: "Lên tới 194km/ 1 lần sạc",
    detail:"Động cơ Inhub do VinFast nghiên cứu và phát triển thân thiện với môi trường. Công suất tối đa 3000W.",
    price: "Giá từ 36.950.000 VND",
},

{
    id: 13,
    image: "./images/felizs.png",
    name: "FELIZS",
    vehicles: "Động cơ điện",
    distance: "Lên tới 198km/ 1 lần sạc",
    detail:"Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
    price: "Giá từ 29.950.000 VND",
},

{
    id: 14,
    image: "./images/ventos.png",
    name: "VENTOS",
    vehicles: "Động cơ điện",
    distance: "Lên tới 160km/ 1 lần sạc",
    detail:"Phanh đĩa trước trang bị ABS, phanh đĩa sau Giảm xóc ống lồng - giảm chấn thủy lực; giảm xóc đôi, giảm chấn thủy lực.",
    price: "Giá từ 56.350.000 VND",
},

{
    id: 15,
    image: "./images/theon.png",
    name: "THEON",
    vehicles: "Động cơ điện",
    distance: "Lên tới 200km/ 1 lần sạc",
    detail:"Tốc độ tối đa lên đến 90km/h. Khả năng tăng tốc từ 0-50km/h trong vòng 6 giây.",
    price: "Giá từ 63.950.000 VND",
},

{
    id: 16,
    image: "./images/theons.png",
    name: "THEON S",
    vehicles: "Động cơ điện",
    distance: "Lên tới 220km/ 1 lần sạc",
    detail:"Động cơ điện đặt tại vị trí trung tâm, truyền động bằng dây xích, sản sinh công suất tối đa 7100W.",
    price: "Giá từ 69.950.000 VND",
},
];




// load ko maat data

const objectDBlist = JSON.parse(localStorage.getItem("object")); 
if(!objectDBlist){
    localStorage.setItem("object",JSON.stringify(objectProduct));
}

