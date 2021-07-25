// we have to create the save fonctionality


// document.getElementById("count").innerText=4

let count=document.getElementById("count")
let sum=0
function add()
{
    sum=sum+1
    count.textContent=sum
 
}

function sub(){
    let well
    well=--sum
    count.textContent=well
}

let sav=document.getElementById("prev_num")
function save()
{
   sav.textContent+=" -"+sum
   count.textContent=0
   sum=0
    
}




    
 
