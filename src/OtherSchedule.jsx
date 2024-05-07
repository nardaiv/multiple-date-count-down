import React from "react";

export default function OtherSchedule(props){
    const data = props.data

    const tableElement = props.data[props.selectedMenu].map((val, i)=>{
        return(
            <tr key={i}>
                <td className="border-y-2 border-darkgrey">{val.title}</td>
                <td className="border-y-2 border-darkgrey text-right">{JSON.stringify(val.date)}</td>
            </tr>
        )

    })

    return(
        <div className="mt-10 w-12/12">
            <h2 className="font-semibold text-[24px] mb-2">Jadwal Lainnya</h2>
            <table className="table-fixed border-collapse border-spacing-0 text-[14px] w-full">
                <tbody>
                    {tableElement}
                </tbody>
            </table>
        </div>
    )
}