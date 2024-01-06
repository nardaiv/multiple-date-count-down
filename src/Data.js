export default {
    snbp : [
        {
            title : "Pengumuman Kuota Sekolah",
            isMultipleDate : false,
            date : "28-12-2023"
        },
        {
            title : "Masa Sanggah Kuota Sekolah",
            isSingleDate : true,
            date : {
                start : '28-12-2023',
                end : '17-1-2024'
            }
        },
        {
            title : "Pengisian PDSS",
            isSingleDate : true,
            date : {
                start : '9-1-2024',
                end : '9-2-2024'
            }
        },
        {
            title : "Pendaftaran SNBP",
            isSingleDate : true,
            date : {
                start : '14-2-2024',
                end : '28-2-2024'
            }
        },
        {
            title : "Pengumuman Hasil SNBP",
            isSingleDate : true,
            date : "26-3-2024"
        },
    ],
    snbt : [
        {
            title : 'Pendaftaran UTBK - SNBT',
            isSingleDate : true, 
            date : {
                start : '21-3-2024',
                end : '5-4-2024'
            }
        }, 
        {
            title : 'Pelaksanaan UTBK Gelombang 1 ',
            isSingleDate : 'complex', 
            date : {
                start : '30-4-2024',
                end : '7-5-2024',
                exception : '1-5-2024'
            }
        },
        {
            title : 'Pelaksanaan UTBK Gelombang 2 ',
            isSingleDate :true, 
            date : {
                start : '14-5-2024',
                end : '20-5-2024',
            }
        },
        {
            title : 'Pengumuman Hasil SNBT',
            isSingleDate : false,
            date : '13-6-2024'
        },
        {
            title : 'Masa Unduh Sertifikat UTBK',
            isSingleDate : true,
            date : {
                start : '17-6-2023',
                date : '31-7-2023'
            }
        }
    ]
}