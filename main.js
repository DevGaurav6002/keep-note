// Getting The reference of all the Buttons .

let createBtn = document.querySelector(".container .create-btn .create");
let submitBtn = document.querySelector(".save-btn button");
let remove = document.querySelector(".e-r-btns .remove");
let edit = document.querySelector(".e-r-btns .edit");

//Getting the reference of all the input Feilds .

let moduleHeading = document.querySelector(".module-heading #module-heading");
let moduleDescription = document.querySelector(".module-description #module-description");

//getting Parent of the div which is going to be the actual note .

let notesParent = document.querySelector(".notes");
let note = document.querySelector(".note");

//Getting a Create Module . 

let createModule = document.querySelector(".create-module");

//Starting a Logical Coding .

createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createModule.style.visibility = "visible";
    notesParent.style.visibility = "hidden";
});

submitBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    //Getting the Heading and Description .
    let myHeading = moduleHeading.value;
    let myDesc = moduleDescription.value;
    localStorage.setItem("head",myHeading);
    localStorage.setItem("desc",myDesc);
    let getHeading = localStorage.getItem("head");
    let getDescription = localStorage.getItem("desc");
    //creating a Div and its childs to make a Note Div .
    let div = document.createElement("div");
    div.classList.add("note");
    let h2 = document.createElement("h2");
    let heading = document.createTextNode(getHeading);
    h2.appendChild(heading);
    let p = document.createElement("p");
    let description = document.createTextNode(getDescription);
    let btn_div = document.createElement("div");
    btn_div.classList.add("e-r-btns");
    let rBtn = document.createElement("button");
    rBtn.classList.add("remove");
    let eBtn = document.createElement("button");
    eBtn.classList.add("edit");
    text_remove = document.createTextNode("Remove");
    text_edit = document.createTextNode("Edit");
    rBtn.appendChild(text_remove);
    rBtn.addEventListener("click" , (e) => {
        e.preventDefault();
        let myrbtn = e.target;
    let mytargetNote = myrbtn.parentElement.parentElement;
    notesParent.removeChild(mytargetNote);
    });
    eBtn.appendChild(text_edit);
    btn_div.appendChild(rBtn);
    btn_div.appendChild(eBtn);
    p.appendChild(description);
    div.appendChild(h2);
    div.appendChild(p);
    notesParent.appendChild(div);
    div.appendChild(btn_div);
    //Resets The Screeen
     createModule.style.visibility = "hidden";
    notesParent.style.visibility = "visible";
});

//Removing the List 

let myRemove = document.querySelector(".e-r-btns .remove");
myRemove.addEventListener("click" , (e) => {
    e.preventDefault();
    let rbtn = e.target;
    let targetNote = rbtn.parentElement.parentElement;
    notesParent.removeChild(targetNote);
});


//Filter Logic

let inputFeild = document.querySelector("#search-bar");
inputFeild.addEventListener("keyup" , (e) => {
    e.preventDefault();
    let inputHead = document.querySelectorAll(".note h2");
let inputText = document.querySelector("#search-bar").value;
    inputHead.forEach( h => {
    if(h.innerHTML.includes(inputText) == true) {

        document.querySelector(".note").style.display = "";
    }
    else {
        document.querySelector(".note").style.display = "none";
    }
});
});
