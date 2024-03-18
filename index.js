// Get elements

const inputEl = document.querySelector("textarea");
const publishBtnEl = document.getElementById("publishBtn");
const endorsementSection = document.querySelector(".endorsements-section");

//

publishBtnEl.addEventListener("click", function(){
    appendItem();
    inputEl.value = "";
});


function appendItem(){
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.classList.add("endorsement");
    p.textContent = inputEl.value;
    div.append(p);
    endorsementSection.append(div);
}