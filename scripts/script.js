 
let count=0;
function countInc(){
    count+=1;
    document.getElementById("count").innerText=count;
}


function save(){
    console.log(count);
    let saveEl=document.getElementById("save-el").textContent;
    let savedEntries=saveEl+""+count+" - "
    document.getElementById("save-el").textContent=savedEntries;
    document.getElementById("count").innerText=0;
    count=0;
}


