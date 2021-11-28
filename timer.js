var countdownElement=document.getElementById('countdown-sec');
var countminElement=document.getElementById('countdown-min');
var counthourElement=document.getElementById('countdown-hour');

var initialcountdown=countdownElement.innerHTML;
var mincount=countminElement.innerHTML;
var hourcount=counthourElement.innerHTML;

var min=0;
var hour=0;
var sec=0;

function startfunction(){
setInterval(function(){
    initialcountdown = ++initialcountdown;

    countdownElement.innerHTML=initialcountdown;
    if(initialcountdown==5){
        initialcountdown=0;
        initialcountdown=++initialcountdown;
        
        mincount=++mincount;
        countminElement.innerHTML=mincount;

    }
    else if(mincount==5){
        initialcountdown=0;
        initialcountdown=++initialcountdown;
        mincount=0;
        mincount=++mincount;

        hourcount=++hourcount;
        counthourElement.innerHTML=hourcount;
    }

}, 1000);
}
function pausefunction(){ 
 
    sec=countdownElement.innerHTML;
    min=countminElement.innerHTML;
    hour=counthourElement.innerHTML;
     
}
function resetfunction(){

initialcountdown=0;
if(initialcountdown==0)
{
    countminElement.innerHTML=0;
    counthourElement.innerHTML=0;
}


}