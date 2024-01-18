    let nama = "Budi";
    let gajipokok= 15000000;  /*gaji pook*/
    let tunjangan= 0.2 * gajipokok; /*tunjangan*/
    let pajak = 0.15 * (gajipokok + tunjangan);
    let gajibersih = gajipokok + tunjangan - pajak;

    // console.log(pekerja)
    console.log("nama " + nama, "Gaji Pokok " + gajipokok, "tunjangan " +tunjangan, "pajak " + pajak, "gajibersih " + gajibersih)
    