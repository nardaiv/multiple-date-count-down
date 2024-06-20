let Data = {
    schedules:[
        {
            groupName : "Summer",
            events : [
                {title : "School Work"},
                {title : "Go to beach"},
                {title : "Playing volly"},
                {title : "Visit Relatives"},
            ]
        },
        {
            groupName : "Winter",
            events : [
                {title : "Ski"},
                {title : "Ice skating"}
            ]
        }
    ]
}

function generateDate(){
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear(); 
	const RandomDate = Math.ceil(Math.random()*30)
	return `${currentYear}-${currentMonth}-${RandomDate}`
}

for (let i=0; i<Data.schedules.length ; i++){
	for(let j = 0; j<Data.schedules[i].events.length; j++){
		Data.schedules[i].events[j]= {...Data.schedules[i].events[j], date : generateDate() }
	}
}


export default Data;
