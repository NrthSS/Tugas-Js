// 18 JANUARI 2024
// !!!

// NOMOR 1111111



let nama = "Iqbal"
let pabp = 80;
let matematika = 90;
let dpk = 90;

let rataRata = Math.floor((pabp + matematika + dpk) / 3);
if(rataRata >= 80 && rataRata <=100){
    grade ="mendapat grade A "
}
else if(rataRata >=75 && rataRata<= 80){
    grade = "mendapat grade B "
}
else if(rataRata >= 65 && rataRata<= 75){
    grade =  "mendapat grade C "
}
else if(rataRata >= 45 && rataRata<= 65){
    grade =  "mendapat grade D "
}
else if(rataRata >= 0 && rataRata<= 45){
    grade =  "mendapat grade E "
}
else {
    grade = "Grade K"
}

console.log(nama, "mendapatkan rata - rata nilai " + rataRata, grade)




// NOMOR 222222222
// 


let kode = 27225087353;
let g = Math.floor(kode % 1000000000000 / 100000000000);
let dd =  Math.floor(kode % 10000000000 / 10000000000);
let mm = Math.floor(kode % 1000000000 / 1000000000);
let yyyy = Math.floor(kode % 1000000 / 100);
let nn = Math.floor(kode % 10000);

if (g >= 1 && g <= 4) {
    let = bulanName;
    switch(mm) {
        case 1: bulanName = 'JAN' ; break;
        case 2: bulanName = 'feb' ; break;
        case 3: bulanName = 'mar' ; break;
        case 4: bulanName = 'apr' ; break;
        case 5: bulanName = 'mei' ; break;
        case 6: bulanName = 'juni' ; break;
        case 7: bulanName = 'juli' ; break;
        case 8: bulanName = 'agst' ; break;
        case 9: bulanName = 'sep' ; break;
        case 10: bulanName = 'okt' ; break;
        case 11: bulanName = 'nov' ; break;
        case 12: bulanName = 'des' ; break;
        default : bulanName = "invalid";
    } 
    console.log (`${kode} adalah seorang pegawai bergolongan ${g}, lahir tanggal ${dd}, bulan ${mm} tahun ${yyyy} dan bernomor urut ${nn}`)
} else {
    console.log('golongan tidak valid')
}





// // NOMOR 33333

// let jam = 2;
// let detik = 40;
// let menit = 50;
// let TambahDetik = detik + 1

// if(TambahDetik >59) {
//     hasildetik = 0;
//     hasilmenit = menit + 1;
//     hasiljam = jam;
//     console.log (`${hasiljam} ${hasilmenit} ${hasildetik}`)

// if (menit > 59) {
//     hasildetik = hasildetik;
//     hasilmenit = 0;
//     hasiljam = jam + 1;
//     console.log(`${hasiljam} ${hasilmenit} ${hasildetik}`)
// }
// if(jam > 23) {
//     hasildetik = 0;
//     hasilmenit = 0;
//     hasiljam = 0;
//     console.log('${hasiljam} ')
// }
// }


// let hh = 2;
// let minit = 40;
// let ditik = 50;
// let hasil = detik 






// TAHUN KABISATT !! //
// Tahun KAbisat  !! //

// MENGGUNAKAN DO

let tahunAwal = Number(prompt("masukan tahun"));

do {
    if(tahunAwal % 4 != 0) {
        HOSIL = `${tahunAwal} ini Bukan tahun kabisat %4 `;
    }
    else if(tahunAwal % 100 != 0) {
        HOSIL = `${tahunAwal} ini tahun kabisat Hasil % 100` ;
    }
    else if(tahunAwal % 400 == 0 ) {
        HOSIL = `${tahunAwal} ini adalah tahun kabisat hasil %400`;
    }else {
        HOSIL = `${tahunAwal} ini Bukan tahun kabisat !!!!!!#`
    }
    tahunAwal+= 4
    console.log(HOSIL)
    }while(tahunAwal <= 2024) 


    // MENGGUNAKAN FOR !!

    for(let i = Number(prompt("masukan tahun")); i <= 2023; i+=4) {
        if(i % 4 != 0) {
            HISIL = `${i} ini bukan tahun kabisat %4`;
        }
        else if (i % 100 != 0 ) {
            HISIL = `${i} ini tahun kabisat dari %100`;
        }  
        else if(i % 400 == 0 ) {
            HISIL = `${i} ini adalah tahun kabisat hasil %400`;
        }else {
            HISIL = `${i} ini bukan tahun kabisat !!!!!!#`
        } console.log(HISIL)
    }

    // MENGGUNAKAN WHILE !!

    let TahunAwal = Number(prompt("masukan tahun"));
    while (TahunAwal <= 2023) {
        if(TahunAwal % 4 != 0) {
            HASIL = `${TahunAwal} ini Bukan tahun kabisat %4`;
        }
            else if(TahunAwal % 100 != 0) {
            HASIL = `${TahunAwal} ini tahun kabisat Hasil % 100` ;
        }
            else if(TahunAwal % 400 == 0 ) {
            HASIL = `${TahunAwal} ini adalah tahun kabisat hasil %400`;
            }else {
            HASIL = `${TahunAwal} ini Bukan tahun kabisat !!!!!!#`
            }TahunAwal+=4
            console.log(HASIL)
    } 

