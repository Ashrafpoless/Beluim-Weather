const organizeWeather = (weather)=>{
    const {time, temperature_2m}= weather.hourly;
    const days = {};
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let oldTemp;
    // let arrow;
    time.forEach((hour, index) => {
        const now = new Date(hour)

        const day= now.getDate();
        const dayOfWeek = weekDays[now.getDay()]; 
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        hours = hours < 10 ?`0${hours}` : hours;
        minutes = minutes < 10 ?`0${minutes}` : minutes;
        seconds = seconds < 10 ?`0${seconds}` : seconds;    
        
        const temp = temperature_2m[index];
        const formattedTemp = temp.toFixed(1)    
        
        // check the old and the new temperature
        let arrow;
        if (oldTemp){
            if(oldTemp > temp){
                arrow= 'down'
            }else if(oldTemp < temp){
                arrow = 'up'; 
            }else{
                arrow = 'same'; 
            }
        }else{
            arrow = '';
        }
        
        
        const hourAndTemp = {
            hours: `${hours}:${minutes}:${seconds}`,
            temp: formattedTemp,
            arrow : arrow
        };
        
        if(!days[day]){
            days[day] = {dayOfWeek, data: [hourAndTemp]};        
        }else{
            days[day].data.push(hourAndTemp);
        }
        oldTemp = temp;
    });
    

    return days ;
};

export default organizeWeather;