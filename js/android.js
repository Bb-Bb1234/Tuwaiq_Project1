const obj1 = [{
    name: "android",
    model: "جالكسي",
    price: "990",
    specs:"ios 10 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/phonean.png"

},{
    name: "android",
    model: "جالكسي",
    price: "1199",
    specs:"ios 11 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/img4.jpg"
},{
    name: "android",
    model: "جالكسي",
    price: "799",
    specs:"ios 13 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/img.indr.webp"
},];


$("#ad1").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj1[0]))
    console.log(obj1[0]);

});
$("#ad2").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj1[1]))

});
$("#ad3").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj1[2]))
});