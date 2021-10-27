const obj3 = [{
    name: "computer",
    model: "000028",
    price: "3500",
    specs:"ios 10 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/comb1.jpg"

},{
    name: "computer",
    model: "322201",
    price: "3999",
    specs:"ios 11 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/comb2.png"
    
},{
    name: "compeuter",
    model: "01110",
    price: "2999",
    specs:"ios 13 \n ram: 15gb",
    images:"../Tuwaiq_Project1/images/comb3.jpg"
},];


$("#ad10").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj3[0]))
    console.log(obj3[0]);

});
$("#ad12").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj3[1]))

});
$("#ad21").click(()=>{
    window.localStorage.setItem("product",JSON.stringify(obj3[2]))
});