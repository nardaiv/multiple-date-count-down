import React from "react";

export default function OtherSchedule(props){
    
    return(
        <div className="mt-10 w-12/12">
            <h2 className="font-semibold text-[24px] mb-2">Jadwal Lainnya</h2>
            <table className="table-fixed border-collapse border-spacing-0 text-[14px] w-full">
                <tr>
                    <td className="border-y-2 border-darkgrey">Pengumuman Kuota Sekolah</td>
                    <td className="border-y-2 border-darkgrey text-right">28 Des 2023</td>
                </tr>
                <tr>
                    <td className="border-y-2 border-darkgrey">Pengumuman Kuota Sekolah</td>
                    <td className="border-y-2 border-darkgrey text-right">28 Des 2023</td>
                </tr>
            </table>
        </div>
    )
}