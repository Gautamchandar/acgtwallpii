const accessKey = "SNoqCtZht4PN9ZFaHYqHeyNOo_GpzJdIHBKh_C-mxEs";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const result = data.results;

    if (page === 1) {
        searchResult.innerHTML = ""
    }
    result.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResult.appendChild(imageWrapper)
    })
    page++;
    if (page > 1) {
        showMore.style.display = "block"
    }
}
formElement.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})
showMore.addEventListener("click", () => {
    searchImages()
})
var btnvar1 = document.getElementById('btn1');
var btnvar2 = document.getElementById('btn2');
var btnvar3 = document.getElementById('btn3');
var btnvar4 = document.getElementById('btn4');
var btnvar5 = document.getElementById('btn5');
var btnvar6 = document.getElementById('btn6');
var btnvar7 = document.getElementById('btn7');
var btnvar8 = document.getElementById('btn8');
var btnvar9 = document.getElementById('btn9');

function Toggle1(){
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}
function Toggle2(){
         if (btnvar2.style.color =="red") {
             btnvar2.style.color = "grey"
         }
         else{
             btnvar2.style.color = "red"
         }
}
function Toggle3(){
         if (btnvar3.style.color =="red") {
             btnvar3.style.color = "grey"
         }
         else{
             btnvar3.style.color = "red"
         }
}
function Toggle4(){
         if (btnvar4.style.color =="red") {
             btnvar4.style.color = "grey"
         }
         else{
             btnvar4.style.color = "red"
         }
}
function Toggle5(){
         if (btnvar5.style.color =="red") {
             btnvar5.style.color = "grey"
         }
         else{
             btnvar5.style.color = "red"
         }
}
function Toggle6(){
         if (btnvar6.style.color =="red") {
             btnvar6.style.color = "grey"
         }
         else{
             btnvar6.style.color = "red"
         }
}
function Toggle7(){
         if (btnvar7.style.color =="red") {
             btnvar7.style.color = "grey"
         }
         else{
             btnvar7.style.color = "red"
         }
}
function Toggle8(){
         if (btnvar8.style.color =="red") {
             btnvar8.style.color = "grey"
         }
         else{
             btnvar8.style.color = "red"
         }
}
function Toggle9(){
         if (btnvar9.style.color =="red") {
             btnvar9.style.color = "grey"
         }
         else{
             btnvar9.style.color = "red"
         }
}
function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();

  function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com", 
        Username : "gautamnogai@gmail.com",
        To : 'gautamnaugai882@gmail.com',
        From : document.getElementById("email").value,
        Subject : "ACGT has created the wallpaper Website",
        Body : "Welcome to our website"
    }).then(
      message => alert(message)
    );
  }