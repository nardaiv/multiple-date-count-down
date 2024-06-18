import React from 'react'

export default function CountDown(props){
	const selectedEvent = props.selectedEventIndex;
	let remainingDate, eventDate = null
	if(selectedEvent){
		eventDate = new Date(selectedEvent.date);
		remainingDate = Math.ceil((eventDate.getTime() - props.currentDate.getTime())/(1000*60*60*24));
	}

	return (
		<div className='bg-grey border-2 border-darkgrey w-full md:w-6/12 lg:w-3/12 rounded-xl p-3 mt-5 text-center min-h-[200px]'>
		{selectedEvent ? (
			<div>
			<h2 className='font-bold text-[28px]'>{selectedEvent.title}</h2>
			<p className='text-mainblue text-[128px] font-bold'>{remainingDate}</p>
			<p className='text-faintblack font-semibold text-[32px]'>Day{remainingDate>1 ? "s": ""} Left</p>
			</div>
		) : 
			<h2 className='font-bold text-[30px]' >There is no upcomming event</h2>
		
		}
		</div>
	)
}
