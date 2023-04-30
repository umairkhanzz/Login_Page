/*//.setattribute()    .getattribute()       localStorage.setItem()      localStorage.getItem()

let heading = document.querySelector('h1');

heading.addEventListener('click' , function () {
    heading.textContent="Punjab university GRW Campus";
});

let doc = document.querySelector('#content');

doc.addEventListener('click' , function () {
    alert("Have a Good Day")
})

//let uname = prompt("enter your name");

*/

let doc = document.querySelector('#content');

doc.addEventListener('click' , function () {
    alert("Have a Good Day")
})

//    for changing header image  

var image = document.querySelector('#img1');



const title = document.querySelector("h1");
const button = document.querySelector(".btn");

image.addEventListener("click", () => {
    if (image.src != "images/download.jpg") {
        image.src = "images/g.png";
    }

    else {
        image.src = "images/download.jpg";
    }
})

//    for changing user name of header


if (localStorage.getItem("name") === null || localStorage.getItem("name") === "") {
    /*let uname = prompt("enter your name");
    let gender = prompt("Enter you gender");
    if(gender === 'male')
    {
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome , MR "+ localStorage.getItem("name");
    }else{
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome , Miss "+ localStorage.getItem("name");
    }*/
    let uname = prompt("enter your name");

    while (uname.length <= 2) {
        uname = prompt("enter your name");
    }

    let gender = prompt("enter your gender");

    while (gender.length <= 2) {
        gender = prompt("enter your gender");
    }

    if (gender === 'male') {
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome, Mr " + localStorage.getItem("name");
    }
    else {
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome, Miss " + localStorage.getItem("name");
    }



}
else {
    title.textContent = "Wellcome ," + localStorage.getItem("name");
}

button.addEventListener("click", () => {

    let uname = prompt("enter your name");

    while (uname.length <= 2) {
        uname = prompt("enter your name");
    }

    let gender = prompt("enter your gender");

    while (gender.length <= 2) {
        gender = prompt("enter your gender");
    }

    if (gender === 'male') {
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome, Mr " + localStorage.getItem("name");
    }
    else {
        localStorage.setItem("name", uname);
        title.textContent = "Wellcome, Miss " + localStorage.getItem("name");
    }


})



