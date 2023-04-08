const hexDropDown=document.getElementById("drop-hex");
const rgbDropDown=document.getElementById("drop-rgb");
const hslDropDown=document.getElementById("drop-hsl");
const btnChangeColor=document.getElementById("btn");
const bg=document.body;

let valueHolder=1;
const hex=[0,1,2,3,4,5,6,7,8,9,,"a","b","c","d","e","f"];

hexDropDown.addEventListener("click",()=>{
  if(valueHolder!==1)
  {
    valueHolder=1;
    btnChangeColor.textContent="Click here to generate random color in hex";
  }
},false);

rgbDropDown.addEventListener("click",()=>{
  if(valueHolder!==2)
  {
    valueHolder=2;
    btnChangeColor.textContent="Click here to generate random color in rgb";
  }
});

hslDropDown.addEventListener("click",()=>{
  if(valueHolder!==3)
  {
    valueHolder=3;
    btnChangeColor.textContent="Click here to generate random color in hsl";
  }
});

btnChangeColor.addEventListener("click",()=>{
  if(valueHolder===1)
  {
    let hexColor="#";
    for(let i=0;i<6;i++)
    {
      let ran=hex[Math.floor(Math.random()*(hex.length-1))];
      hexColor+=ran;
      btnChangeColor.textContent=hexColor;
      bg.style.backgroundColor=hexColor;
    }
  }
  else if(valueHolder===2)
  {
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let rgbColor=`rgb(${a}, ${b}, ${c})`;
    btnChangeColor.textContent=rgbColor;
    bg.style.backgroundColor=rgbColor;
  }
  else
  {
    let a=Math.floor(Math.random()*361);
    let b=Math.floor(Math.random()*101);
    let c=Math.floor(Math.random()*101);
    let hslColor=`hsl(${a}, ${b}%, ${c}%)`;
    btnChangeColor.textContent=hslColor;
    bg.style.backgroundColor=hslColor;
  }
});


