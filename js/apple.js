const obj = [{
    name: "ipad",
    model: "8",
    price: "1050",
    specs:"ios 10 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/Aplle.img",

},{
    name: "Iphone",
    model: "12",
    price: "2500",
    specs:"ios 11 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/Apllebbb.img",

},{
    name: "Iphone",
    model: "10",
    price: "2800",
    specs:"ios 13 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/Apllebbbl.jpg",
},];







$("#ipad").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj[0]))
    console.log(obj[0]);

});
$("#Iphone1").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj[1]))

});
$("#Iphone2").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj[2]))
});
// $("#andr4").click(()=>{
//     window.localStorage.setItem("product",JSON.stringify(obj[0]))
// });


