const btnstart = document.querySelector('.start');
const btnstop = document.querySelector('.stop');
const btnreset = document.querySelector('.reset');

let hrs=min=sec=ms=0, starttime;

btnstart.addEventListener('click',()=>{

    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');
   starttime = setInterval(()=>{
   ms++;
   if(ms==100){
    sec++;
    ms=0;
   }
   if(sec==60){
    min++;
    sec=0;
   }
   if(min==60){
    hrs++;
    min=0;
   }
   
   update();
   },10);

});

btnstop.addEventListener('click',()=>{
    clearInterval(starttime);
    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');

    

});

btnreset.addEventListener('click',()=>{
   hrs=min=sec=ms=0;
   clearInterval(starttime);
   update();
   btnstart.classList.remove('start-active');
   btnstop.classList.remove('stop-active');




});

function update(){

    perhrs=hrs<10?'0'+hrs:hrs;
    permin=min<10?'0'+min:min;
    persec=sec<10?'0'+sec:sec;
    perms=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=perhrs;
    document.querySelector('.min').innerText=permin;
    document.querySelector('.sec').innerText=persec;
    document.querySelector('.ms').innerText=perms;


}