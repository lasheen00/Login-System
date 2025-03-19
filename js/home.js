//!============= Start Global Variables


let userName=[];
if (localStorage.getItem("sessionUser") !== null) {
  userName = localStorage.getItem("sessionUser");
}
//!============= End Global Variables

//*===> Start Flexible Name
document.querySelector(".username").innerHTML = `<h1>Welcome, ${userName}</h1>`;

//*===> Start logout Btn
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("sessionUser");
  location = "./../index.html";
console.log("hello");
});

