const obj = [{
    name: "ipad",
    model: "8",
    price: "1050",
    specs:"ios 10 \n ram: 15gb",
},{
    name: "Iphone",
    model: "12",
    price: "2500",
    specs:"ios 11 \n ram: 15gb",
},{
    name: "Iphone",
    model: "10",
    price: "2800",
    specs:"ios 13 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/Apllebbb.img",
},];

$('#details-img').attr('src','images/Apllebbb.img');
$('#pic1').attr('src','images/img,ipl.jpg');
$('#pic2').attr('src','images/Apllebbb.img');
$('#pic3').attr('src','images/Apllebbbl.jpg');


$("#ipad").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj[0]))
})