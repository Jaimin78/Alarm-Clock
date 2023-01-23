//Adding Options to Select 
const getOptions = () => {
  let addHour = document.getElementById('hour');
  let addMinute = document.getElementById('minute');
  let addSecond = document.getElementById('second');
  let i;
  for(i=0; i<60; i++)
    {
      
     i<9?
       addMinute.add(new Option(`0${i+1}`))
       :
       addMinute.add(new Option(i+1))
     
     i<9?
       addSecond.add(new Option(`0${i+1}`))
       :
       addSecond.add(new Option(i+1)) 
  
    }

   for(i=0; i<12; i++)
     {
       i<9?
         addHour.add(new Option(`0${i+1}`))
         :
         addHour.add(new Option(i+1))
     }
}

//Showing Current Time 
const showTime = () => {
  let element = document.getElementById('time');
  setInterval(()=>{  
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let zone = hour<12?"AM":"PM"
    hour = hour<12? hour:hour-12
    hour==0?hour=12:hour

    //console.log(hour-12, minute, second, zone, element)
    element.innerText = `${hour}:${minute}:${second} ${zone}`;
  },1000)
}


//OnClick Set Alarm it will set Alarm for upcoming time
const setAlerm = () =>
{
  let hour = document.getElementById('hour').value; 
  let minute = document.getElementById('minute').value;
  let second = document.getElementById('second').value;

  
  
  const date = new Date()
  let h = date.getHours() 
  let m = date.getMinutes()
  let s = date.getSeconds()
  h>12?h=h-12:h

  if(hour!=0){
        if(minute!= "invalid" && second!= "invalid"){   
          
           let msg = document.getElementById('msg');     
           //console.log(hour, minute, second)
           //console.log(h, m, s)
           let milisecond1 = (Number(hour)*60*60+Number(minute)*60+Number(second))*1000
           let milisecond2 = (h*60*60+m*60+s)*1000  
           let milisecond = milisecond1 - milisecond2
           //console.log(milisecond)  
                 
           msg.innerText = `Alarm set at: ${hour}:${minute}:${second}`
          setTimeout(()=>{
            let img = document.getElementById('img')
            let btn = document.getElementById('stop-alerm');
            btn.style.display = "block";
            img.classList.add('shake')
            audioplay(1)
          },milisecond)
        }
        else{
           alert("please select proper option for minutes and second")
        }
    }else{
       alert("Please select hour")
    }
}

const stopAlerm = () =>{
  let btn = document.getElementById('stop-alerm');
  let img = document.getElementById('img');  
  let msg = document.getElementById('msg');
  msg.innerText = ``
  img.classList.remove('shake')
  btn.style.display = "none";
  audioplay(0)
}


const audioplay = (i) =>{
   let x = document.getElementById("myAudio"); 
   if(i==1){
     x.play()
   }else{
     x.pause();
   }
   
}

showTime()
getOptions()