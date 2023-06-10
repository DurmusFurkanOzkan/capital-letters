//* SELECTORS

const textarea=document.querySelector("#textarea");

const btn=document.querySelector("#btn");

let par=document.createElement("p");

btn.addEventListener("click", ()=>{
    const text = document.createTextNode(textarea.value);

    par.appendChild(text);

    btn.after(par);
    par.style.color = "red";
    par.style.border = "3px solid black";

    const arrayText = textarea.value.split(" ");

    let a = "";

    for (let index = 0; index < arrayText.length; index++) {
        a+= arrayText[index][0].toLocaleUpperCase()+arrayText[index].slice(1)+" ";
        
    }
    par.textContent=a;
    console.log(a);

})