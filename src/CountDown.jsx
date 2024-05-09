import React from 'react'

export default function CountDown(props){
    const selectedEvent = props.data.schedules[props.selectedMenu].events[0]
    const eventDate = new Date(selectedEvent.date);
    const remainingTime =  Math.ceil((eventDate.getTime() - props.currentDate.getTime())/(1000*60*60*24));
    return (
        <div className='bg-grey border-2 border-darkgrey w-12/12 rounded-xl p-3 mt-5 text-center'>
            <h2 className='font-bold text-[26px]'>{selectedEvent.title}</h2>
            <p className='text-mainblue text-[128px] font-bold'>{remainingTime}</p>
            <p className='text-faintblack font-semibold text-[32px]'>Day{remainingTime >1 ? "s": ""} Left</p>
        </div>
    )
}