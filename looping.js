


for(let go = 0 ; go < 10; go++) { //increment
    console.log("sesuatu")
    console.log("hal")
}

for(let ho = 20 ; ho >= 0 ; ho--){ //decrement
    console.log(ho)
}

for(let go = 0 ; go < 10; go++) {
    console.log(go)
}


let daun = 1;
while(daun <= 10) {
    console.log(daun)
    daun++;  //increment
}

let daun1 = 10;
while(daun1 >= 1) {
    console.log(daun1)
    daun1--;  //decremeht
}

let saldo = 110000
let biayaAdmin = 8000;
let sukuBunga = 0.02;
 if (saldo >= 0) {
      saldo = saldo + (sukuBunga * saldo);
  }
  else {
       saldo = saldo - biayaAdmin;
  }
  console.log(saldo);


  let pendapatan =  300000;
  if (pendapatan>=0 && pendapatan <=200000){
    jasa = 10000;
    komisi = 0.1*pendapatan;
  }else if (pendapatan<=500000){
    jasa = 20000;
    komisi = 0.15*pendapatan;
  }else{
    jasa = 30000;
    komisi=0.2*pendapatan;
  }

  TOTAL = komisi + jasa;
  console.log(TOTAL)

  let x = 1
    for (let x = 1; 10 !== x; x++) {
        console.log(x)
    }