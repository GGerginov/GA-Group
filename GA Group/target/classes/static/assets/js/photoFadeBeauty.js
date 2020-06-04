function fadeInImg(x){
    
    let id = x.id.split("-")[1];
    if(id == undefined){
        // x.style.opacity = "0.5";
        x.style.border = "2px solid black";
        
        document.getElementById("details").style.display = "block";   document.getElementById("details").style.opacity = "1";
    }
    else{
        // x.style.opacity = "0.5";
        x.style.border = "2px solid black";

        document.getElementById("details"+"-"+id)
            .style.display = "block";   
        document.getElementById("details"+"-"+id).style.opacity = "1";
    }
    


}

function fadeOutImg(x){
    let id = x.id.split("-")[1];
    x.style.border = "none";

    if(id == undefined){
        x.style.opacity = "0.5";
        x.style.opacity = "1.00";
        document.getElementById("details").style.display = "none";
    }
    
    else{
        x.style.opacity = "1.00";
        document.getElementById("details"+"-"+id).style.display = "none";

    }
}