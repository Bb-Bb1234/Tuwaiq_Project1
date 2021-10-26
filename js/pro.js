// const indrued={
//     name:"gg",
//     price:"1000",

// }
// for (const key in indrued) {
    
// }



$('#login').click(function() {
    let userName = $('#username').val();
    let password = $('#password').val();
    
    if (userName === "Bader" && password === "123") {
        open('index.html');
    }else{
        alert("Wrong Data !!!");
    }
});
