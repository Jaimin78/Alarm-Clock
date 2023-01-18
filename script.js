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

const showTime = () => {
  let element = document.getElementById('time');
  setInterval(()=>{  
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let zone = hour<12?"AM":"PM"
    //console.log(hour-12, minute, second, zone, element)
    element.innerText = `${hour==0?hour=12:hour-12}:${minute}:${second} ${zone}`;
  },1000)
}

showTime()
getOptions()
