
//dom
//tempp1
console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByClassName("element"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.body.firstElemeneChild);
console.log(document.getElementsByName("JS"))
let div =document.querySelectorAll("div");
console.log( div[0]);
div =document.querySelectorAll(".element");
console.log( div[0]);
div =documentdiv =document.querySelectorAll("#elzero");
console.log( div[0]);
//temp2
for(let i=1;i<=10;i++){
let img=document.getElementsByTagName("img");
img[i].setAttribute("src","https://elzero.com") ;
img[i].alt="elzero logo";
console.log(img[i]);

}
//temp3
let input=document.getElementById("na");
input.onclick=function(){
    let div =document.getElementById("div");
    let value=input.value||0;
    div.innerHTML=`<h2>${value} USD dollar =${value*15.6}</h2>`;

};
//temp4
let one=document.getElementsByClassName("one");

let two=document.getElementsByClassName("two");
one[0].setAttribute("title","one");
two[0].setAttribute("title","two");
one[0].innerHTML="one";
two[0].innerHTML="two 2";
console.log(one[0]);
console.log(two[0]);
//temp5

for(let x=0;x<5;x++){
    let im=document.querySelectorAll(" .im");

    if(im[x].hasAttribute("alt")===true){
        im[x].setAttribute("alt","old");
    
    }
    else{

        im[x].setAttribute("alt","Elzero new");
    }
    console.log(im[x]);
}
//temp6
document.addEventListener("DOMContentLoaded",function(){
inpNum=document.getElementsByName("elements");
inptext=document.getElementsByName("texts");
let res=document.getElementsByClassName("results")[0];
let action=document.forms[1]; 
 let text=inptext.value;
let num= parseInt(inpNum.value);
action.onSubmit= function(event)
{
    if(num&&text){
    
for(let i=0;i<num;i++){
    let el=document.createElement("div");
    
    el.innerHTML=text;
    
    el.style.display="flex";
    el.style.border="1px solid #ccc";
res.appendChild(el);
   // document.body.appendChild(res);
   

}}
}
});
//dom
let header = document.createElement("div");

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "20px";

// logo
let logo = document.createElement("h2");
logo.textContent = "Elzero";
logo.style.color = "green";

// links
let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.gap = "15px";

let links = ["Home", "About", "Service", "Contact"];

links.forEach(function(link){
    
    let li = document.createElement("li");
    li.textContent = link;

    ul.appendChild(li);

});

header.appendChild(logo);
header.appendChild(ul);

document.body.appendChild(header);


    let container = document.createElement("div");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3,1fr)";
container.style.gap = "10px";
container.style.padding = "20px";

for(let i = 1 ; i <= 15 ; i++){

    let box = document.createElement("div");

    box.style.background = "#eee";
    box.style.textAlign = "center";
    box.style.padding = "20px";
    box.style.borderRadius = "5px";

    let number = document.createElement("h3");
    number.textContent = i;

    let text = document.createElement("p");
    text.textContent = "Product";

    box.appendChild(number);
    box.appendChild(text);

    container.appendChild(box);
}

document.body.appendChild(container);
let footer = document.createElement("div");

footer.textContent = "Copyright 2021";

footer.style.background = "green";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";

document.body.appendChild(footer);
//bom
   let prommsg=prompt("print number from - to","examble 5-20");
let num1=parseInt(prommsg);

        for(let j=prommsg[1];j<prommsg[3];j++){
        console.log(j)
    }
    //temp2

function createPopup() {
            
            const overlay = document.createElement('div');
            overlay.className = 'popup-overlay';
            
            const popup = document.createElement('div');
            popup.className = 'popup';
            
            
            popup.innerHTML = 
               ` <h1>Welcome</h1>
                <p>Welcome To Elzero Web School</p>
                <button class="close-btn">Close</button> `
            ;
            
            
            overlay.appendChild(popup);
            document.body.appendChild(overlay);
            
            const closeButton = popup.querySelector('.close-btn');
            closeButton.addEventListener('click', function() {
                overlay.remove();
            });
        }
        
        
        window.addEventListener('load', function() {
            setTimeout(createPopup, 5000);
        });

//
    const  counter = document.getElementById('counter');
        let count = parseInt(counter.textContent);
        
        function updateCounter() {
            if (count > 0) {
                count--;
                counter.textContent = count;
                
                if (count === 5) {
                    window.open('https://elzero.org', '_blank', 'width=800,height=600');
                }
            } else {
                clearInterval(intervalId);
            
                console.log('counter stopped');
            }
        }
        
    
        const intervalId = setInterval(updateCounter, 1000);
        console.log(intervalId);





