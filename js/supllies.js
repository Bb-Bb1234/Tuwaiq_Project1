const obj4 = [{
    name: "headspeeker",
    model: "1118",
    price: "35",
    specs:"ios 10 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/mml1.png"

},{
    name: "keyboard",
    model: "key0002",
    price: "50",
    specs:"ios 11 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/mml2.jpg"
    
},{
    name: "printer",
    model: "P1112",
    price: "150",
    specs:"ios 13 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/mml3.jpg"
},];


$("#add1").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj4[0]))
    console.log(obj4[0]);

});
$("#add2").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj4[1]))

});
$("#add3").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj4[2]))
});