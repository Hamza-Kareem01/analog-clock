let hr=document.getElementById("hour");
let min=document.getElementById("mint");
let sec=document.getElementById("sec");



function displayTime(){
     date= new Date();


     hh=date.getHours();
     mm=date.getMinutes();
     ss=date.getSeconds();


      hRotation=hh*30+mm*(360/720);
      mRotation=6*mm+ss*(360/3600);
      sRotation=6*ss;



     hr.style.transform=`rotate(${hRotation}deg)`
     min.style.transform=`rotate(${mRotation}deg)`
     sec.style.transform=`rotate(${sRotation}deg)`
}


setInterval("displayTime()",1000)