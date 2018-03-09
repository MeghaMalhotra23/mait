var flag=0;
var flag4=0;
var flag2=0;
var flag3=0;
function readMore(){
    document.getElementById("read-more").style.display = "block";   
}
function readMore2(){
    document.getElementById("read-more2").style.display = "block";   
}
function clos(){
    document.getElementById("read-more").style.display = "none";
}
function clos2(){
    document.getElementById("read-more2").style.display = "none";
}
function dis(){
    if(flag==0){
        flag=1;
document.getElementById("hide").style.display="block";}
    else{
        flag=0;
        document.getElementById("hide").style.display="none";
    }
}
function dis2(){
    if(flag2==0){
        flag2=1;
document.getElementById("hide2").style.display="block";}
    else{
        flag2=0;
        document.getElementById("hide2").style.display="none";
    }
}
function dis3(){
    if(flag3==0){
        flag3=1;
document.getElementById("hide3").style.display="block";}
    else{
        flag3=0;
        document.getElementById("hide3").style.display="none";
    }
}
function dis4(){
    if(flag4==0){
        flag4=1;
document.getElementById("hide4").style.display="block";}
    else{
        flag4=0;
        document.getElementById("hide4").style.display="none";
    }
}