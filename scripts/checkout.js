// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = localStorage.getItem("amount");
//console.log(amount);
let wallet = document.getElementById("wallet");
    wallet.innerText = amount;


let movies = JSON.parse(localStorage.getItem("movie"))  ;
let movie_box = document.getElementById("movie")  
function movieCheck(){
   movies.map(function(el){
    let div = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = el.Poster;

    let title = document.createElement("h1");
    title.innerText = el.Title;

    div.append(title,poster) 
    movie_box.append(div)
   })
} 
movieCheck();

function value(id){
    return document.getElementById(id).value;
 }
 
function booking(){
    event.preventDefault()
    let name = value("user_name")
    let number = value("number_of_seats")
    let total = (number)*100;
    
    if(total>Number(amount)){
        console.log(total,amount)
        alert("Insufficient Balance!")
    }else{
        alert("Booking successful!");
        amount = (amount-total);
        localStorage.setItem("amount",amount);
        window.location.reload()
    }
}