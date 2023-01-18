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
getOptions()