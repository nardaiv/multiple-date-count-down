import React from "react";

export default function OtherSchedule(props){
    const tableElement = props.data[props.selectedMenu].events.map((val, i)=>{
        return(
            <tr className={val.isEventPast? "leading-10 line-through": "leading-10"}
            onClick={()=> val.isEventPast&& console.log("hello")}
            key={i}>
                <td className="border-y-2 border-darkgrey">{val.title}</td>
                <td className="border-y-2 border-darkgrey text-right">{new Date(val.date).toDateString()}</td>
            </tr>
        )

    })

    return(
        <div className="mt-10 w-full md:w-9/12 lg:w-6/12 ">
            <h2 className="font-semibold text-[24px] mb-2">Other Events</h2>
            <table className="table-fixed border-collapse border-spacing-0 text-[14px] w-full">
                <tbody>
                    {tableElement}
                </tbody>
            </table>
        </div>
    )
}