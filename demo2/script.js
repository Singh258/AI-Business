// ==========================
// DentalAI Demo 1 Version 2.0
// script.js
// ==========================

const form = document.getElementById("bookingForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");
const submitBtn = document.querySelector(".submit-btn");

if(form){

form.addEventListener("submit", async(e)=>{

e.preventDefault();

submitBtn.classList.add("loading");

const formData = new FormData(form);

try{

const response = await fetch(form.action,{
method:"POST",
body:formData
});

const result = await response.json();

submitBtn.classList.remove("loading");

if(result.success){

popup.classList.add("show");

form.reset();

}else{

alert("Something went wrong. Please try again.");

}

}catch(error){

submitBtn.classList.remove("loading");

alert("Network Error.");

}

});

}

if(closePopup){

closePopup.addEventListener("click",()=>{

popup.classList.remove("show");

});

}

window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

});

// Current Year (optional)
document.querySelectorAll("[data-year]").forEach(el=>{
el.textContent = new Date().getFullYear();
});

// Smooth reveal animation
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{
threshold:.15
});

document.querySelectorAll(".feature-card,.step,.stat-card,.voice-card,.booking-form-card").forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".7s ease";

observer.observe(item);

});
